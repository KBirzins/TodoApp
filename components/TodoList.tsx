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

const TodoList = () => {
  const todoList = useSelector(state => state.todoList);
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);
  const swipeEl = useRef(null);

  return (
    <StyledView>
      <TodoNew />
      <FlatList
        keyboardShouldPersistTaps="always"
        keyExtractor={item => item.timestamp.toString()}
        data={todoList}
        renderItem={({item, index}) => {
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
        }}
      />
    </StyledView>
  );
};

export default TodoList;
