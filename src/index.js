require('./assets/stylesheets/styles.scss');


//use this to build react app
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.jsx';

//mount the react App conponent from App.jsx to #root in index.html
ReactDOM.render( < App / > , document.getElementById('root'));