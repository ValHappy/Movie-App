import React from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import { makeStyles, CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Movies from '../Movies/Movies';
import Navbar from '../../components/Navbar/Navbar';

function App() {
    const classes = useStyles();

    return (
        <Router>
            <div className="App" className={classes.container}>
                <h1 className={classes.title}>MOVIPPY</h1>

                <Navbar/>

                <Route path="/" exact component={Home} />
                <Route path="/movie" component={Movies} />

                <CssBaseline/>
            </div>
        </Router>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        height: '100%',
        background: 'pink',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        color: theme.palette.grey[600],
        fontSize: 50,
        padding: 0,
        marginTop: 50,
    }
}));

export default App;