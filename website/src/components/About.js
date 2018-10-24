import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import projectHonours from '../img/lab.jpg'; // Import using relative path


const styles = theme => ({
    root: {
        boxShadow: 'none'
    },
    paper: {
        width: '60%',
        margin: `${theme.spacing.unit * 2}px auto`, //`${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px`,
        padding: theme.spacing.unit * 2,
        boxShadow: 'none'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    bigAvatar: {
        margin: 10,
        width: 200,
        height: 200,
    },
});

function About(props) {
    const { classes } = props;
    return (
        <Paper className={classes.paper} id="about">
            <Grid container wrap="nowrap" spacing={16}>
                <Grid item>
                    <Avatar
                        alt="Alisa Tkaczyk"
                        src={projectHonours}
                        className={classes.bigAvatar}
                    />
                </Grid>
                <Grid item xs>
                    <div className={classes.heroContent}>
                        {/* <Typography component="h3" variant="h3" align="left" color="textPrimary" gutterBottom>
                            About</Typography> */}
                        <Typography variant="h6" align="left" color="textSecondary" paragraph>
                            Hi! I'm A-Lisa. </Typography>
                    </div>
                    <div>
                        <ExpansionPanel  className={classes.root}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className={classes.heading}>My past</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>I studied Honours Computer Science at Carleton University, where I specialized in Psychology and Human Computer Interaction. There I was also a Varsity Rower and a member of the Carleton Computer Science Society Board of Directors. I worked part-time at Real Programming 4 Kids teaching youth how to build usable video game projects, I worked part time at the school cafe as well. My favourite subjects were AI, Cryptography, and HCI. My biggest accomplishment was publishing a paper.</Typography>

                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel  className={classes.root}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className={classes.heading}>My present</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>I began working as a Software Consultant for Tata Consultancy Services in January 2018. While I was here I worked on multiple projects for one of the five major Canadian banks. My favourite project was working on the marketing team for the banks public site, we rolled out multiple campaigns from end to end and followed closely with agile. My biggest accomplishment was exceeding client expectations as I built a POC and proposed a solution to the companies onboarding difficulties I was then awarded Star of the Quarter award to recognize and employee who is innovative and self-starting.</Typography>

                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel  className={classes.root}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography className={classes.heading}>My Future</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>In my free time I enjoy being active. I coach youth basketball, I volunteer for Ladies Learning Code, I go for walks around the city. I also enjoy being creative. I take pottery and sewing classes, I also do punch-needle embroidery and paint.</Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);

