import React from 'react';
import renderer from 'react-test-renderer';
import Rates from '../Rates';

describe('<Rates />', () => {

  it('renders the Rates component correctly', () => {
    const tree = renderer.create(
      <Rates />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
