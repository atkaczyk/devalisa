import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

import { Link } from 'react-router-dom';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    barColor: {
        background: '#d9a7c7',  /* fallback for old browsers */
        background: '-webkit-linear-gradient(to right, #fffcdc, #d9a7c7)',  /* Chrome 10-25, Safari 5.1-6 */
        background: 'linear-gradient(to right, #fffcdc, #d9a7c7)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        color: 'grey',
    },
    navButton: {
        marginRight:'15px',
        backgroundColor: 'white',
        borderRadius:'10px',
        fontStyle:'none',
    },
    navLink: {
        textDecoration: 'none',
        color:'grey',
    }
};

function NavBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar className={classes.barColor} position="sticky">
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                    <Link className={classes.navLink} to="#">Patience, Practice, Perseverance</Link>
          </Typography>
          <Button className={classes.navButton} color="inherit"><Link className={classes.navLink} to="#about">About</Link></Button>
          <Button className={classes.navButton} color="inherit"><Link className={classes.navLink} to="#projects">Skills</Link></Button>
          <Button className={classes.navButton} color="inherit"><Link className={classes.navLink} to="#projects">Projects</Link></Button>
          <Button className={classes.navButton} color="inherit"><Link className={classes.navLink} to="#resume">Resume</Link></Button>

                </Toolbar>
            </AppBar>
        </div>
    );
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);