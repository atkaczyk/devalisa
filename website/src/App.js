import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MyAwesomeReactComponent from './components/MyAwesomeReactComponent';
import NavBar from './components/NavBar';
import Main from './components/Main';
import LandingPage from './components/LandingPage';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import './App.css';

class App extends Component {
  render() {

      return (
  <MuiThemeProvider>
        <Main />

        <NavBar />
        
        <LandingPage id="#"/>
        
        <About id="#about"/>
        
        <Skills id="#skills"/>

        <Projects id="#projects"/>
  </MuiThemeProvider>
);
      }
    }

export default App;