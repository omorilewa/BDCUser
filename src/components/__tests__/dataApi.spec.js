import { getLocationId } from '../../dataApi';

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

describe('Finding Locations by their IDs', () => {
  it('returns the name of the Location, given the ID', () => {
    const result = getLocationId(locations, 'Kano');
    expect(result).toEqual('cjhgeu3rh0008f2quhkuh7vpv');
  });

  it('returns a descriptive message when ID is not valid', () => {
    const result = getLocationId(locations, 'Portugal');
    expect(result).toEqual('Location not available');
  });
});
