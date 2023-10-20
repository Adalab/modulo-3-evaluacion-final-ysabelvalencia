const callToApi = () => {
  return fetch(
    'https://owen-wilson-wow-api.onrender.com/wows/random?results=50'
  )
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((data) => {
        return {
          movie: data.movie,
          year: data.year,
          director: data.director,
          fullLine: data.full_line,
          poster: data.poster,
          audio: data.audio,
        };
      });
      return cleanData;
    });
};

export default callToApi;
