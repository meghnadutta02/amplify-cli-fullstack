/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processOrder = /* GraphQL */ `
  mutation ProcessOrder($input: ProcessOrderInput!) {
    processOrder(input: $input)
  }
`;
export const createBook = /* GraphQL */ `
  mutation CreateBook(
    $input: CreateBookInput!
    $condition: ModelBookConditionInput
  ) {
    createBook(input: $input, condition: $condition) {
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
export const updateBook = /* GraphQL */ `
  mutation UpdateBook(
    $input: UpdateBookInput!
    $condition: ModelBookConditionInput
  ) {
    updateBook(input: $input, condition: $condition) {
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
export const deleteBook = /* GraphQL */ `
  mutation DeleteBook(
    $input: DeleteBookInput!
    $condition: ModelBookConditionInput
  ) {
    deleteBook(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createBookOrders = /* GraphQL */ `
  mutation CreateBookOrders(
    $input: CreateBookOrdersInput!
    $condition: ModelBookOrdersConditionInput
  ) {
    createBookOrders(input: $input, condition: $condition) {
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
export const updateBookOrders = /* GraphQL */ `
  mutation UpdateBookOrders(
    $input: UpdateBookOrdersInput!
    $condition: ModelBookOrdersConditionInput
  ) {
    updateBookOrders(input: $input, condition: $condition) {
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
export const deleteBookOrders = /* GraphQL */ `
  mutation DeleteBookOrders(
    $input: DeleteBookOrdersInput!
    $condition: ModelBookOrdersConditionInput
  ) {
    deleteBookOrders(input: $input, condition: $condition) {
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
