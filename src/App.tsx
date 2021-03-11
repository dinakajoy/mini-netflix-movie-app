import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import MoviesList from './components/Movies/MoviesList'
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className='container main-content'>
        <Switch>
          <Route exact path="/" component={MoviesList} />
          {/* <Route path="/movies/:moviesId" component={SingleComicPage} />
          <Route path="/movies" component={ComicsPage} />
          <Route path="/favourites" component={ComicsIssuePage} />
          <Route component={NotFound} /> */}
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
