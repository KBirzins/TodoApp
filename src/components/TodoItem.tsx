import React, {useState} from 'react';
import styled from 'styled-components/native';
import {useDispatch} from 'react-redux';
import {TouchableWithoutFeedback} from 'react-native';

import CheckBox from './common/CheckBox';
import Icon from './common/Icon';

const StyledView = styled.View`
  flex-direction: row;
  padding-horizontal: 30px;
  padding-vertical: 5px;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const StyledText = styled.Text<{done: boolean}>`
  margin-left: 5px;
  font-size: 14px;
  text-decoration-line: ${props => (props.done ? 'line-through' : 'none')};
`;

const StyledTextInput = styled.TextInput`
  margin-left: 5px;
  font-size: 14px;
  width: 80%;
  padding-vertical: 0px;
  padding-horizontal: 0px;
`;

const ContainerView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-right: 30px;
`;

const ButtonContainerView = styled.View`
  flex-direction: row;
`;

interface ITodoItem {
  text: string;
  done: boolean;
  timestamp: number;
  isEditing?: boolean;
  onEditingDone(): any;
}

const TodoItem = ({
  text,
  done,
  timestamp,
  isEditing,
  onEditingDone,
}: ITodoItem) => {
  const dispatch = useDispatch();
  const [todoText, setText] = useState(text);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        dispatch({type: 'TOGGLE_TODO', timestamp});
      }}>
      <StyledView>
        <CheckBox
          selected={done}
          onPress={() => {
            dispatch({type: 'TOGGLE_TODO', timestamp});
          }}
        />
        {isEditing ? (
          <>
            <ContainerView>
              <StyledTextInput
                editable={isEditing}
                onChangeText={text => setText(text)}
                value={todoText}
                autoFocus
              />
              <ButtonContainerView>
                <Icon
                  name="check"
                  onPress={() => {
                    onEditingDone();
                    dispatch({type: 'EDIT_TODO', timestamp, text: todoText});
                  }}
                />
                <Icon
                  name="close"
                  onPress={() => {
                    setText(text);
                    onEditingDone();
                  }}
                />
              </ButtonContainerView>
            </ContainerView>
          </>
        ) : (
          <StyledText done={done}>{text}</StyledText>
        )}
      </StyledView>
    </TouchableWithoutFeedback>
  );
};

export default TodoItem;
