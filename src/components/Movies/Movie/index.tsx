import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import moviesapi from '../../../api/movies.json';
import IMovie from '../MoviesInterface';
import { getFavourites, postFavourites } from '../FavouriteMovies/favouriteMoviesServices';
import Title from '../../common/Title';
import './Movie.css';

interface ParamTypes {
  movieId: string
}

type Props = {
  token: string;
  signedIn: boolean;
}

const Movie:React.FC<Props> = ({ token, signedIn }: Props) => {
  let { movieId } = useParams<ParamTypes>();

  const [favMovies, setFavMovies] = useState([]);
  const movie = moviesapi.filter(movie => movie.objectId === movieId);
  const isFavourite = favMovies.includes(movie[0].objectId, 0);

  const getDate = (date:string):string => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `Joined ${monthNames[new Date(date).getMonth()]} ${new Date(date).getDay()}, ${new Date(date).getFullYear()}`;
  };
  
  useEffect(() => {
    if(signedIn) {
      let userId:string | null = localStorage.getItem('userId');
      const data: {} = { userId, token };
      const favMov = getFavourites(data);
      setFavMovies(favMov);
    }
  });

  return (
    <>
      <Title title={ movie[0].title } />
      <section>
        <div className="movie-wrapper">
          <div className='movie-left'>
            <p><span className="red">RELEASED IN:</span> { movie[0].releaseYear }</p>
            <p><span className="red">PRODUCED IN:</span> { getDate(movie[0].createdAt) } | Full Episode</p>
            <p><span className="red">AUDIO:</span> English</p>
            <p><span className="red">SUBTITLE:</span> English</p>
            <p>
              <span className="red">GENRE:</span>
              { movie[0].genre.length > 0 && movie[0].genre.map((gen, index) => (
                <span key={index} className="badge"> {gen} </span>
              ))}
              {/* <span class="badge badge-pill badge-secondary" *ngFor="let gen of movie.genre"> {{ gen }} </span> */}
            </p>
            <div className="details">
              In This Episode: { movie[0].description }
            </div>
          </div>

          <div className='movie-right'>
            <img src={ movie[0].image.url } alt={ movie[0].image.name } title={ movie[0].title } className="grid-img" />
            <br /><br />
            <div className="movie-right-data">
              <div className="ratings" title="Rating">
                <div>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
              </div>
              <div>
                <i className="fa fa-heart" title="Add To Favourite"></i>
              </div>
            </div>
          </div>
        </div>

        {/* <br><br>
        <div *ngIf='errorMessage' className='alert alert-danger'>
            {{ errorMessage }}
        </div> */}

        <div className='card-footer'>
          <Link to="/" className='btn-back'>
            <i className='fa fa-chevron-left'></i> Go Back
          </Link>
        </div>
      </section>

      <section className="release-container">
        <h3 className="release-title">TO BE RELEASED SOON: </h3>
        <div className="to-be-released">
          <img src="https://peruzal-parse-media.s3.amazonaws.com/eee9d012-a5c1-42e2-8f38-0efc1729d89b_10.jpg" alt="Mini-Netflix" />
          <img src="https://peruzal-parse-media.s3.amazonaws.com/b2610bfc-c8b7-48e0-8577-15ed47952a26_3.jpg" alt="Mini-Netflix" />
          <img src="https://peruzal-parse-media.s3.amazonaws.com/db4e5018-a345-4535-a99a-b77689f83d0a_5.jpg" alt="Mini-Netflix" />
          <img src="https://peruzal-parse-media.s3.amazonaws.com/fc92ca2c-bb7d-4020-b92e-f5fa0915181b_7.jpg" alt="Mini-Netflix" />
        </div>
      </section>
    </>
  )
};

export default Movie;