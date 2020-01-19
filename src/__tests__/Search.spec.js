import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import {ReduxProvider} from '../tests/helpers';
import Search from '../components/Search';

describe('Search', () => {
  it('renders correctly with correct properties', () => {
    const component = renderer.create(
      <ReduxProvider>
        <Search />
      </ReduxProvider>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
