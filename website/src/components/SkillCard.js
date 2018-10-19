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
  }
};

// REPLACE PROGRESS BAR WITH SIMPLE SLIDER https://material-ui.com/lab/slider/

function Skills(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        
      <Typography align='left' gutterBottom variant="h5" component="h2">
            {props.card.title}
          </Typography>

          {props.card.language.map((language,index) => (
        <Grid container spacing={16} justify="center">

            <Grid item sm={12} md={6} lg={6}>
              <LinearProgress className={classes.skillProgress} variant="determinate" value={props.card.proficiency[index]} />
            </Grid>
            <Grid item sm={12} md={6} lg={6}>
              <Typography variant="h6" align="left" color="textSecondary" paragraph>
                {language}</Typography>
            </Grid>
        </Grid>
          ))}


      </CardContent>
      {/* <CardActions>
        <Button onClick={checked = () => true ? false : true}size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

Skills.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skills);