import React from 'react';
import { makeStyles } from '@material-ui/core';
import Navbar from '../../components/Navbar/Navbar';

function Home() {
    const classes = useStyles();
    
    return (
        <div className={classes.container}>
            <h1 className={classes.title}>My Happy Weather App</h1>
        </div>
    );
}

const useStyles = makeStyles(theme => ({


}));

export default Home;