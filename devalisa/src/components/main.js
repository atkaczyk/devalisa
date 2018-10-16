import React from 'react';

import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage'
import About from './about'
import Projects from './projects'
import Resume from './resume'

const Main = () => {
    return (<Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
    </Switch>);
}

export default Main;