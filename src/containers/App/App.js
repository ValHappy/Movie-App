import React from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import { makeStyles, CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Movies from '../Movies/Movies';
import Menu from '../../components/Menu/Menu';
import Search from '../../components/Search/Search';

function App() {
    const classes = useStyles();

    return (
        <Router>
            <div className={classes.navbar}>
                <Menu className={classes.menu} />
                <div className={classes.searchContainer}>
                    <Search className={classes.search} />
                </div>
            </div>

            <div className={classes.container}>
                <MovieCard />

                <Route path="/" exact component={Home} />
                <Route path="/movie" component={Movies} />

                <CssBaseline />
            </div>
        </Router>
    );
}

const useStyles = makeStyles(theme => ({
    navbar: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    searchContainer: {
        marginLeft: '40%'
    },
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        color: theme.palette.grey[600],
        fontSize: 40,
        padding: 0,
        marginTop: 50,
    }
}));

export default App;