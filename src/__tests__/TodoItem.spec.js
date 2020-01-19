import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import TodoItem from '../components/TodoItem';
import {ReduxProvider} from '../tests/helpers';

describe('TodoItem', () => {
  it('renders correctly with correct properties', () => {
    const component = renderer.create(
      <ReduxProvider>
        <TodoItem
          text="Some text"
          done={true}
          timestamp={1579199193297}
          isEditing={false}
        />
      </ReduxProvider>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
