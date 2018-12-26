import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //importing our componenets here.
import * as serviceWorker from './serviceWorker'; //Allows for js to be executed in the background.

//This file is the entry point for the react app.
//As you can see, we render whatever components we have built here.

ReactDOM.render(<App name="Spencer"/>, document.getElementById('root')); //render app under root.




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
