import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MyAwesomeReactComponent from './components/MyAwesomeReactComponent';
import NavBar from './components/NavBar';
import Main from './components/Main';
import About from './components/About';

class App extends Component {
  render() {

      return (
  <MuiThemeProvider>
        <Main />

        <NavBar />
        
        <About />
  </MuiThemeProvider>
);
      }
    }

export default App;