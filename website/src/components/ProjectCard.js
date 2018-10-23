import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Modal from '@material-ui/core/Modal';


const styles = theme => ({
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
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
    modalPositon: {
        top: `30%`,
        left: `30%`,
        // transform: `translate(-${top}%, -${left}%)`
    }
    
});

class ProjectCard extends React.Component {
    constructor(props, context){
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
    // Consider adding badges to each project card to show tech/tools used
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
                    className={classes.cardMedia}
                    image={this.props.card.image}
                    title={this.props.card.title}
                />
                <CardContent>
                    <Typography>
                        {this.props.card.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Tools
                    </Button>
                    <div>
                        <Button onClick={this.handleOpen}>Open Modal</Button>
                        <Modal
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                            open={this.state.open}
                            onClose={this.handleClose}
                        >
                            <div className={classNames(classes.paper, classes.modalPositon)}>
                                <Typography variant="h6" id="modal-title">
                                    Text in a modal</Typography>
                                <Typography variant="subtitle1" id="simple-modal-description">
                                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</Typography>
                                
                            </div>
                        </Modal>
                    </div>
                </CardActions>
            </Card>
        );
    }
}

ProjectCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const ProjectCardWrapped = withStyles(styles)(ProjectCard);

export default withStyles(styles)(ProjectCardWrapped);