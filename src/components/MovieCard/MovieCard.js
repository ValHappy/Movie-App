import React from 'react';
import { Card, CardContent, makeStyles } from '@material-ui/core'
import { fade } from '@material-ui/core/styles';

function MovieCard(props) {

    const classes = useStyles();

    return (
        <Card className={classes.container}>
            <CardContent className={classes.content}>
                <div>
                    <img className={classes.img} src="https://www.yaconic.com/wp-content/uploads/2017/11/by3t9e682c6y-683x1024.jpg" alt="" />
                </div>

                <div className={classes.contentInfo}>
                    <h3 className={classes.title}>Titulo peli</h3>
                    <p className={classes.tagline}> lorem ipsum dolor as</p>
                    <p className={classes.info}>aqui va a ir un parrafo de texto muy largo</p>
                    <p className={classes.category}>generos</p>
                    <p className={classes.info}> productores</p>
                    <section className={classes.extra}>
                        <div>
                            <p className={classes.info}>Original Release:</p>
                            <p className={classes.infogreen}>contenido de etiqueta</p>

                            <p className={classes.info}>Box Office:</p>
                            <p className={classes.infogreen}>contenido de etiqueta</p>
                        </div>
                        <div>
                            <p className={classes.info}>Running Time:</p>
                            <p className={classes.infogreen}>contenido de etiqueta</p>

                            <p className={classes.info}>Vote Average:</p>
                            <p className={classes.infogreen}>contenido de etiqueta</p>
                        </div>
                    </section>
                </div>

            </CardContent>
        </Card>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        width: '50%'
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: fade(theme.palette.common.black, 0.7),
        fontSize: 20,
    },
    img: {
        width: 200,
        margin: 1,

    },
    contentInfo: {
        margin: 0,
        padding: 0,
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
        fontSize: 18,
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

export default MovieCard;