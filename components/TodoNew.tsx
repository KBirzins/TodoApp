import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';
import {TouchableWithoutFeedback} from 'react-native';

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
  color: grey;
`;

const StyledInput = styled.TextInput`
  margin-left: 5px;
  font-size: 14px;
`;

const TodoNew = () => {
  const [selected, setSelected] = useState(false);
  const [text, setText] = useState('');
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setSelected(!selected);
      }}>
      <StyledView>
        {!selected ? (
          <>
            <Icon size={30} color="grey" name="add" />
            <StyledText>New Todo</StyledText>
          </>
        ) : (
          <>
            <CheckBox selected={false} onPress={() => {}} />
            <StyledInput
              onChangeText={text => setText(text)}
              value={text}
              autoFocus
            />
          </>
        )}
      </StyledView>
    </TouchableWithoutFeedback>
  );
};

export default TodoNew;
