import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Services from "./components/Services";
import Partner from "./components/Partner";
import Contact from './components/Contact';
import Blog from "./components/Blog";
import Login from './components/Login';
import Register from "./components/Register";
import AdminPanel from "./components/AdminPanel";
import Navbar from './components/Navbar';
import BlogPost from "./components/BlogPost";
import PrivateRoute from "./utils/PrivateRoute";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import DeletePost from "./components/DeletePost";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminPanel />
            </PrivateRoute>
          }
        />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route
          path="/create-post"
          element={
            <PrivateRoute>
              <CreatePost />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit-post/:id"
          element={
            <PrivateRoute>
              <EditPost />
            </PrivateRoute>
          }
        />
        <Route
          path="/delete-post/:id"
          element={
            <PrivateRoute>
              <DeletePost />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
