import React, { useEffect, useState } from 'react';
import { Card, CardContent, makeStyles } from '@material-ui/core'
import { fade } from '@material-ui/core/styles';
import transformInfo from '../../utils/transformInfo';

function MovieCard(props) {
    const classes = useStyles();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        var promise = fetch(`https://api.themoviedb.org/3/movie/${props.id}?api_key=2c73b0f220a02912d9c2cd39c09588e2`);
        promise.then((info) => info.json()).then((response) => {
            setMovie(transformInfo(response));
        });
    }, [props.id])

    return (
        <Card className={classes.container}>
            <CardContent className={classes.content}>
                <div className={classes.containerImg}>
                {console.log(movie.img)}
                    <img className={classes.img} src={"https://image.tmdb.org/t/p/w500"+(movie.img)} alt="" /> 
                </div>
                <div className={classes.contentInfo}>
                    <h3 className={classes.title}>{movie.title}</h3>
                    <p className={classes.tagline}>{movie.tagline}</p>
                    <p className={classes.info}>{movie.info}</p>
                    <p className={classes.category}>generos</p>
                    <p className={classes.info}> productores</p>
                    <section className={classes.extra}>
                        <div>
                            <p className={classes.info}>Original Release:</p>
                            <p className={classes.infogreen}>{movie.date}</p>

                            <p className={classes.info}>Box Office:</p>
                            <p className={classes.infogreen}>{movie.money}</p>
                        </div>
                        <div>
                            <p className={classes.info}>Running Time:</p>
                            <p className={classes.infogreen}>{movie.runtime}</p>

                            <p className={classes.info}>Vote Average:</p>
                            <p className={classes.infogreen}>{movie.voteAverage}</p>
                        </div>
                    </section>
                </div>

            </CardContent>
        </Card>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        width: '50%',
        margin: 60
    },
    content: {
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
        paddingBottom: 0,
        float: 'left',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        backgroundColor: fade(theme.palette.common.black, 0.7),
    },
    containerImg: {
        width: '50%',
        height: '100%',
        margin: 0,
        padding: 0,
        paddingBottom: 0,
        float: 'left',
    },
    img: {
        width: 350,
        height: 500,
        margin: 0,
        padding: 0,
    },
    contentInfo: {
        margin: 0,
        padding: 0,
        position: 'relative',
        display: 'block'
    },
    title: {
        color: 'white',
        fontSize: 30,
        margin: '0',
    },
    tagline: {
        color: '#01f066',
        fontStyle: 'italic',
        fontSize: 15,
    },
    info: {
        margin: 0,
        fontSize: 15,
        color: 'white',
    },
    infogreen: {
        margin: 0,
        fontSize: 15,
        color: '#01f066',
    },
    category: {
        color: '#01f066'
    },
    extra: {
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

export default MovieCard;