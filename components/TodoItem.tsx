import React from 'react';
import styled from 'styled-components/native';
import {useDispatch} from 'react-redux';

import CheckBox from './common/CheckBox';

const StyledView = styled.View`
  flex-direction: row;
  padding-horizontal: 30px;
  padding-vertical: 5px;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: white;
`;

const StyledText = styled.Text`
  margin-left: 5px;
  font-size: 14px;
`;

interface ITodoItem {
  text: string;
  done: boolean;
  timestamp: number;
}

const TodoItem = ({text, done, timestamp}: ITodoItem) => {
  const dispatch = useDispatch();
  return (
    <StyledView>
      <CheckBox
        selected={done}
        onPress={() => dispatch({type: 'TOGGLE_TODO', timestamp})}
      />
      <StyledText>{text}</StyledText>
    </StyledView>
  );
};

export default TodoItem;
