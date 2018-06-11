import gql from 'graphql-tag';

export const GET_LOCATION = gql`
  query location {
    locations {
      id
      name
    }
  }
`;

export const GET_COMPUTED_RATES = gql`
  query computedRates($locationId: ID!) {
    computedRates(first: 100, locationId: $locationId) {
      date
      currency
      buyRate
      sellRate
      periodOfTheDay
    }
  }
`;

export const GET_TODAY_RATES = gql`
  query todaysrates {
    todaysRates {
      buyRate
      sellRate
      currency
      periodOfTheDay
      location{
        name
      }
    }
  }
`;
