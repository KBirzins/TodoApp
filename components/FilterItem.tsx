import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components/native';
import Checkbox from './common/CheckBox';

const ContainerView = styled.View`
  flex-direction: row;
  align-items: center;
  padding-vertical: 5px;
`;

const StyledText = styled.Text`
  margin-left: 5px;
`;

interface IFilterItem {
  isFilterActive: boolean;
  setFilterActive(arg0: boolean): any;
  filterType: boolean;
  setFilterType(arg0: boolean): any;
  primaryText: string;
  secondaryText: string;
}

const FilterItem = ({
  isFilterActive,
  setFilterActive,
  filterType,
  setFilterType,
  primaryText,
  secondaryText,
}: IFilterItem) => {
  return (
    <ContainerView>
      <Checkbox
        selected={isFilterActive}
        onPress={() => setFilterActive(!isFilterActive)}
      />
      <TouchableWithoutFeedback
        onPress={() => {
          if (filterType) {
            setFilterType(false);
          } else {
            setFilterType(true);
          }
        }}>
        {filterType ? (
          <StyledText>{primaryText}</StyledText>
        ) : (
          <StyledText>{secondaryText}</StyledText>
        )}
      </TouchableWithoutFeedback>
    </ContainerView>
  );
};

export default FilterItem;
