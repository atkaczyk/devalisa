import React from 'react';

import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage'
import Skills from './Skills'
import Projects from './Projects'
// import Resume from './resume'

const Main = () => {
    return (
    <Switch>
        <Route exact path="#" component={LandingPage} />
        <Route exact path="#skills" component={Skills} />
        <Route exact path="#projects" component={Projects} />
        {/* <Route exact path="#resume" component={Resume} /> */}
    </Switch>);
}

export default Main;