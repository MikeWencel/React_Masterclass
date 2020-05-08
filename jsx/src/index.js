// Import the React and ReactDom libraries
// We can change from 'React' to 'MyREACT', but we will use convensions !
// from szuka folderu 'react' i 'react-dom' w node modules
// const React = require('react') CommonJS Modules w ES2015 we're using import
import React from 'react';
import ReactDOM from 'react-dom'

// Create a react Component
//Function component
function getTime(){
    return(new Date()).toLocaleTimeString()
}

const App = () => {
const LabelText = 'Current Time:'


    const buttonText = {text:'Click me'}
    return <div>
        <div>{LabelText}</div>
        <h1>{getTime()}</h1>
            
        
    </div>;
};


//Take the React component and show it on the screen 
ReactDOM.render(
    <App />,
    document.querySelector('#root')
    
);