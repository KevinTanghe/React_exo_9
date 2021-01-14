import './App.css';
import React, { Component } from 'react'

export class App extends Component {
  
  changeTilte = () =>{
    // e.target.innerHTML = "test"
    document.querySelector("h1").innerHTML = "test"
  }

  changeParagraphe = () => {
    document.querySelector("p").innerHTML = "Ceci est un paragraphe changer"
  }

  render() {

    return (
      <div>
        <h1 onClick={this.changeTilte}>Titre</h1>
        <p id="test">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolore quidem minima voluptate asperiores iste ratione ex atque, deserunt delectus dignissimos commodi, architecto dicta eveniet eius neque aliquam? Neque, saepe.</p>
        <button onClick={this.changeParagraphe}>Modifier le paragraphe</button>
      </div>
    )
  }
}

export default App
