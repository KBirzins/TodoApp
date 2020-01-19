import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components/native';
import {useSelector, useDispatch} from 'react-redux';
import {FlatList} from 'react-native';
import Swipeable from 'react-native-swipeable';
import firestore from '@react-native-firebase/firestore';

import Icon from './common/Icon';
import TodoItem, {ITodoItem} from './TodoItem';
import TodoNew from './TodoNew';
import todoActions from '../reducers/todoList/actions';

const StyledView = styled.View`
  padding-top: 22px;
`;

const StyledLeftView = styled.View`
  align-items: flex-end;
  padding-vertical: 5px;
`;

interface IFilter {
  todo: {
    isActive: boolean;
    isPrimaryActive: boolean;
  };
  date: {
    isActive: boolean;
    isPrimaryActive: boolean;
  };
  alphabet: {
    isActive: boolean;
    isPrimaryActive: boolean;
  };
  text: string;
}

const filterList = (todoList: ITodoItem[], filter: IFilter) => {
  const {todo, date, alphabet, text} = filter;
  if (todo.isActive) {
    if (todo.isPrimaryActive) {
      todoList = todoList.filter(item => item.done);
    } else {
      todoList = todoList.filter(item => !item.done);
    }
  }

  if (date.isActive) {
    if (date.isPrimaryActive) {
      todoList = todoList.sort((a, b) => a.timestamp - b.timestamp);
    } else {
      todoList = todoList.sort((a, b) => b.timestamp - a.timestamp);
    }
  }

  if (alphabet.isActive) {
    if (alphabet.isPrimaryActive) {
      todoList = todoList.sort((a, b) => a.text.localeCompare(b.text));
    } else {
      todoList = todoList.sort((a, b) => b.text.localeCompare(a.text));
    }
  }

  if (text !== '') {
    todoList = todoList.filter(item => item.text.includes(text));
  }

  return todoList;
};

const getUsersFromFirebase = async () => {
  const querySnapshot = await firestore()
    .collection('users')
    .get();

  console.log('Total users', querySnapshot.size);
  console.log('User Documents', querySnapshot.docs);

  return querySnapshot;
};

const SwipeableItem = ({item, index}: {item: ITodoItem; index: any}) => {
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState<
    boolean | {index: number; isEditing: boolean}
  >(false);
  const swipeEl = useRef<null | any>(null);

  return (
    <Swipeable
      ref={swipeEl}
      leftButtons={[
        <StyledLeftView>
          <Icon
            onPress={() => {
              if (!isEditing) {
                setEditing({index, isEditing: true});
                swipeEl.current.recenter();
              } else {
                setEditing(!isEditing);
              }
            }}
            name="edit"
          />
        </StyledLeftView>,
      ]}
      rightButtons={[
        <Icon
          onPress={() => {
            dispatch(todoActions.removeTodo(item.timestamp));
          }}
          name="delete"
        />,
      ]}>
      <TodoItem
        text={item.text}
        done={item.done}
        timestamp={item.timestamp}
        isEditing={isEditing && isEditing.index === index}
        onEditingDone={() => setEditing(false)}
      />
    </Swipeable>
  );
};

const TodoList = () => {
  const todoList = useSelector(state => state.todoList);
  const filter = useSelector(state => state.filter);

  const filteredList = filterList(todoList, filter);
  const [users, setUsers] = useState([]); // Initial empty array of users
  const [loading, setLoading] = useState(true); // Set loading to true on component mount

  // On load, fetch our users and subscribe to updates
  // useEffect(() => {
  //   const unsubscribe = firestore()
  //     .collection('users')
  //     .onSnapshot(querySnapshot => {
  //       // Add users into an array
  //       const users = querySnapshot.docs.map(documentSnapshot => {
  //         return {
  //           ...documentSnapshot.data(),
  //           key: documentSnapshot.id, // required for FlatList
  //         };
  //       });

  //       // Update state with the users array
  //       setUsers(users);

  //       // As this can trigger multiple times, only update loading after the first update
  //       if (loading) {
  //         setLoading(false);
  //       }
  //     });

  //   return () => unsubscribe(); // Stop listening for updates whenever the component unmounts
  // }, []);

  // if (loading) {
  //   return null; // Show a loading spinner
  // }

  return (
    <StyledView>
      <TodoNew />
      <FlatList
        keyboardShouldPersistTaps="always"
        keyExtractor={item => item.timestamp.toString()}
        data={filteredList}
        renderItem={({item, index}) => {
          return <SwipeableItem item={item} index={index} />;
        }}
      />
    </StyledView>
  );
};

export default TodoList;
