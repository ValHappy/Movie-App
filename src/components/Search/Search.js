import React from 'react';
import superagent from 'superagent';
import { makeStyles, InputBase } from '@material-ui/core';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { fade } from '@material-ui/core/styles';

const APIKEY = '2c73b0f220a02912d9c2cd39c09588e2';
const SERVER = 'https://api.themoviedb.org';

function Search(props) {
    const classes = useStyles();
    const [movies, setMovies] = React.useState(null);

    const handleInput = (event) => {
        let search = event.target.value;
        let url = `${SERVER}/3/search/movie?query=${search}&api_key=${APIKEY}`;
        console.log(search);

        if (search.length < 2) return;

        superagent.get(url).then((response) => {
            console.log(response);
            setMovies(response.body.results);
        });
    }

    const handleClick = () => {
        console.log("holi :c soy la lista"); 
    }

    return (
        <div className={classes.container}>
            <div className={classes.search} onKeyPress={handleInput}>
                <div className={classes.searchIcon}>
                    <SearchRoundedIcon />
                </div>
                <InputBase placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                />
            </div>

            <div>
                {movies && <ul>
                    {movies.map((elem) => {
                        return <li onClick={handleClick} key={elem.id}>{elem.title} - {elem.id}</li>
                        //Usar el ID para traer toda la info de la peli /movie/id
                    })}
                </ul>}
            </div>

        </div>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.2),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.3),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
}));

export default Search;