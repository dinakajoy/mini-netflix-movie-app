import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound: React.FC = () => {
  return (
    <div className="bg">
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/404.jpg`} alt="Page Not Found" />
      </div>
      <div>
        <h3> Please Check The Link Address. <br />You Are Certainly On The Wrong Page.</h3>
        <img className="sm-img" src={`${process.env.PUBLIC_URL}/images/notFound.png`} alt="Page Not Found" />
        <p>Sorry, No Hard Feelings. <br />
          <Link to="/movies">Check Out Amazing Movies Then</Link>
        </p>
      </div>
    </div>
  )
};

export default NotFound;