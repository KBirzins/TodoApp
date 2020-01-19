import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Icon from '../components/common/Icon';

const NAME = 'edit';

describe('Icon', () => {
  it('renders correctly with correct properties', () => {
    const component = renderer.create(<Icon name={NAME} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    const root = component.root;

    expect(root.findByType(Icon).props.name).toBe(NAME);
  });
});
