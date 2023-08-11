// const favMovieUrl = 'https://mini-netflix-api.onrender.com/movie';
const favMovieUrl = 'https://mini-netflix-api.onrender.com/movie';

export const getFavouriteMovie = async (data:any) => {
  try {
    const res = await fetch(`${favMovieUrl}/${data.movieId}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const response = await res.json();
    return response;
  } catch(error) {
    console.log(error);
  }
};

export const getFavouriteMovies = async (data:any) => {
  try {
    const res = await fetch(`${favMovieUrl}/all/${data.userId}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const response = await res.json();
    return response;
  } catch(error) {
    console.log(error);
  }
};

export const postFavouriteMovie = async (data:{}) => {
  const res = await fetch(`${favMovieUrl}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const response = await res.json();
  return response;
};

export const deleteFavouriteMovie = async (data:any) => {
  const res = await fetch(`${favMovieUrl}/${data.movieId}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const response = await res.json();
  return response;
};
