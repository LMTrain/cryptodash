import React, { Component } from 'react';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
// function Welcome(props) {
//   return <h1>Welcome to {props.name}</h1>;
// }

class App extends Component {
  render() {
    return (
      // <Welcome name={"CryptoDash"}/>
      <WelcomeMessage/>
    
    );
  }
}

export default App;
