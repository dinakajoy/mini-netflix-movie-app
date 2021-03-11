import { NavLink } from 'react-router-dom';

const Header: React.FC  = () => {
  return (
    <header className="header">
        <nav className="nav">
          <NavLink exact to="/" className="logo">
            <img src={`${process.env.PUBLIC_URL}/images/logo.gif`} alt="Mini-Netflix" />
          </NavLink>

          <ul className="left">
            <li><NavLink exact to="/movies" activeClassName="active-navlink">MOVIES</NavLink></li>
            <li><NavLink exact to="/favourites" activeClassName="active-navlink">MY FAVOURITES</NavLink></li>
          </ul>

            {/* <div class="right" *ngIf="!auth.loggedIn"> */}
          <div className="right">
            <NavLink className="btn" exact to="/signin">SIGN IN</NavLink>
            {/* <div class="right" *ngIf="auth.loggedIn"> */}
            
            {/* <a className="btn" onClick="logout()">SIGN OUT</a> */}
              {/* <a class="btn" (click)="logout()">SIGN OUT</a> */}
          </div>
        </nav>
      </header>
  )
};

export default Header;