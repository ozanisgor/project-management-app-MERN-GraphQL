/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  mutation addClient($name: String!, $email: String!, $phone: String!) {\n    addClient(name: $name, email: $email, phone: $phone) {\n      id\n      name\n      email\n      phone\n    }\n  }\n": types.AddClientDocument,
    "\n  mutation deleteClient($id: ID!) {\n    deleteClient(id: $id) {\n      id\n      name\n      email\n      phone\n    }\n  }\n": types.DeleteClientDocument,
    "\n  mutation AddProject(\n    $name: String!\n    $description: String!\n    $status: ProjectStatus!\n    $clientId: ID!\n  ) {\n    addProject(\n      name: $name\n      description: $description\n      status: $status\n      clientId: $clientId\n    ) {\n      id\n      name\n      description\n      status\n      client {\n        id\n        name\n        email\n        phone\n      }\n    }\n  }\n": types.AddProjectDocument,
    "\n  mutation UpdateProject(\n    $id: ID!\n    $name: String!\n    $description: String!\n    $status: ProjectStatusUpdate!\n  ) {\n    updateProject(\n      id: $id\n      name: $name\n      description: $description\n      status: $status\n    ) {\n      id\n      name\n      description\n      status\n      client {\n        id\n        name\n        email\n        phone\n      }\n    }\n  }\n": types.UpdateProjectDocument,
    "\n  mutation DeleteProject($id: ID!) {\n    deleteProject(id: $id) {\n      id\n    }\n  }\n": types.DeleteProjectDocument,
    "\n  query getClients {\n    clients {\n      id\n      name\n      email\n      phone\n    }\n  }\n": types.GetClientsDocument,
    "\n  query getProjects {\n    projects {\n      id\n      name\n      status\n    }\n  }\n": types.GetProjectsDocument,
    "\n  query getProject($id: ID!) {\n    project(id: $id) {\n      id\n      name\n      description\n      status\n      client {\n        id\n        name\n        email\n        phone\n      }\n    }\n  }\n": types.GetProjectDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation addClient($name: String!, $email: String!, $phone: String!) {\n    addClient(name: $name, email: $email, phone: $phone) {\n      id\n      name\n      email\n      phone\n    }\n  }\n"): (typeof documents)["\n  mutation addClient($name: String!, $email: String!, $phone: String!) {\n    addClient(name: $name, email: $email, phone: $phone) {\n      id\n      name\n      email\n      phone\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation deleteClient($id: ID!) {\n    deleteClient(id: $id) {\n      id\n      name\n      email\n      phone\n    }\n  }\n"): (typeof documents)["\n  mutation deleteClient($id: ID!) {\n    deleteClient(id: $id) {\n      id\n      name\n      email\n      phone\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation AddProject(\n    $name: String!\n    $description: String!\n    $status: ProjectStatus!\n    $clientId: ID!\n  ) {\n    addProject(\n      name: $name\n      description: $description\n      status: $status\n      clientId: $clientId\n    ) {\n      id\n      name\n      description\n      status\n      client {\n        id\n        name\n        email\n        phone\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation AddProject(\n    $name: String!\n    $description: String!\n    $status: ProjectStatus!\n    $clientId: ID!\n  ) {\n    addProject(\n      name: $name\n      description: $description\n      status: $status\n      clientId: $clientId\n    ) {\n      id\n      name\n      description\n      status\n      client {\n        id\n        name\n        email\n        phone\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UpdateProject(\n    $id: ID!\n    $name: String!\n    $description: String!\n    $status: ProjectStatusUpdate!\n  ) {\n    updateProject(\n      id: $id\n      name: $name\n      description: $description\n      status: $status\n    ) {\n      id\n      name\n      description\n      status\n      client {\n        id\n        name\n        email\n        phone\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateProject(\n    $id: ID!\n    $name: String!\n    $description: String!\n    $status: ProjectStatusUpdate!\n  ) {\n    updateProject(\n      id: $id\n      name: $name\n      description: $description\n      status: $status\n    ) {\n      id\n      name\n      description\n      status\n      client {\n        id\n        name\n        email\n        phone\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation DeleteProject($id: ID!) {\n    deleteProject(id: $id) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteProject($id: ID!) {\n    deleteProject(id: $id) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getClients {\n    clients {\n      id\n      name\n      email\n      phone\n    }\n  }\n"): (typeof documents)["\n  query getClients {\n    clients {\n      id\n      name\n      email\n      phone\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getProjects {\n    projects {\n      id\n      name\n      status\n    }\n  }\n"): (typeof documents)["\n  query getProjects {\n    projects {\n      id\n      name\n      status\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getProject($id: ID!) {\n    project(id: $id) {\n      id\n      name\n      description\n      status\n      client {\n        id\n        name\n        email\n        phone\n      }\n    }\n  }\n"): (typeof documents)["\n  query getProject($id: ID!) {\n    project(id: $id) {\n      id\n      name\n      description\n      status\n      client {\n        id\n        name\n        email\n        phone\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;