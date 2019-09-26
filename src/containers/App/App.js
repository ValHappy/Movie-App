import React from 'react';
import { makeStyles, CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from '../../components/Menu/Menu';
import Search from '../../components/Search/Search';
import Home from '../Home/Home';
import Movies from '../Movies/Movies'
import Favorites from '../Favorites/Favorites';

function App() {
    const classes = useStyles();

    return (
        <Router>
            <div className={classes.navbar} >
                <Menu className={classes.menu} />
                <div className={classes.searchContainer}>
                    <Search className={classes.search} />
                </div>
            </div>

            <Route path="/" exact component={Home} />
            <Route path="/movies" component={Movies} />
            <Route path="/favorites" component={Favorites} />

            <CssBaseline />

        </Router>
    );
}

const useStyles = makeStyles(theme => ({
    navbar: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        zIndex: '0'
    },
    searchContainer: {
        marginLeft: '40%',
    },
    search: {
    }
}));

export default App;