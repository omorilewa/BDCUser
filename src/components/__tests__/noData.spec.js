import React from 'react';
import renderer from 'react-test-renderer';
import NoData from '../NoData';

describe('<NoData />', () => {

  it('renders the NoData component correctly', () => {
    const tree = renderer.create(
      <NoData />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
