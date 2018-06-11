import React from 'react';
import renderer from 'react-test-renderer';
import HistoricRatesItem from '../HistoricRatesItem';

describe('<HistoricRatesItem />', () => {
  const testProps = {
    ratesPerDate: [
      {
        date: '2018-06-07',
        currency: 'EUR',
        buyRate: 415,
        sellRate: 418,
        periodOfTheDay: 'AFTERNOON',
      },
      { date: '2018-06-07',
        currency: 'USD',
        buyRate: 330,
        sellRate: 347,
        periodOfTheDay: 'MORNING',
      }
    ],
    date: '2018-06-07'
  };

  it('renders the HistoricRatesItem component correctly', () => {
    const tree = renderer.create(
      <HistoricRatesItem {...testProps} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
