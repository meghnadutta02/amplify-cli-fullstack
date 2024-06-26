import React, { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/api";
import { v4 as uuidv4 } from "uuid";
import { listBooks } from "../api/queries";
import { processOrder } from "../api/mutations";

const BookContext = React.createContext();

const BookProvider = ({ children }) => {
  const client = generateClient();
  const [books, setBooks] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBooks();
  }, []);

  const checkout = async (orderDetails) => {
    const payload = {
      id: uuidv4(),
      ...orderDetails,
    };
    try {
      const { data } = await client.graphql({
        query: processOrder,
        variables: { input: payload },
      });

      console.log("Order is successful");
    } catch (err) {
      console.log(err);
    }
  };

  const fetchBooks = async () => {
    try {
      setLoading(true);
      // Switch authMode to apiKey for public access
      const { data } = await client.graphql({
        query: listBooks,
        authMode: "apiKey",
      });
      console.log("Hi bye");
      const books = data.listBooks.items;
      const featured = books.filter((book) => {
        return !!book.featured;
      });
      setBooks(books);
      setFeatured(featured);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <BookContext.Provider value={{ books, featured, loading, checkout }}>
      {children}
    </BookContext.Provider>
  );
};

export { BookContext, BookProvider };
