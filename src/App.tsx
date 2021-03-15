import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import MoviesList from './components/Movies/MoviesList';
import Movie from './components/Movies/Movie';
import FavouriteMovies from './components/Movies/FavouriteMovies';
import Signup from './components/auth/Signup';
import Signin from './components/auth/Signin';
import NotFound from './components/NotFound';
import './App.css';


const App: React.FC = () => {

  const [token, setToken] = useState<string>('');
  const [signedIn, setSignedIn] = useState<boolean>(false);
  
  useEffect(() => {
    const getToken:string | null = localStorage.getItem("token");
    if(getToken !== null) {
      setToken(token);
      setSignedIn(true);
    }
  }, [token, signedIn]);

  const handleLogout = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    localStorage.clear();
    setToken('');
    setSignedIn(false);
  }

  const isLoggedIn = (token: string, userId: string ): void => {
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    setToken(token);
    setSignedIn(true);
  }

  return (
    <>
      <Header signedIn={signedIn} handleLogout={handleLogout} />
      <main className='container main-content'>
        <Switch>
          <Route exact path="/"><MoviesList token={token} signedIn={signedIn} /></Route>
          <Route path="/movies/:movieId"><Movie token={token} signedIn={signedIn} /></Route>
          <Route path="/favourites" component={FavouriteMovies} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin"><Signin token={token} isLoggedIn={isLoggedIn} /></Route>
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
