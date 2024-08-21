import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ResetPassword from './components/ResetPassword';
import Dashboard from './components/Dashboard'; // Importar el Dashboard

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Ruta al Dashboard */}
      </Routes>
    </Router>
  );
}

export default App;
