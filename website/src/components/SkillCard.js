import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
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
    background: '#d9a7c7',  /* fallback for old browsers */
    background: '-webkit-linear-gradient(to right, #fffcdc, #f8bbd0)',  /* Chrome 10-25, Safari 5.1-6 */
    background: 'linear-gradient(to right, #fffcdc, #f8bbd0)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    borderRadius: '5px',
    marginRight: '10px',
    paddingLeft: '10px',
    lineHeight: '3rem',
    height: '3rem',
    boxShadow: theme.shadows[5],

    '&:hover': {
      background: '#d9a7c7',  /* fallback for old browsers */
      background: '-webkit-linear-gradient(to right, #f8bbd0, #ad818e)',  /* Chrome 10-25, Safari 5.1-6 */
      background: 'linear-gradient(to right, #f8bbd0, #ad818e)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
  },
  pos: {
    marginBottom: 12,
  },
  bar: {
    backgroundColor: 'deeppink',
  },
  barColorPrimary: {
    height: '10px',
    border: '2px solid black',
    borderRadius: '4px',
    marginTop: '10px',
    marginBottom: '10px',
    color: 'deeppink'
  },
  bar1Determinate: {
    height: '10px',
    border: '2px solid black',
    borderRadius: '4px',
    marginTop: '10px',
    marginBottom: '10px',
    color: 'deeppink'
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing.unit,
  },
});

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
          <Collapse in={checked} collapsedHeight="5rem">
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} onClick={this.handleChange} align='left' gutterBottom variant="h5" component="h2" direction='down' mountOnEnter unmountOnExit>
                  {this.props.card.title}
                </Typography>
                {this.props.card.language.map((language, index) => (
                  <Grid container spacing={16} justify="center">
                    <Grid item sm={12} md={6} lg={6}>
                      <LinearProgress

                        classes={{
                          barColorPrimary: classes.bar
                        }}
                        className={classes.bar1Determinate} color='primary' variant="determinate" value={this.props.card.proficiency[index]} />
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
