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

const Header = styled.View`
  font-size: 40px;
`;
//
const HeaderText = styled.Text`
  font-size: 40px;
`;

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header>
            <HeaderText>Todo App</HeaderText>
          </Header>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
