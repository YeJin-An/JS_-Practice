import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  // React Router는 이 변수의 값을 넘겨주는 역활

  const getMovie = async () => {
    // fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
  };

  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail {id}</h1>;
}

export default Detail;
