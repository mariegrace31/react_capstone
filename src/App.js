import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getNearestCityData } from './redux/home/homeSlice';
import Layout from './components/Layout';
import Home from './routes/Home';
import Details from './routes/Details';
import NotMatch from './routes/NotMatch';
import './styles/home.scss';
import './styles/navbar.scss';
import './styles/details.scss';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNearestCityData());
  }, [dispatch]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="details" element={<Details />} />
          <Route path="*" element={<NotMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
