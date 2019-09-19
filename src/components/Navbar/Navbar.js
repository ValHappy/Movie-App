import React from 'react';
import superagent from 'superagent';
import MovieCard from '../MovieCard/MovieCard';

const APIKEY = '2c73b0f220a02912d9c2cd39c09588e2';
const SERVER = 'https://api.themoviedb.org';

function Navbar(props) {

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

    return (
        <div onKeyPress={handleInput}>
            <input type="text" />

            {movies && <ul>
                {movies.map((elem) => {
                    return <li key={elem.id}>{elem.title} - {elem.id}</li>
                    //Usar el ID para traer toda la info de la peli /movie/id
                })}
            </ul>}
        </div>
    );
}

export default Navbar;