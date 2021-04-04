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

  const handlePaginate = (number:number):void => {
    paginate(number);
    window.scrollTo(0, 0);
  }

  return (
    <div className="pagination">
      <i className='fa fa-angle-double-left'></i>
      {pageNumbers.map(number => (
        <NavLink key={number} to='/' onClick={() => handlePaginate(number)} className='page-link' activeClassName="active-navlink">
        {number}
      </NavLink>
      ))}
      <i className='fa fa-angle-double-right'></i>
    </div>
  );
};

export default Pagination;