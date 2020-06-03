import React, { Component } from "react";
import Dog from "./components/Dog";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  state = {


    dogs: [
      {
        name: "Mon-El",
      },
      {
        name: "Kara",
      },
      {
        name: "Mischa",
      },
    ],
    newDoggo: "",
  };




  changeDoggoName = (newName) => {
    this.setState({ newDoggo: newName.target.value });
  };


  addDoggo = () => {

    let newDog = {
      name: this.state.newDoggo,
    };


    this.setState((state) => ({
      dogs: [...state.dogs, newDog], //im using the spread operator because I only want to change 1 part (the new dog) and keep all the other parts the same when it re-renders
      newDoggo: "",
    }));
  };





  render() {
    return (
      <div className="app">
        <Header numDogs={this.state.dogs.length} />
        <h2>My Doggos</h2>



        <ul>
          {this.state.dogs.map((dog, index) => (
            <li key={index}>
              <Dog dog={dog} />
            </li>
          ))}
        </ul>



        <div>
          <input className ="newDog" type="text" value={this.state.newDoggo} onChange={this.changeDoggoName} placeholder="Type new Doggo name"></input>
          <button onClick={this.addDoggo} disabled={this.state.newDoggo === ""}>Add New Dog</button>
        </div>
      </div>
    );
  }
}

export default App;