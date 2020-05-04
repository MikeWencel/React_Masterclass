import React from 'react';
import './App.css';
import Person from './Person/Person';


function App() {

  React.state = {
    persons: [ 
      {name:'Max',age: 28},
      {name:'Josh',age: 28},
      {name:'Mike',age: 28},
      {name:'Katerina',age: 28}
  
  ]
  }
  return (
    <div className="App">
  <h1>Hi, I'm a React App</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Hobby: Scuba-diving</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/>
    </div>
  );
}

export default App;
