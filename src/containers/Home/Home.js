import React, { useState, useEffect } from 'react';
import { makeStyles, Button, Grid } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import MovieLine from '../../components/MovieLine/MovieLine';
import transformInfo from '../../utils/transformInfo';

function Home(props) {
    const classes = useStyles();
    const [line, setLine] = useState([]);

    function handleClick() {
        props.history.push('/movies/581006');
    }

    useEffect(() => {
        var promise = fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2c73b0f220a02912d9c2cd39c09588e2`);
        promise.then((info) => info.json()).then((response) => {
            let newList = response.results.map((film) => transformInfo(film));
            setLine(newList);
        });
    }, []);

    return (
        <div className={classes.container}>
            <div className={classes.banner}>
                <div className={classes.mainContent}>
                    <img className={classes.logo} src="https://upload.wikimedia.org/wikipedia/commons/c/cc/BoJack_Horseman_Logo.svg" alt="Logo" />
                    <h2 className={classes.season}>Temporada 2</h2>
                    <p className={classes.desc}>Descripcion lorem ipsum as dolor sit amet, conseccotur adiping elit. Doloquem no se que mas sigue pero bueno</p>
                    <div>
                        <Button onClick={handleClick} variant="contained" color="secondary" className={classes.button}>
                            Watch now
                        </Button>
                        <Button variant="contained" color="primary" className={classes.button}>
                            My list
                        <Add className={classes.rightIcon} />
                        </Button>
                    </div>
                </div>
                <div className={classes.content}>
                    <Grid container spacing={2} className={classes.line}>
                        {line && line.map((item) => {
                            return <Grid item md={2} key={item.id}>
                                <MovieLine
                                    {...item}
                                />
                            </Grid>
                        })}
                    </Grid>
                </div>
            </div>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        height: 650,
    },
    banner: {
        width: '100%',
        height: '100%',
        backgroundImage: 'url("http://www.biocenit.cat/mypics/83/834503/bojack-horseman-wallpaper.jpg")',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    },
    mainContent: {
        width: '40%',
        height: '100%',
        padding: '8%',
    },
    logo: {
        width: 500,
    },
    season: {
        margin: 0,
        padding: 5,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bolder'
    },
    desc: {
        margin: 0,
        marginTop: 1,
        padding: 5,
        color: 'white',
        fontSize: 15,
        textAlign: 'justify'
    },
    button: {
        margin: 5,
    },
    content: {
        width: '100%'
    },
    line: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

export default Home;