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
import {Provider} from 'react-redux';

import TodoList from './components/TodoList';
import configureStore from './reducers';

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

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <HeaderView />

          <TodoList />
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
