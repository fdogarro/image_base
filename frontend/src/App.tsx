import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './Routes';
import { Navbar } from './components/Navbar';
import { AuthProvider } from './contexts/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
