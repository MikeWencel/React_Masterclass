import React from 'react';
import './App.css';
import Person from './Person/Person';


function App() {

  return (
    <div className="App">
  <h1>Hi, I'm a React App</h1>
        <Person name={"Mike"} age={Person.age}/>
        <Person name={"Daniel"} age={Person.age}/>
        <Person name={"Max"} age={Person.age}/>
        <Person name={"Rafał"} age={Person.age}/>
    </div>
  );
}

export default App;
