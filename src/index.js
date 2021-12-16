import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Import Bootstrap Modules
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';

//Import React Router Dom Modules
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<App />} />
    </Routes>    
  </BrowserRouter>,
  document.getElementById('root')
);

