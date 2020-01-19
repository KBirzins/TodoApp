import React, {useState} from 'react';
import styled from 'styled-components/native';
import {useDispatch} from 'react-redux';

import FilterItem from './FilterItem';
import filterActions from '../reducers/filter/actions';

const StyledView = styled.View`
  padding-top: 22px;
  padding-horizontal: 30px;
`;

const StyledHeaderText = styled.Text`
  text-align: center;
  font-size: 20px;
`;

const StyledTextInput = styled.TextInput`
  margin-left: 5px;
`;

const Search = () => {
  const [searchText, setText] = useState('');
  const [doneFilter, setDoneFilter] = useState(false);
  const [isDoneType, setDoneType] = useState(true);
  const [dateFilter, setDateFilter] = useState(false);
  const [dateType, setDateType] = useState(true);
  const [alphabetFilter, setAlphabetFilter] = useState(false);
  const [alphabetType, setAlphabetType] = useState(true);

  const dispatch = useDispatch();
  dispatch(
    filterActions.setFilter({
      todo: {
        isActive: doneFilter,
        isPrimaryActive: isDoneType,
      },
      date: {
        isActive: dateFilter,
        isPrimaryActive: dateType,
      },
      alphabet: {
        isActive: alphabetFilter,
        isPrimaryActive: alphabetType,
      },
      text: searchText,
    }),
  );

  return (
    <StyledView>
      <StyledHeaderText>Search & Filter</StyledHeaderText>
      <FilterItem
        primaryText="Done"
        secondaryText="To do"
        isFilterActive={doneFilter}
        setFilterActive={setDoneFilter}
        filterType={isDoneType}
        setFilterType={setDoneType}
      />
      <FilterItem
        primaryText="Date Descending"
        secondaryText="Date Ascending"
        isFilterActive={dateFilter}
        setFilterActive={setDateFilter}
        filterType={dateType}
        setFilterType={setDateType}
      />
      <FilterItem
        primaryText="A-Z"
        secondaryText="Z-A"
        isFilterActive={alphabetFilter}
        setFilterActive={setAlphabetFilter}
        filterType={alphabetType}
        setFilterType={setAlphabetType}
      />

      <StyledTextInput
        onChangeText={text => setText(text)}
        placeholder="Search here"
        value={searchText}
        autoCapitalize="none"
      />
    </StyledView>
  );
};

export default Search;
