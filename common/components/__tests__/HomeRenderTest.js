import React from 'react';
import renderer from 'react-test-renderer';
import HomeRender from '../HomeRender';

describe('<HomeRender />', () => {
  const testProps = {
    instructions: 'test that this renders correctly',
  };

  it('renders the HomeRender component correctly', () => {
    const tree = renderer.create(
      <HomeRender {...testProps} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
