import React, { Component } from 'react';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
import AppLayout from './AppLayout'
import AppBar from './AppBar'
// import styled, {css} from 'styled-components';


// const MyButton = styled.div`
//   color: green;
//   ${props => props.primary && css`
//     color: palevioletred;
//   `}
// `
// const TomatoButton = styled(MyButton)`
//   color: tomato;
//   border-color: tomato;
// `;

// function Welcome(props) {
//   return <h1>Welcome to {props.name}</h1>;
// }

class App extends Component {
  render() {
    return (
      // <Welcome name={"CryptoDash"}/>
      <AppLayout>
        <AppBar/>
        <WelcomeMessage/>
        {/* <MyButton>Hello</MyButton>
        <MyButton primary>Hello</MyButton>
        <TomatoButton primary>Hello</TomatoButton> */}
      </AppLayout>
    
    );
  }
}

export default App;
