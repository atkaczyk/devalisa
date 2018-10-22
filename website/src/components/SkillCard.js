import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import LinearProgress from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid';

import Collapse from '@material-ui/core/Collapse';


const styles = theme => ({
  card: {
    minWidth: 275,
    height: '100%',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  skillProgress: {
    height: '10px',
    border: '2px solid black',
    borderRadius: '4px',
    marginTop: '10px',
    marginBottom: '10px'
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing.unit,
  },
});

// REPLACE PROGRESS BAR WITH SIMPLE SLIDER https://material-ui.com/lab/slider/

class SkillCard extends React.Component {
  state = {
    checked: false,
  };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  render() {
    const { classes } = this.props;
    const { checked } = this.state;


    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <Collapse in={checked} collapsedHeight="40px">
            <Card className={classes.card}>
              <CardContent>
                <Typography  onClick={this.handleChange} align='left' gutterBottom variant="h5" component="h2">
                  {this.props.card.title}
                </Typography>
                {this.props.card.language.map((language, index) => (
                  <Grid container spacing={16} justify="center">
                    <Grid item sm={12} md={6} lg={6}>
                      <LinearProgress className={classes.skillProgress} variant="determinate" value={this.props.card.proficiency[index]} />
                    </Grid>
                    <Grid item sm={12} md={6} lg={6}>
                      <Typography variant="h6" align="left" color="textSecondary" paragraph>
                        {language}</Typography>
                    </Grid>
                  </Grid>
                ))}
              </CardContent>
            </Card>
          </Collapse>
        </div>
      </div>
    );
  }
}

SkillCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SkillCard);
