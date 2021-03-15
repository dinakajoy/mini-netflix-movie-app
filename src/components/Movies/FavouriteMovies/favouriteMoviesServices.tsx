// const favMovieUrl = 'https://mini-netflix-by-joy.herokuapp.com/movie';
const favMovieUrl = 'http://localhost:5000/movie';

export const getFavourites = async (data:{}) => {
  const res = await fetch(`${favMovieUrl}/${data}`, {
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

export const postFavourites = async (data:{}) => {
  const res = await fetch(`${favMovieUrl}/${data}`, {
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

export const delFavourites = async (data:{}) => {
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
