import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Test from './test';
import Login from './components/login';
import Staff from './users/staff';
import StaffAdd from './pages/staffadd';
import StaffSale from './pages/staffsale';
import StaffSearch from './pages/staffsearch';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<App />}/>
      <Route path="test" element={<Test/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="staff" element={<Staff/>}/>
      <Route path="addcustomer" element={<StaffAdd/>}/>
      <Route path="addsale" element={<StaffSale/>}/>
      <Route path="searchcustomer" element={<StaffSearch/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
