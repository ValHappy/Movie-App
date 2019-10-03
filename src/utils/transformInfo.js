const transformInfo = (response) => {
    return {
        title: response.title,
        voteAverage: response.vote_average
    };
};

export default transformInfo;