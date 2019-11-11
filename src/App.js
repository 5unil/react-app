import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'abc', name: 'Max', age: 28 },
      {id: 'bcd', name: 'Manu', age: 29 },
      {id: 'cde', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    togglePeople: false
  }

  nameChangedHandler = (event,id) => {

    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id
    })

    const person = {

      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons]

    persons[personIndex] = {...person};

    this.setState( {persons: persons} )
  }


  togglePeopleHandler = () => {

    this.setState( {

      togglePeople: !this.state.togglePeople
    })
  }


  deletePersonHandler = (personIndex) => {

    const persons = [...this.state.persons]
    persons.splice(personIndex,1)

    this.setState({

      persons: persons
    })


  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };


    let people = null;

    if (this.state.togglePeople) {

      people = (

        <div>
          {this.state.persons.map((person,index) => {

            return <Person 
              name={person.name} 
              age={person.age}
              id={person.id}
              click={this.deletePersonHandler.bind(this,index)}
              changed={(event) => this.nameChangedHandler(event,person.id)}
 />

          })}
        </div>
      )
    } 

    return (

      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePeopleHandler}>Toggle People</button>
        <div>
          {people}
        </div>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
