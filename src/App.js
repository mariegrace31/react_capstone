import React from 'react';
import { Provider } from 'react-redux'; // Import Provider
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';
import './App.css';
import store from './redux/store'; // Import your Redux store

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/details/:name" element={<DetailsPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
