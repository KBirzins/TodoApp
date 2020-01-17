import React from 'react';

import Icon from './Icon';

interface ICheckBox {
  selected: boolean;
  onPress?(): any;
}

const CheckBox = ({selected, onPress}: ICheckBox) => (
  <Icon
    name={selected ? 'check-box' : 'check-box-outline-blank'}
    onPress={onPress}
  />
);

export default CheckBox;
