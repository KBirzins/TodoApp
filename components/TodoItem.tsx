import React from 'react';
import styled from 'styled-components/native';
import {useDispatch} from 'react-redux';

import CheckBox from './common/CheckBox';
import {TouchableWithoutFeedback, Text} from 'react-native';

const StyledView = styled.View`
  flex-direction: row;
  padding-horizontal: 30px;
  padding-vertical: 5px;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: white;
`;

const StyledText = styled.Text<{done: boolean}>`
  margin-left: 5px;
  font-size: 14px;
  text-decoration-line: ${props => (props.done ? 'line-through' : 'none')};
`;

const StyledTextInput = styled.TextInput`
  margin-left: 5px;
  font-size: 14px;
`;

interface ITodoItem {
  text: string;
  done: boolean;
  timestamp: number;
  isEditing?: boolean;
}

const TodoItem = ({text, done, timestamp, isEditing}: ITodoItem) => {
  const dispatch = useDispatch();
  const [todoText, setText] = React.useState(text);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        dispatch({type: 'TOGGLE_TODO', timestamp});
      }}>
      <StyledView>
        <CheckBox selected={done} />
        {isEditing ? (
          <>
            <StyledTextInput
              editable={isEditing}
              onChangeText={text => setText(text)}
              value={todoText}
              autoFocus
            />
            <Text>Lol</Text>
          </>
        ) : (
          <StyledText done={done}>{text}</StyledText>
        )}
      </StyledView>
    </TouchableWithoutFeedback>
  );
};

export default TodoItem;
