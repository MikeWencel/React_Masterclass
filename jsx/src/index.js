// Import the React and ReactDom libraries
// We can change from 'React' to 'MyREACT', but we will use convensions !
// from szuka folderu 'react' i 'react-dom' w node modules
// const React = require('react') CommonJS Modules w ES2015 we're using import
import React from 'react';
import ReactDOM from 'react-dom'

// Create a react Component
//Function component
const App = () => {
    return <div>Hi there!</div>;
};


//Take the React component and show it on the screen 
ReactDOM.render(
    <App />,
    document.querySelector('#root')
    
);