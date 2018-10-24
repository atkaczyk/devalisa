import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    root: {
        boxShadow: 'none'
    },
    footer: {
        background: '#d9a7c7',  /* fallback for old browsers */
        background: '-webkit-linear-gradient(to right, #fffcdc, #f8bbd0)',  /* Chrome 10-25, Safari 5.1-6 */
        background: 'linear-gradient(to right, #fffcdc, #f8bbd0)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        color: 'grey',
      padding: theme.spacing.unit * 6,
      marginTop: theme.spacing.unit * 6,
    },
});

function Footer(props) {
    const { classes } = props;
    return (
        <footer className={classes.footer}>
        {/* <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography> */}
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Thank you for visiting! 
        </Typography>
      </footer>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);

