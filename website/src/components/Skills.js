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
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
    },
    paper: {
      margin: theme.spacing.unit,
      padding: theme.spacing.unit * 2,
    }
});

const cards = [{
    title:"Front End",
    language: ['JavaScript','HTML5','CSS/Sass/Less', 'React', 'Redux', 'Scheme'],
    proficiency: ['75','90','90','50', '25', '50']
},{
    title:"Backend",
    language: ['Java','C','Python'],
    proficiency: ['75','45','50']
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
        <Paper className={classes.paper}>
        <React.Fragment>
            <CssBaseline />
            <div>
                <div className={classes.heroContent}>
                    <Typography component="h3" variant="h3" align="left" color="textPrimary" gutterBottom>
                        Skills</Typography>
                    <Typography variant="h6" align="left" color="textSecondary" paragraph>
                      Front end | Backend | Tools | Theory </Typography>
                </div>
            </div>
            <div className={classNames(classes.layout, classes.cardGrid)}>
                {/* End hero unit */}
                <Grid container spacing={40}>
                    {cards.map(card => (
                        <Grid item key={card} sm={12} md={6} lg={4}>
                              <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{card.title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          
        <SkillCard card={card}/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </React.Fragment>
        </Paper>
    );
}

Skills.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skills);