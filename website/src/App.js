import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MyAwesomeReactComponent from './components/MyAwesomeReactComponent';
import NavBar from './components/NavBar';
import Main from './components/Main';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './App.css';

class App extends Component {
  render() {

      return (
  <MuiThemeProvider>
        <Main />

        <NavBar />
        
        <About />
        
        <Skills />

        <Projects />


  </MuiThemeProvider>
);
      }
    }

export default App;