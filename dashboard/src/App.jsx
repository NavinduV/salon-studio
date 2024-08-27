import { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { Context } from './main';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import AddNewAdmin from './components/AddNewAdmin/AddNewAdmin';
import Artists from './components/Artists/Artists';
import Sidebar from './components/Sidebar/Sidebar';
import AddNewArtist from './components/AddNewArtist/AddNewArtist';

import './App.css';

const App = () => {
  const { isAuthenticated, setIsAuthenticated, admin, setAdmin } =
    useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          'http://localhost:4000/api/admin/me',
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
        setAdmin(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setAdmin({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);

  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/artist/add" element={<AddNewArtist />} />
        <Route path="/admin/add" element={<AddNewAdmin />} />
        <Route path="/artists" element={<Artists />} />
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
  );
};

export default App;
