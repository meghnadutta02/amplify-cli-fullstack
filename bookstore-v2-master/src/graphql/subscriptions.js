/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBookOrders = /* GraphQL */ `
  subscription OnCreateBookOrders(
    $filter: ModelSubscriptionBookOrdersFilterInput
    $customer: String
  ) {
    onCreateBookOrders(filter: $filter, customer: $customer) {
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
export const onUpdateBookOrders = /* GraphQL */ `
  subscription OnUpdateBookOrders(
    $filter: ModelSubscriptionBookOrdersFilterInput
    $customer: String
  ) {
    onUpdateBookOrders(filter: $filter, customer: $customer) {
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
export const onDeleteBookOrders = /* GraphQL */ `
  subscription OnDeleteBookOrders(
    $filter: ModelSubscriptionBookOrdersFilterInput
    $customer: String
  ) {
    onDeleteBookOrders(filter: $filter, customer: $customer) {
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
