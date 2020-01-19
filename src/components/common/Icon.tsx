import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface IIcon {
  size?: number;
  color?: string;
  name: string;
  onPress?(): any;
}

const StyledIcon = ({size = 25, color = '#211f30', name, onPress}: IIcon) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Icon size={size} color={color} name={name} />
    </TouchableWithoutFeedback>
  );
};

export default StyledIcon;
