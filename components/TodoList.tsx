import React, {useState} from 'react';
import styled from 'styled-components/native';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const StyledView = styled.View`
  padding-top: 22px;
`;

import TodoItem from './TodoItem';
import TodoNew from './TodoNew';

const TodoList = () => {
  return (
    <StyledView>
      <FlatList
        data={[
          {text: 'Walk dog', done: false},
          {text: 'Read news', done: true},
          {text: 'Go shopping', done: false},
        ]}
        renderItem={({item}) => (
          <TodoItem
            text={item.text}
            done={item.done}
            onPress={() => {
              item.done = !item.done;
            }}
          />
        )}
      />
      <TodoNew />
    </StyledView>
  );
};

export default TodoList;
