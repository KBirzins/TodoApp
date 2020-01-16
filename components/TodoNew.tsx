import React, {useState} from 'react';
import styled from 'styled-components/native';
import {TouchableWithoutFeedback} from 'react-native';
import {useDispatch} from 'react-redux';

import Icon from './common/Icon';

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
  color: grey;
`;

const StyledInput = styled.TextInput`
  margin-left: 5px;
  font-size: 14px;
`;

const TodoNew = () => {
  const [selected, setSelected] = useState(false);
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setSelected(!selected);
      }}>
      <StyledView>
        {!selected ? (
          <>
            <Icon color="grey" name="add" />
            <StyledText>New Todo</StyledText>
          </>
        ) : (
          <>
            <Icon color={text !== '' ? 'black' : 'grey'} name="add" />
            <StyledInput
              onChangeText={text => setText(text)}
              value={text}
              onBlur={() => {
                // Dispatch redux action to add new, reset new todo fields
                if (text !== '') {
                  dispatch({type: 'ADD_TODO', text});
                  setText('');
                }
                setSelected(false);
              }}
              autoFocus
            />
          </>
        )}
      </StyledView>
    </TouchableWithoutFeedback>
  );
};

export default TodoNew;
