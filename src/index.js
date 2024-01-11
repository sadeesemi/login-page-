
import {library} from "@fortawesome/fontawesome-svg-core";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import{faEye,faEyeSlash} from "@fortawesome/free-solid-svg-icons";
library.add(faEye,faEyeSlash);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);


reportWebVitals();
