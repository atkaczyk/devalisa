import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MyAwesomeReactComponent from './components/MyAwesomeReactComponent';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {

    return (
      <MuiThemeProvider>

        <NavBar />

        <LandingPage/>

        <About />

        <Skills />

        <Projects />

<Footer />
      </MuiThemeProvider>
    );
  }
}
// todo: 
// create an image slider in the project card popup overlay
// create a filter for projects to filter by Skill
// clean up about section to make presentable about Description
export default App;