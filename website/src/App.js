import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './components/MyAwesomeReactComponent';
import NavBar from './components/NavBar';

class App extends Component {
  render() {

      return (
  <MuiThemeProvider>
    <MyAwesomeReactComponent />

        <NavBar />
  </MuiThemeProvider>
);
      }
    }

export default App;