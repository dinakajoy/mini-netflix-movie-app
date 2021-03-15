import React, { useEffect, useState } from 'react';
import { getFavourites, delFavourites, postFavourites } from '../FavouriteMovies/favouriteMoviesServices';
import moviesapi from '../../../api/movies.json';

interface IFavouriteMovie {
  movieId: string;
  userId: string;
}

// map((movies: any) => movies.find(movie => movie.objectId === objectId))

const FavouriteMovies: React.FC = () => {

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [favMovies, setFavMovies] = useState<IFavouriteMovie[]>([]);

  // const movie:IFavouriteMovie[] = moviesapi.filter(movie => movie.objectId === favMovies.movieId);

  useEffect(() => {
    if(signedIn) {
      let userId:string | null = localStorage.getItem('userId');
      const data: {} = { userId, token };
      const favMov = getFavourites(data);
    }
    // setMovies(loadData);
    
    // console.log(response);
    // setLoading(true);
   // setFavMovies(response);
   // setLoading(false);
    // getFavourites();
  }, []);

  

  const handleDelFav = async() => {
    // setLoading(true);
    const userId = localStorage.getItem("userId");  
    const token = localStorage.getItem("token");
    const data: {
      token: string | null;
      userId: string | null;
    } = {
      token,
      userId
    };
    const response = await delFavourites(data);
    // setFavMovies(response);
     // setLoading(false);
  }

  return (
    <>
      
    </>
  )
};

export default FavouriteMovies;
