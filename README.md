# Bookstore Application

This is a full-stack React application for a bookstore, with a robust backend provisioned using AWS Amplify. The backend infrastructure includes:

- **Cognito** for authentication and user management
- **AppSync** for GraphQL API implementation
- **DynamoDB** for scalable and low-latency data storage
- **S3** for hosting the application and storing user-uploaded images

## Features

- Users can browse books without logging in.
- Authenticated users can add, edit, and delete books.
- Users can view details of each book and add them to their cart.
- Admin users can manage the inventory of books.
- Authentication is handled by AWS Cognito.
- The application uses AppSync with GraphQL for API queries and mutations.
- DynamoDB is used for storing book data.
- S3 is used for hosting the application and storing images.

## Technologies Used

- **React** for the front-end.
- **AWS Amplify** for provisioning and managing backend resources.
- **AWS Cognito** for user authentication and authorization.
- **AWS AppSync** for GraphQL APIs.
- **AWS DynamoDB** for database storage.
- **AWS S3** for hosting and storing images.

## Setup and Installation

### Prerequisites

- Node.js and npm installed on your local machine.
- AWS CLI configured with the necessary permissions.
- Amplify CLI installed globally.

### Installation

1. **Clone the repository:**

```sh
git clone https://github.com/yourusername/bookstore.git
cd bookstore-v2-master
```

2. **Install dependencies:**

```sh
npm install
```

### Usage

- **Unregistered Users:** Can browse and view book listings using an API key.
- **Registered Users:** Can log in via Cognito to add books to their cart, view detailed book information, and place orders.
- **Admin Users:** Can manage inventory, including adding, editing, and deleting book listings.

### Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

### License

This project is licensed under the MIT License.
