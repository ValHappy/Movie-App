import React from 'react';
import { makeStyles, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import HomeRounded from '@material-ui/icons/HomeRounded';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Person from '@material-ui/icons/Person';
import { withRouter } from 'react-router-dom';

function Menu(props) {
    const classes = useStyles();

    function handleChange(event, newValue) {
        props.history.push(newValue);
    }

    return (
        <BottomNavigation value={props.location.pathname} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction label="Home" value="/" icon={<HomeRounded />} />
            <BottomNavigationAction label="Favorites" value="/favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="History" value="/history" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Profile" value="/profile" icon={<Person />} />
        </BottomNavigation>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        width: 500,
    }
}));

//withRouter → inyecta location, history y match
export default withRouter(Menu);