import React from 'react';
import renderer from 'react-test-renderer';
import Whoops from '../Whoops';

describe('<Whoops />', () => {

  it('renders the Whoops component correctly', () => {
    const tree = renderer.create(
      <Whoops message="An error occured" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
