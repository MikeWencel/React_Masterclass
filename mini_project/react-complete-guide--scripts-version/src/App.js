import React from 'react';
import './App.css';
import Person from './Person/Person';


function App() {
  return (
    <div className="App">
  <h1>Hi, I'm a React App</h1>
        <Person name="Mike" age="33">Hobby: Scuba-diving</Person>
        <Person name="Daniel" age="26"/>
        <Person name="Josh" age="26"/>
        <Person name="Katerina" age="29"/>
    </div>
  );
}

export default App;
