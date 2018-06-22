import React from 'react';
import './sass/main.css';
import {Header} from "./js/header";
import {MainContainer} from "./js/mainContainer";
// import {
//     HashRouter,
//     Route,
//     Link,
//     Switch,
//     NavLink,
// } from 'react-router-dom';





class App extends React.Component {
  render() {
    return (
            <main>
                <MainContainer/>
            </main>
    );
  }
}

export default App;
