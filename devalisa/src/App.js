import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main'
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
<div style={{height: '300px', position: 'relative'}}>
    <Layout style={{background: 'url(../img/landing-page.jpg) center / cover'}}>
        <Header className="header-color" transparent title="Title" style={{color: 'white'}}>
            <Navigation>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#resume">Resume</a>
                <a href="#">Link</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Drawer>
        <Content>
          <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
