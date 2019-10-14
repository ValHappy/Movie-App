import React from 'react';
import { Card, CardContent, makeStyles, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { withRouter } from 'react-router-dom';

function MovieLine(props) {
    const classes = useStyles();

    function handleClick() {
        props.history.push('/movies/' + props.id);
    }

    return (
        <Card>
            <CardContent className={classes.content}>
                <div className={classes.up}>
                    <div className={classes.up2}>
                        <h3 className={classes.title}>{props.title}</h3>
                        <p className={classes.desc}> {props.voteAverage} </p>
                    </div>
                    <Fab size="small" color="primary" aria-label="add" className={classes.btn} onClick={handleClick}> <AddIcon /> </Fab>
                </div>
                <p className={classes.desc}>{props.info.length > 80 ? props.info.substring(0, 80) + "..." : props.info}</p>
            </CardContent>
        </Card>

    );
}

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    },
    up: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    up2: {
        margin: 0,
        padding: 0,

    },
    title: {
        color: 'white',
        fontSize: '20',
        margin: 0,
        fontWeight: 'bold',
    },
    desc: {
        margin: '0',
        fontSize: '12',
        color: 'white',
        textAlign: 'justify'
    },
    btn: {
        marginLeft: '25%',
    }
}));

export default withRouter(MovieLine);