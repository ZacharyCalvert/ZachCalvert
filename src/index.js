import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var $ = require('jquery');
window.$ = $;
require('bootstrap');



import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './style/index.css';

ReactDOM.render(
  <App />,
  document.getElementById('react-root')
);
