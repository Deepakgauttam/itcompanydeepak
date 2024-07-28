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
import PrivateRoute from "./utils/PrivateRoute";

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
        
        <Route path="/blog" exact component={Blog} />
        {/* <Route path="/blog/:id" component={BlogPost} /> */}
        {/* <Route path="/blog/:id" component={BlogDetail} /> */}
      </Routes>
    </Router>
  );
};

export default App;
