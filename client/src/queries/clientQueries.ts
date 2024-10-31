import { gql } from "../__generated__";

const GET_CLIENTS = gql(`
  query getClients {
    clients {
      id
      name
      email
      phone
    }
  }
`);

export { GET_CLIENTS };
