import gql from 'graphql-tag';

export const GET_LOCATION = gql`
  query location {
    locations {
      id
      name
    }
  }
`;

