import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Image from '../img/landing-page.jpg'; // Import using relative path
import SkillCard from './SkillCard';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
    heroContent: {
        margin: '0 auto',
        borderBottom: '4px, solid, black', // why isnt this working tho
        padding: `${theme.spacing.unit * 2}px 0 ${theme.spacing.unit * 2}px ${theme.spacing.unit * 7}px`,
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
        marginBottom: theme.spacing.unit * 3,
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '10%'
    },

    paper: {
        margin: `0 ${theme.spacing.unit * 4}px`,
        padding: theme.spacing.unit * 2,
    },
});

const cards = [{
    title: "Front End",
    language: ['JavaScript', 'HTML5', 'CSS/Sass', 'React', 'Redux'],
    proficiency: ['75', '90', '90', '50', '25']
}, {
    title: "Backend",
    language: ['Java', 'C', 'Python', 'Scheme'],
    proficiency: ['75', '45', '50', '50']
}, {
    title: "Theory Based",
    language: ['Git', 'Agile', 'Eclipse', 'FP'],
    proficiency: ['75', '90', '75', '65']
}, {
    title: "Other Knowledge",
    language: ['SQL', 'API Design', 'HCI'],
    proficiency: ['65', '45', '85']
}];



function Skills(props) {
    const { classes } = props;
    return (
        <Paper className={classes.paper}>
            <div className={classes.heroContent}>
                <Typography component="h3" variant="h3" align="left" color="textPrimary" gutterBottom>
                    Skills</Typography>
            </div>
            <div className={classes.layout}>
                <Grid container spacing={40} >
                    {cards.map(card => (
                        <Grid item key={card} sm={12} md={6} lg={3}>
                            <SkillCard card={card} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Paper>
    );
}

Skills.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skills);