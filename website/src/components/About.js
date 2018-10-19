import React, { Component } from 'react';

class About extends Component {
    render() {
        return (

            <div className="banner-text">
              <h1>Alisa Tkaczyk</h1>

              <hr />

              <p>Full Stack Developer</p>

              <div className="social-links">

                {/* LinkedIn */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Freecodecamp */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
{/* <i class="material-icons">face</i> */}

                </a>

                {/* Youtube */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>

              </div>
            </div>
        );
    }
}

export default About;