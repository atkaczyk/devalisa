import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import LinearProgress from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid';

import Collapse from '@material-ui/core/Collapse';
import Switch from '@material-ui/core/Switch';

const styles = {
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  root: {
    flexGrow: 1,

  },
  skillProgress: {
    height: '15px',
    marginTop: '10px',
    marginBottom: '10px'
  },
  root: {
    height: 180,
  },
  container: {
    display: 'flex',
  },
  paper: {
    // margin: theme.spacing.unit,
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    // fill: theme.palette.common.white,
    // stroke: theme.palette.divider,
    strokeWidth: 1,
  },

};

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
      <div className={classes.container}>
        <Typography checked={checked} onClick={this.handleChange} aria-label="Collapse" gutterBottom variant="h5" component="h2">
          {this.props.card.title}
        </Typography>
        <Collapse in={checked}>
          <Card className={classes.card}>
            <CardContent>
              {this.props.card.language.map((language, index) => (
                <Grid container spacing={16} justify="center">
                  <Grid item sm={12} md={6} lg={6}>
                    <Typography variant="h6" align="center" color="textSecondary" paragraph>
                      {language}</Typography>
                  </Grid>
                  <Grid item sm={12} md={6} lg={6}>
                    <LinearProgress className={classes.skillProgress} variant="determinate" value={this.props.card.proficiency[index]} />
                  </Grid>
                </Grid>
              ))}
            </CardContent>
          </Card>
        </Collapse>
      </div>

    );
  }
}

// <CardActions>
// <Button size="small">Learn More</Button>
// </CardActions>
SkillCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SkillCard);