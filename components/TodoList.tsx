import React, {useState, useRef} from 'react';
import styled from 'styled-components/native';
import {useSelector, useDispatch} from 'react-redux';
import {FlatList} from 'react-native';
import Swipeable from 'react-native-swipeable';

import Icon from './common/Icon';
import TodoItem from './TodoItem';
import TodoNew from './TodoNew';

const StyledView = styled.View`
  padding-top: 22px;
`;

const StyledLeftView = styled.View`
  align-items: flex-end;
  padding-vertical: 5px;
`;

const filterList = (todoList, filter) => {
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

const SwipeableItem = ({item, index}) => {
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);
  const swipeEl = useRef(null);

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
            dispatch({type: 'REMOVE_TODO', timestamp: item.timestamp});
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
