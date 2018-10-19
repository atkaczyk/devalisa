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

const styles = theme => ({
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        textAlign: 'left',
        borderBottom: '4px, solid, black', // why isnt this working tho
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
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
    cardGrid: {
        // backgroundColor: 'red',
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '10%'
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
        // backgroundColor:'red'
    }
});

const cards = [{
    title:"Backend",
    language: ['Java','C','Python'],
    proficiency: ['75','45','50']
},{
    title:"Front End",
    language: ['JavaScript','HTML5','CSS/Sass/Less', 'React', 'Redux', 'Scheme'],
    proficiency: ['75','90','90','50', '25', '50']
},{
    title:"Theory Based",
    language: ['Git','Agile','Eclipse', 'Functional Programming'],
    proficiency: ['75','90','75', '65']
},{
    title:"Other Knowledge",
    language: ['SQL','API Design','Human Computer Interaction'],
    proficiency: ['65','45','85']
}];



function Skills(props) {
    const { classes } = props;
    // Consider adding badges to each project card to show tech/tools used
    return (
        <React.Fragment>
            <CssBaseline />
            <div>
                <div className={classes.heroContent}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Skills</Typography>
                    <Typography variant="h6" align="center" color="textSecondary" paragraph>
                      Self assessment.</Typography>
                </div>
            </div>
            <div className={classNames(classes.layout, classes.cardGrid)}>
                {/* End hero unit */}
                <Grid container spacing={40}>
                    {cards.map(card => (
                        <Grid item key={card} sm={12} md={6} lg={4}>
                            <SkillCard card={card}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </React.Fragment>
    );
}

Skills.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skills);