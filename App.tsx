/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import styled from 'styled-components/native';

import TodoList from './components/TodoList';

const Header = styled.View`
  align-items: center;
`;

const HeaderText = styled.Text`
  font-size: 40px;
`;

const HeaderView = () => (
  <Header>
    <HeaderText>Todo App</HeaderText>
  </Header>
);

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <HeaderView />

          <TodoList />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
