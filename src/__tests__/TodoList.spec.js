import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import TodoList from '../components/TodoList';
import {ReduxProvider} from '../tests/helpers';

describe('TodoList', () => {
  it('renders correctly with correct properties', async () => {
    const component = renderer.create(
      <ReduxProvider>
        <TodoList />
      </ReduxProvider>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
