import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  moviesPerPage: number;
  totalMovies: number;
  paginate: Function;
}

const Pagination = ({ moviesPerPage, totalMovies, paginate }:Props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <i className='fa fa-angle-double-left'></i>
      {pageNumbers.map(number => (
        // <button key={number} onClick={() => paginate(number)} className='page-link'>
        //   {number}
        // </button>
        <NavLink key={number} to='/' onClick={() => paginate(number)} className='page-link' activeClassName="active-navlink">
        {number}
      </NavLink>
      ))}
      <i className='fa fa-angle-double-right'></i>
    </div>
  );
};

export default Pagination;