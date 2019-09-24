import React from 'react';
import { makeStyles } from '@material-ui/core';

function Home() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <h1>This is home :v</h1>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    container: {

    }
}));

export default Home;