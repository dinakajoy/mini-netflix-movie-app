import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moviesapi from '../../../api/movies.json';
import IMovie from '../MoviesInterface';
import { getFavourites } from '../FavouriteMovies/favouriteMoviesServices';
import Pagination from '../../Pagination';
import Title from '../../common/Title';
import './MovieList.css';

type Props = {
  token: string;
  signedIn: boolean;
}

const MoviesList:React.FC<Props> = ({ token, signedIn }: Props) => {
  const loadData = ():IMovie[] => JSON.parse(JSON.stringify(moviesapi));
  
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [favMovies, setFavMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [moviesPerPage] = useState<number>(12);
  // Get current posts
  const indexOfLastMovie:number = currentPage * moviesPerPage;
  const indexOfFirstMovie:number  = indexOfLastMovie - moviesPerPage;
  let currentMovies:IMovie[] = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  useEffect(() => {
    if(signedIn) {
      let userId:string | null = localStorage.getItem('userId');
      const data: {} = { userId, token };
      const favMov = getFavourites(data);
    }
    setMovies(loadData);
  }, []);

  const searchByTitle = (query: string):void => {
    const mv:IMovie[] = loadData();
    let moviesBasedOnSearch:IMovie[] = mv.filter((movie:IMovie) => movie.title.toLocaleLowerCase().indexOf(query) !== -1);
    setMovies([...moviesBasedOnSearch]);
  };

  const sortAsc = ():void => {
    let moviesInAsc:IMovie[] = movies.sort((a, b) => a.title.toLocaleLowerCase() < b.title.toLocaleLowerCase() ? -1 : 1);
    setMovies([...moviesInAsc]);
  };

  const sortDesc = ():void => {
    let moviesInDesc:IMovie[] = movies.sort((a, b) => a.title.toLocaleLowerCase() > b.title.toLocaleLowerCase() ? -1 : 1);
    setMovies([...moviesInDesc]);
  };

  // Change page
  const paginate = (pageNumber:number):void => setCurrentPage(pageNumber);

  return (
    <>
      <Title title={'Latest Movies and More...'} />
      <section className="movies-events">
        <div className="search">
          <input type="search" placeholder="Search" onChange={(e) => searchByTitle(e.target.value)} />
        </div>
        <div className="sort">
          Sort By Title:
          <i className="fa fa-sort-alpha-asc fa-1.5x" onClick={() => sortAsc()}> </i>
          <i className="fa fa-sort-alpha-desc fa-1.5x" onClick={() => sortDesc()}> </i>
        </div>
      </section>

      <section className="movie-row">
        {currentMovies.length > 0 && currentMovies.map((cmovie:any) => (
          <Link to={`/movies/${cmovie.objectId}`} key={cmovie.objectId} className="wrapper">
            <img src={ cmovie.image.url } alt={ cmovie.image.name } title={ cmovie.title } className="grid-img" />
            <div className="favourite"><i className="fa fa-heart" title="My Favourite"></i></div>
            <div className="overlay">
              <h5 className="top">{ cmovie.title }</h5>
              <small className="bottom">Year: { cmovie.releaseYear }</small>
            </div>
          </Link>
        )) }
      </section>

      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={movies.length}
        paginate={paginate}
      />
    </>
  )
};

export default MoviesList;