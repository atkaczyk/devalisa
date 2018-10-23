import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import projectHonours from '../img/moqup1.JPG'; // Import using relative path
import projectSudoku from '../img/sudoku_solver_1.JPG'; // Import using relative path
import projectKernel from '../img/linux_1.JPG'; // Import using relative path
import projectCrimHub from '../img/CrimHub.jpg'; // Import using relative path
import projectIvanhoe from '../img/Ivanhoe_1.JPG'; // Import using relative path
import ProjectCard from './ProjectCard';

const styles = theme => ({
    heroContent: {
        margin: '0 auto',
        borderBottom: '4px, solid, black', // why isnt this working tho
        padding: `${theme.spacing.unit * 6}px 0 ${theme.spacing.unit * 3}px ${theme.spacing.unit * 13}px`,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
});

const cards = [{
    image: `${projectHonours}`,
    title: 'Mental Models of Security',
    description: 'Honours Project: Building Mental Models of Usable Security. Does everyone know what "this webpage isn`t safe" really means? I designed an interactive interface and performed a user study to evaluate its efficacy in teaching browser security and related computer security concepts. ',
}, {
    image: `${projectSudoku}`,
    title: 'Sudoku Solver',
    description: 'So many spaces, so little time. Why play sudoku when it can play itself? In this project I applied AI algorithms to a concrete scenario. Created a Sudoku solver to test the efficiency of simulated annealing and genetic algorithms and their varied effectiveness in solving Sudoku boards within a range of difficulty.',
}, {
    image: `${projectCrimHub}`,
    title: 'CrimHub',
    description: 'No need for pen and paper, CrimHub makes course planning and selection easy. CrimHub is a prototype designed to improve the UX of the existing Carleton University academic audit for Criminology students. Interfaces were built and tested to evaluate the experience for Criminology students end to end registration experience. The dashboard was designed, mockups were modified and prototypes were tested over multiple iterations.',
}, {
    image: `${projectIvanhoe}`,
    title: 'Ivanhoe',
    description: 'Interactive, Networked, card game,Want to play cards? Developed the GUI and documentation for a networked card game as the group lead in a team of three. The project was graded based on use of design patterns, as well as specific diagrams used to assist in SDLC and unit testing.',
}, {
    image: `${projectKernel}`,
    title: 'Hacking the Linux Kernel',
    description: 'Inspected the Linux kernel and discovered the source for a variety of function calls, worked in depth with the sleep and ls command source code. Successfully modified the ls command to randomly return comedic phrases. ',
}, {
    image: `${Image}`,
    title: 'Thought Front',
    description: 'Twitter meets diary: escpape from the social network, get to know yourself.',
}];

function Projects(props) {
    const { classes } = props;
    // Consider adding badges to each project card to show tech/tools used
    return (
        <div>
            <div className={classes.heroContent}>
                <Typography component="h3" variant="h3" align="left" color="textPrimary" gutterBottom>
                    Projects
                            </Typography>
                <Typography variant="h6" align="left" color="textSecondary" paragraph>
                    Java | Python | React | C | Selenium | Hide All Projects
                            </Typography>
            </div>
            <div className={classes.layout}>
                <Grid container spacing={40}>
                    {cards.map(card => (
                        <Grid item key={props.card} sm={12} md={6} lg={4}>

                       <ProjectCard card={card}/> 
                       </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}

Projects.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);