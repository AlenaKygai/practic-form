import React  from 'react';
import './App.css';
import SingUpPage from './pages/SingUpPage';
import SingInPage from './pages/SingInPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {ROUTES} from './constants/index';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.SIGN_IN}  element={<SingInPage />} />
      <Route path={ROUTES.SIGN_UP}  element={<SingUpPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
