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

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
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
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    textAlign: 'left',
    borderBottom: '4px, solid, black', // why isnt this working tho
  },
};


function Skills(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
      <Grid container spacing={16} justify="center">
          <Grid item sm={12} md={6} lg={8}>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Java</Typography>
          </Grid>
          <Grid item sm={12} md={6} lg={4}>
            <LinearProgress className={classes.skillProgress} variant="determinate" value={50} />
          </Grid>
          </Grid>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

Skills.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skills);