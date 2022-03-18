import React from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, summary, poster }) {
  return (
    <div>
      <h3>
        {title} {year}
      </h3>

      <p>{summary}</p>
      <p>{poster}</p>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
