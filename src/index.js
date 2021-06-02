import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import Hooks from './hooks'

ReactDOM.render(
  <React.StrictMode>
    <Hooks>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Hooks>
  </React.StrictMode>,
  document.getElementById('root')
);


