import React from "react";
import axios from "axios";

class ytsApi extends React.Component {
  state = {
    isLoading: true,
    moviee: [],
  };
  getMoviews = async () => {
    const {
      data: {
        data: { movies },
      },
      // moview.data.data.movies 를 이렇게 표현 가능!
    } = await axios.get("https://yts.mx/api/v2/list_movies.json");

    this.setState({ movies, isLoading: false });
    // state의 moview , axios의 movies를 의미 한다.

    console.log(movies);
  };
  componentDidMount() {
    this.getMoviews();
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

// javascript에서 data가져오는 요것이 fetch 이에여!

export default ytsApi;
