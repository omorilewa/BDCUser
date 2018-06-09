import React from 'react';
import renderer from 'react-test-renderer';
import About from '../About';

describe('<About />', () => {

  it('renders the About component correctly', () => {
    const tree = renderer.create(
      <About />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
