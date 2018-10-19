import React, { Component } from 'react';


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Image from '../img/landing-page.jpg'; // Import using relative path


const styles = {
    aboutContainer: {
        backgroundImage: `url(${Image})`,
        height: '100%',
        height: '700px',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
        backgroundPosition: 'initial',
        backgroundSize: 'cover',
        alignText: 'center',
        paddingTop:'3%'
    },
    introHeading: {

    }
};


function About (props) {

    const { classes } = props;

        return (
            <div id="about" className="row" className={ classes.aboutContainer  }>
                <div className='intro-heading'>Alisa Tkaczyk</div>
                <div className="intro-lead-in">Software Developer.</div>
                <div className="row about-icon-wrapper">
                    <a href="https://ca.linkedin.com/in/alisa-tkaczyk-94085683"  rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square fa-5x" aria-hidden="true" />
                    </a>
                    <a href="https://www.google.ca/search?dcr=0&amp;source=hp&amp;ei=xjQKWvKqOqjujwS_9p3wAg&amp;q=alisa+tkaczyk&amp;oq=alisa+&amp;gs_l=psy-ab.3.0.35i39k1j0i10k1j0l4j0i10k1j0l3.2118.3016.0.3706.9.7.1.0.0.0.183.762.2j4.6.0....0...1.1.64.psy-ab..2.7.770.0..0i131k1.0.WyguLE2aHQM"  rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-user fa-5x" aria-hidden="false" />
                    </a>
                    <a href="https://github.com/atkaczyk" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square fa-5x" aria-hidden="true" />
                    </a>
                </div>
            </div>
        );
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);