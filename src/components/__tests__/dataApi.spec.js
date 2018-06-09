import { findLocationById, sortTodayRates } from '../../dataApi';

const locations = [
  {
    id: 'cjhgeu3rh0004f2qu4cfk2my8',
    name: 'Lagos'
  },
  {
    id: 'cjhgeu3rh0005f2qutsd86jpp',
    name: 'Abuja'
  },
  {
    id: 'cjhgeu3rh0006f2quxptkcqur',
    name: 'Port-Harcourt'
  },
  {
    id: 'cjhgeu3rh0007f2qu90179akc',
    name: 'Onitsha'
  },
  {
    id: 'cjhgeu3rh0008f2quhkuh7vpv',
    name: 'Kano'
  }
];

const data = {
  'todaysRates': [
    {
      'buyRate': 359,
      'sellRate': 360,
      'currency': 'USD',
      'periodOfTheDay': 'MORNING',
      'date': '2018-06-09',
      'location': {
        'name': 'Lagos'
      }
    },
    {
      'buyRate': 490,
      'sellRate': 495,
      'currency': 'GBP',
      'periodOfTheDay': 'MORNING',
      'date': '2018-06-09',
      'location': {
        'name': 'Lagos'
      }
    }
  ]
};

describe('Finding Locations by their IDs', () => {
  it('returns the name of the Location, given the ID', () => {
    const result = findLocationById(locations, 'cjhgeu3rh0008f2quhkuh7vpv');
    expect(result).toEqual('Kano');
  });

  it('returns a descriptive message when ID is not valid', () => {
    const result = findLocationById(locations, 'haijiqwidjojdlkklsdf');
    expect(result).toEqual('Location not available');
  });
});

describe('sort location data', () => {
  it('returns the sorted data, given a data imput', () => {
    const result = sortTodayRates(data);
    expect(result).toBeTruthy;
  });
});
