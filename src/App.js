import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/details/:name" element={<DetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
