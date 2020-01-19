import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import FilterItem from '../components/FilterItem';

describe('FilterItem', () => {
  it('renders correctly with correct properties', () => {
    const component = renderer.create(<FilterItem />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
