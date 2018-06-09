import React from 'react';
import renderer from 'react-test-renderer';
import RatesDisplay from '../RatesDisplay';

describe('<RatesDisplay />', () => {

  it('renders the RatesDisplay component correctly', () => {
    const tree = renderer.create(
      <RatesDisplay />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
