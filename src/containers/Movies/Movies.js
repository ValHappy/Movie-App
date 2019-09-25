import React from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import { makeStyles } from '@material-ui/styles';

function Movies(props) {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <MovieCard />
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

export default Movies;