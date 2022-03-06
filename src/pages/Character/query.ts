import { gql } from "@apollo/client";

const GET_CHARACTER = gql`
  query Character($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      location {
        name
        type
        dimension
      }
      image
      created
      episode {
        name
        air_date
      }
    }
  }
`;

export { GET_CHARACTER };