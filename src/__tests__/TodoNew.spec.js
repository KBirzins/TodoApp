import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import TodoNew from '../components/TodoNew';
import {ReduxProvider} from '../tests/helpers';

describe('TodoNew', () => {
  it('renders correctly with correct properties', () => {
    const component = renderer.create(
      <ReduxProvider>
        <TodoNew />
      </ReduxProvider>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
