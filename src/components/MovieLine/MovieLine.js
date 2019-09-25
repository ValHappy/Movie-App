import React from 'react';
import { Card, CardContent, makeStyles, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

function MovieLine(props) {
    const classes = useStyles();

    return (
        <Card>
            <CardContent className={classes.content}>
                <div className={classes.up}>
                    <div className={classes.up2}>
                        <h3 className={classes.title}>Titulo movie</h3>
                        <p className={classes.desc}> 6.8 </p>
                    </div>
                    <Fab size="small" color="primary" aria-label="add" className={classes.btn}> <AddIcon /> </Fab>
                </div>
                <p className={classes.desc}>Lorem ipsum dolor sit amet consectetur adipiscing elit, imperdiet leo quisque consequat urna tempor ornare nascetur</p>
            </CardContent>
        </Card>
    );
}

const useStyles = makeStyles(theme => ({
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
    up2:{
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

export default MovieLine;