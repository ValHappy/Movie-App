const transformInfo = (response) => {
    return {
        id: response.id,
        img: response.poster_path,
        background: response.backdrop_path,
        title: response.title,
        tagline: response.tagline,
        info: response.overview,
        date: response.release_date,
        money: response.budget,
        runtime: response.runtime,
        voteAverage: response.vote_average
    };
};

export default transformInfo;