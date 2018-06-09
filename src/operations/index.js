import gql from 'graphql-tag';

export const GET_LOCATION = gql`
  query location {
    locations {
      id
      name
    }
  }
`;

// Computed rates for Lagos alone
export const GET_COMPUTED_RATES = gql`
  query computedRates {
    computedRates(first: 100, locationId: "cjhgeu3rh0004f2qu4cfk2my8") {
      date
      currency
      buyRate
      sellRate
    }
  }
`;
