import './App.css';
import React, { Component } from 'react'

export class App extends Component {
  
  changeTilte = () =>{
    this.setState({
      h1: "test"
    })
  }

  changeParagraphe = () => {
    this.setState({
      p: "Test"
    })
  }

  changeTilte2 = () => {
    this.setState({
      h1DeuxièmeTitre: document.querySelector("input").value
    })
  }

  changeP2 = () => {
    this.setState({
      p2: document.querySelector("textarea").value
    })
  }

  state = {
    h1: "Titre",
    h1DeuxièmeTitre: "Deuxième titre",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolore quidem minima voluptate asperiores iste ratione ex atque, deserunt delectus dignissimos commodi, architecto dicta eveniet eius neque aliquam? Neque, saepe.",
    p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  }

  render() {

    return (
      <div>
        <h1 onClick={this.changeTilte}>{this.state.h1}</h1>
        <h1>{this.state.h1DeuxièmeTitre}</h1>
        <p>{this.state.p}</p>
        <button onClick={this.changeParagraphe}>Modifier le paragraphe</button>
        <div>
          <input></input>
          <button onClick={this.changeTilte2}>Go</button>
        </div>
        <p>{this.state.p2}</p>
        <textarea onInput={this.changeP2}></textarea>
      </div>
    )
  }
}

export default App
