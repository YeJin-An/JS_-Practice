import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    moviee: [],
  };
  getMoviews = async () => {
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
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

export default App;
