import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moviesapi from '../../../api/movies.json';
import Pagination from '../../Pagination';
import Title from '../../common/Title';
import './MovieList.css';

interface IMovie {
  objectId: string;
  title: string;
  image: [
    {'name': string},
    {'url': string}
  ];
  genre: any[];
  description: string;
  releaseYear: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
}

const MoviesList:  React.FC = () => {

  const [movies, setMovies] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [moviesPerPage] = useState(12);

  useEffect(() => {
    setMovies(moviesapi);
  }, [movies]);

  // Get current posts
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  // Change page
  const paginate = (pageNumber:number):void => setCurrentPage(pageNumber);

  return (
    <>
      <Title title={'Latest Movies and More...'} />
      <section className="movies-events">
        <div className="search">
          <input type="search" placeholder="Search" />
        </div>
        <div className="sort">
          Sort By Title:
          {/* <i class="fa fa-sort-alpha-asc fa-1.5x" onClick= "sortAsc()"> </i> */}
          <i className="fa fa-sort-alpha-asc fa-1.5x"> </i>
          <i className="fa fa-sort-alpha-desc fa-1.5x"> </i>
        </div>
      </section>

      <section className="movie-row">
        {currentMovies && currentMovies.map(movie => (
          <Link to={`/movies/${movie.objectId}`} key={movie.objectId} className="wrapper">
            <img src={ movie.image.url } alt={ movie.image.name } title={ movie.title } className="grid-img" />
            <div className="favourite"><i className="fa fa-heart" title="My Favourite"></i></div>
            <div className="overlay">
              <h5 className="top">{ movie.title }</h5>
              <small className="bottom">Year: { movie.releaseYear }</small>
            </div>
          </Link>
        )) }

        <Pagination
          moviesPerPage={moviesPerPage}
          totalMovies={movies.length}
          paginate={paginate}
        />
      </section>
    </>
  )
};

export default MoviesList;