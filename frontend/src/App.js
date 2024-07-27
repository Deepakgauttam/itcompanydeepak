import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Services from './components/Services';
import Partner from "./components/Partner";
import AdminPanel from "./components/AdminPanel";
import PrivateRoute from "./utils/PrivateRoute";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Partner" element={<Partner />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/admin"
          element={<PrivateRoute component={AdminPanel} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

