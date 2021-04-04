import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
// import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from './index';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

describe('App component', () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <App />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders Header component", () => {
    const signedIn: boolean = false;
    const handleLogout = (): void => {
      localStorage.clear();
    };
    act(() => {
      render(<Router><Header signedIn={signedIn} handleLogout={handleLogout} /></Router>);
    });
  });

  it("renders Footer component", () => {
    act(() => {
      render(<Footer />);
    });
  });
});
