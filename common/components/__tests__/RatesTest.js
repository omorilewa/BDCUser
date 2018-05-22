import React from 'react';
import renderer from 'react-test-renderer';
import Rates from '../Rates';

describe('<Rates />', () => {
  const testProps = {
    instructions: 'test that this renders correctly',
  };

  it('renders the Rates component correctly', () => {
    const tree = renderer.create(
      <Rates {...testProps} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
