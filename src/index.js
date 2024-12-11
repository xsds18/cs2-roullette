import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Nav from './Nav';
import CustomModal from './Modal';
import Timer from './Timer';
import Popup from './Popup';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <App />
    <Timer />
    <CustomModal />
    <Popup />
  </React.StrictMode>
);