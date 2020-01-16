import React from 'react';
import styled from 'styled-components/native';
import {useSelector} from 'react-redux';
import {SwipeListView} from 'react-native-swipe-list-view';

import Icon from './common/Icon';
import TodoItem from './TodoItem';
import TodoNew from './TodoNew';

const StyledView = styled.View`
  padding-top: 22px;
`;

const StyledHiddenView = styled.View`
  padding-horizontal: 15px;
  background-color: #ddd;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const TodoList = () => {
  const todoList = useSelector(state => state.todoList);

  return (
    <StyledView>
      <TodoNew />
      <SwipeListView
        data={todoList}
        renderItem={({item}) => (
          <TodoItem
            text={item.text}
            done={item.done}
            timestamp={item.timestamp}
          />
        )}
        renderHiddenItem={item => (
          <StyledHiddenView>
            <Icon
              onPress={() => {
                console.log('EDIT THIS ITEM', item);
              }}
              name="edit"
            />
            <Icon
              onPress={() => {
                console.log('DELETE ME', item);
              }}
              name="delete"
            />
          </StyledHiddenView>
        )}
        leftOpenValue={75}
        rightOpenValue={-75}
      />
    </StyledView>
  );
};

export default TodoList;
