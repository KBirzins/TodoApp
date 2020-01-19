import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Checkbox from '../components/common/Checkbox';

const NAME = 'check-box';

describe('Checkbox', () => {
  it('renders correctly with correct properties', () => {
    const component = renderer.create(<Checkbox name={NAME} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    const root = component.root;

    expect(root.findByType(Checkbox).props.name).toBe(NAME);
  });
});
