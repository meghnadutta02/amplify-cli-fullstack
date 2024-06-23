import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Amplify
import { Amplify } from "aws-amplify";
import config from "./amplifyconfiguration.json";
// Pages
import Home from "./pages/Home";
import Error from "./pages/Error";
import Books from "./pages/Books";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import BookDetails from "./pages/BookDetails";
import Admin from "./pages/Admin";

// Components
import Header from "./components/Header";

// Amplify Configurations
Amplify.configure(config);

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/books" element={<Books />} exact />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
