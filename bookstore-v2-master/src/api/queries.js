/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      user
      total
      books {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      customer
      __typename
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        total
        createdAt
        updatedAt
        customer
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ordersByUser = /* GraphQL */ `
  query OrdersByUser(
    $user: String!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByUser(
      user: $user
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        user
        total
        createdAt
        updatedAt
        customer
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
      id
      title
      description
      image
      author
      featured
      price
      orders {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        image
        author
        featured
        price
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBookOrders = /* GraphQL */ `
  query GetBookOrders($id: ID!) {
    getBookOrders(id: $id) {
      id
      bookId
      orderId
      book {
        id
        title
        description
        image
        author
        featured
        price
        createdAt
        updatedAt
        __typename
      }
      order {
        id
        user
        total
        createdAt
        updatedAt
        customer
        __typename
      }
      createdAt
      updatedAt
      customer
      __typename
    }
  }
`;
export const listBookOrders = /* GraphQL */ `
  query ListBookOrders(
    $filter: ModelBookOrdersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        bookId
        orderId
        createdAt
        updatedAt
        customer
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const bookOrdersByBookId = /* GraphQL */ `
  query BookOrdersByBookId(
    $bookId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBookOrdersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookOrdersByBookId(
      bookId: $bookId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        bookId
        orderId
        createdAt
        updatedAt
        customer
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const bookOrdersByOrderId = /* GraphQL */ `
  query BookOrdersByOrderId(
    $orderId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBookOrdersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookOrdersByOrderId(
      orderId: $orderId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        bookId
        orderId
        createdAt
        updatedAt
        customer
        __typename
      }
      nextToken
      __typename
    }
  }
`;
