import React from "react";
import axios from "axios";
import Movie from "./Movie";

class YtsApi extends React.Component {
  state = {
    isLoading: true,
    movie: [],
  };
  getMoviews = async () => {
    const {
      data: {
        data: { movies },
      },
      // moview.data.data.movies 를 이렇게 표현 가능!
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    );

    this.setState({ movies, isLoading: false });
    // state의 moview , axios의 movies를 의미 한다.

    console.log(movies);
  };
  componentDidMount() {
    this.getMoviews();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              );
            })}
      </div>
    );
  }
}

// javascript에서 data가져오는 요것이 fetch 이에여!

export default YtsApi;
