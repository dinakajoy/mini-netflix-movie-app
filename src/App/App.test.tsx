import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
// import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from './index';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

// let container: HTMLDivElement | null = null;
// beforeEach(() => {
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

describe('app component', () => {
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

  it("renders header component", () => {
    const signedIn: boolean = false;
    const handleLogout = (): void => {
      localStorage.clear();
    };
    act(() => {
      render(<Router><Header signedIn={signedIn} handleLogout={handleLogout} /></Router>);
    });
  });

  it("renders footer component", () => {
    act(() => {
      render(<Footer />);
    });
  });
});
