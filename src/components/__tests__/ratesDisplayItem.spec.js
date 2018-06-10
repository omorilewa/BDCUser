import React from 'react';
import renderer from 'react-test-renderer';
import RatesDisplayItem from '../RatesDisplayItem';

const rates = {};
describe('<RatesDisplayItem />', () => {

  it('renders the RatesDisplayItem component correctly', () => {
    const tree = renderer.create(
      <RatesDisplayItem rates={rates}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
