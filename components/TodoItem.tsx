import React from 'react';
import styled from 'styled-components/native';
import CheckBox from './common/CheckBox';

const StyledView = styled.View`
  flex-direction: row;
  margin-horizontal: 30px;
  margin-vertical: 5px;
  justify-content: flex-start;
  align-items: center;
`;

const StyledText = styled.Text`
  margin-left: 5px;
  font-size: 14px;
`;

interface ITodoItem {
  text: string;
  done: boolean;
  onPress(): any;
}

const TodoItem = ({text, done, onPress}: ITodoItem) => {
  return (
    <StyledView>
      <CheckBox selected={done} onPress={onPress} />
      <StyledText>{text}</StyledText>
    </StyledView>
  );
};

export default TodoItem;
