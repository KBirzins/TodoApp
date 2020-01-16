import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';

const StyledTouchable = styled.TouchableWithoutFeedback`
  flex-direction: row;
  align-items: center;
`;

interface ICheckBox {
  selected: boolean;
  onPress(): any;
  size?: number;
  color?: string;
}

const CheckBox = ({
  selected,
  onPress,
  size = 30,
  color = '#211f30',
}: ICheckBox) => (
  <StyledTouchable onPress={onPress}>
    <Icon
      size={size}
      color={color}
      name={selected ? 'check-box' : 'check-box-outline-blank'}
    />
  </StyledTouchable>
);

export default CheckBox;
