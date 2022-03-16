import { useEffect, useState } from "react";

function Movie() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    )
      .then((response) => response.json())
      .then((json) => {
        setMovie(json.data.movies);
        setLoading(false);
      });
  }, []);
  console.log(movie);

  return <div>{loading ? <h1>Loading...</h1> : null}</div>;
}

export default Movie;
