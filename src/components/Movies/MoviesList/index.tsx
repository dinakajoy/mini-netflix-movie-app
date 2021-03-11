import React from 'react';
import Movie from '../Movie';
import moviesapi from '../../../api/movies.json';
import Title from '../../common/Title';

const MoviesList: React.FC  = () => {

  return (
    <>
      <Title title={'Latest Movies and More...'} />
      { moviesapi && moviesapi.map(movie => <div key={movie.objectId}>{movie.title}</div>) }
    </>
  )
};

export default MoviesList;