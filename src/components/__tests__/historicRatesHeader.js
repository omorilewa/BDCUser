import React from 'react';
import renderer from 'react-test-renderer';
import HistoricRatesHeader from '../HistoricRatesHeader';

describe('<HistoricRatesHeader />', () => {

  it('renders the HistoricRatesHeader component correctly', () => {
    const tree = renderer.create(
      <HistoricRatesHeader />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
