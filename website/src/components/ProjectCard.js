import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Carousel from './ImageCarousel';

import Chip from '@material-ui/core/Chip';

const styles = theme => ({
    colorPrimary: {
        backgroundColor: '#ba2d65',
        color: 'white',
        margin: theme.spacing.unit / 2,
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '10%'
    },
    cardTitle: {
        height: '2rem',
        backgroundColor: 'rgba(128, 128, 128, .2)'
    },
    cardMedia: {
        paddingTop: '15rem',
    },
    chip: {
        margin: theme.spacing.unit / 2,
    },
    learnMoreButton: {
        boxShadow: theme.shadows[5],
        backgroundColor: 'pink',
        margin: '0 5% 5% 5%',
    }

});

class ProjectCard extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                <CardContent className={classes.cardTitle}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {this.props.card.title}
                    </Typography>

                </CardContent>
                <CardMedia
                    onClick={this.handleOpen}
                    className={classes.cardMedia}
                    image={this.props.card.image}
                    title={this.props.card.title}
                />
                <CardContent className={classes.root}>

                    {this.props.card.tools.map(tool => (
                        <Chip label={tool} className={classes.colorPrimary} color='primary' />
                    ))}
                </CardContent>
                <CardActions>
                    <Button className={classes.learnMoreButton} onClick={this.handleOpen}>Learn More</Button>
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">{this.props.card.title}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                {this.props.card.description}
                            </DialogContentText>
                            <Carousel images={this.props.card.images} />
                        </DialogContent>
                        <DialogActions>
                            {this.props.card.link != '' &&
                                <Button href={this.props.card.link} target='_blank' color="primary">
                                    See online</Button>
                            }}
                            <Button onClick={this.handleClose} color="primary" autoFocus>
                                Back</Button>
                        </DialogActions>
                    </Dialog>
                </CardActions>
            </Card>
        );
    }
}

ProjectCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectCard);