import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import MoviesList from './components/Movies/MoviesList';
import Movie from './components/Movies/Movie';
// import FavouriteMovies from './components/Movies/FavouriteMovies';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import NotFound from './components/NotFound';
import './App.css';


const App: React.FC = () => {

  const [isLoggedIn, setIsLoggedIn] = useState<string | any>('');
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token !== null) {
      setIsLoggedIn(token);
    }
  }, [isLoggedIn]);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className='container main-content'>
        <Switch>
          <Route exact path="/" component={MoviesList} />
          <Route path="/movies/:movieId" component={Movie} />
          <Route path="/movies" component={MoviesList} />
          {/* <Route path="/favourites" component={FavouriteMovies} /> */}
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
