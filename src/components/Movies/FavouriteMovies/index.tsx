import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moviesapi from '../../../api/movies.json';
import IMovie from '../MoviesInterface';
import { getFavouriteMovies, deleteFavouriteMovie } from '../FavouriteMovies/favouriteMoviesServices';
import Pagination from '../../Pagination';
import Title from '../../common/Title';
import '../MoviesList/MovieList.css';

type Props = {
  token: string;
}
  
const FavouriteMovies:React.FC<Props> = ({ token }: Props) => {
  const loadData = ():IMovie[] => JSON.parse(JSON.stringify(moviesapi));
  let userId:string | null = localStorage.getItem('userId');

  const [loading, setLoading] = useState<boolean>(true);
  const [del, setDel] = useState<boolean>(false);
  
  const [favMoviesList, setFavMoviesList] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [moviesPerPage] = useState<number>(12);
  // Get current posts
  const indexOfLastMovie:number = currentPage * moviesPerPage;
  const indexOfFirstMovie:number  = indexOfLastMovie - moviesPerPage;
  let currentMovies:IMovie[] = favMoviesList.slice(indexOfFirstMovie, indexOfLastMovie);

  useEffect(() => {
    setLoading(true);
    let allMovies:any = moviesapi;
    let favoriteList:any = [];
    let favoriteMovies:any = [];

    const data: {} = { userId, token };
    getFavouriteMovies(data)
      .then(res => favoriteList = res)
      .then(() => {
        if(favoriteList !== null && favoriteList.length > 0) {
          for (const favMovie of favoriteList) {
            for (const movie of allMovies) {
              if (movie.objectId === favMovie.movieId) {
                favoriteMovies.push(movie);
              }
            }
          }
        }
        setFavMoviesList(favoriteMovies);
        setLoading(false);
      })
  }, [userId, token, del]);

  const removeFavouriteMovie = (movieId:string) => {
    const data: {} = { userId, token, movieId };
    deleteFavouriteMovie(data)
      .then(data => setDel(true))
  };

  const searchByTitle = (query: string):void => {
    const mv:IMovie[] = loadData();
    let moviesBasedOnSearch:IMovie[] = mv.filter((movie:IMovie) => movie.title.toLocaleLowerCase().indexOf(query) !== -1);
    setFavMoviesList([...moviesBasedOnSearch]);
  };

  const sortAsc = ():void => {
    let moviesInAsc:IMovie[] = favMoviesList.sort((a:any, b:any) => a.title.toLocaleLowerCase() < b.title.toLocaleLowerCase() ? -1 : 1);
    setFavMoviesList([...moviesInAsc]);
  };

  const sortDesc = ():void => {
    let moviesInDesc:IMovie[] = favMoviesList.sort((a:any, b:any) => a.title.toLocaleLowerCase() > b.title.toLocaleLowerCase() ? -1 : 1);
    setFavMoviesList([...moviesInDesc]);
  };

  // Change page
  const paginate = (pageNumber:number):void => setCurrentPage(pageNumber);

  return (
    <>
      <Title title={'My Favourite Movies'} />

      { loading && <h2 className="loading">Loading... </h2> }

      { !loading && 
        <>
          { favMoviesList.length > 0 && <section className="movies-events">
            <div className="search">
              <input type="search" placeholder="Search" onChange={(e) => searchByTitle(e.target.value)} />
            </div>
            <div className="sort">
              Sort By Title:
              <i className="fa fa-sort-alpha-asc fa-1.5x" onClick={() => sortAsc()}> </i>
              <i className="fa fa-sort-alpha-desc fa-1.5x" onClick={() => sortDesc()}> </i>
            </div>
          </section> }

          { favMoviesList.length < 1 && <div className="alert alert-danger">
            Sorry: You Have No Favourite Movie. <br />
            But Does It Infer That Our Movies Don't Interest You Enough???
            <p><Link to="/" style={{color:'#000'}}>Ok, Let Me Add Favourite Movies</Link></p></div> }

          <section className="movie-row">
            { currentMovies.length > 0 && currentMovies.map((cmovie:any) => (
              <div key={cmovie.objectId} className="wrapper">
                <img src={ cmovie.image.url } alt={ cmovie.image.name } title={ cmovie.title } className="grid-img" />
                <div className="favourite"><i className="fa fa-close" title="Remove From Favourites" onClick={(event: React.MouseEvent<HTMLElement>) => removeFavouriteMovie(cmovie.objectId)}></i></div>
                <Link to={`/movies/${cmovie.objectId}`}>
                  <div className="overlay">
                    <h4 className="top">{ cmovie.title }</h4>
                    <small className="bottom">Year: { cmovie.releaseYear }</small>
                  </div>
                </Link>
              </div>
            )) }
          </section>

          { favMoviesList.length > 12 && <Pagination
            moviesPerPage={moviesPerPage}
            totalMovies={favMoviesList.length}
            paginate={paginate}
          /> }
        </>
       }
    </>
  )
};

export default FavouriteMovies;
