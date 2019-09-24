import React from 'react';
import { makeStyles, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import HomeRounded from '@material-ui/icons/HomeRounded';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Person from '@material-ui/icons/Person';

function Navbar(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState('home');

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction label="Home" value="home" icon={<HomeRounded />} />
            <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="History" value="history" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Profile" value="profile" icon={<Person />} />
        </BottomNavigation>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        width: 500,
    }
}));

export default Navbar;