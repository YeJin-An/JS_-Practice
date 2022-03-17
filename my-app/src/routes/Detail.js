import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const { id } = useParams();
  // React Router는 이 변수의 값을 넘겨주는 역활

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(movie);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>Detail {movie.id}</h1>

          <h3>{movie.title_long}</h3>

          <a href={movie.url}> link!!</a>

          <img src={movie.medium_cover_image} />
          <p>{movie.description_intro}</p>
          <h2>rating : {movie.rating}</h2>
          <ul>
            {movie.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Detail;
