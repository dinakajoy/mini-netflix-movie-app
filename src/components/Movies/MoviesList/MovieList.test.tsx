import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import MovieList from './index';
import moviesapi from '../../../api/movies.json';
import IMovie from '../MoviesInterface';

describe('movielist component', () => {
  const signedIn: boolean = false;
  let token:string | null = localStorage.getItem('token');
  const loadData = ():IMovie[] => JSON.parse(JSON.stringify(moviesapi));

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render (
      <Router>
        <MovieList token={token} signedIn={signedIn} />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});