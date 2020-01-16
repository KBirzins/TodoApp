import React from 'react';
import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';

const StyledView = styled.View`
  padding-top: 22px;
`;

import TodoItem from './TodoItem';
import TodoNew from './TodoNew';

const TodoList = () => {
  const todoList = useSelector(state => state.todoList);

  return (
    <StyledView>
      <TodoNew />
      <FlatList
        data={todoList}
        renderItem={({item}) => (
          <TodoItem
            text={item.text}
            done={item.done}
            timestamp={item.timestamp}
          />
        )}
      />
    </StyledView>
  );
};

export default TodoList;
