import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  isLoggedIn: string
}

const Header: React.FC<Props> = ({ isLoggedIn }: Props) => {

  const [token, setToken] = useState<string | any>('');

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token !== null) {
      setToken(token);
    } else {
      setToken('');
    }
  }, [token]);

  const logout = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    localStorage.clear();
    setToken('');
  }

  return (
    <header className="header">
        <nav className="nav">
          <NavLink exact to="/" className="logo">
            <img src={`${process.env.PUBLIC_URL}/images/logo.gif`} alt="Mini-Netflix" />
          </NavLink>

          <ul className="left">
            <li><NavLink to="/movies" activeClassName="active-navlink">MOVIES</NavLink></li>
            <li><NavLink to="/favourites" activeClassName="active-navlink">MY FAVOURITES</NavLink></li>
          </ul>

            {/* <div class="right" *ngIf="!auth.loggedIn"> */}
          <div className="right">
           { isLoggedIn === '' && <NavLink className="btn" exact to="/signin">SIGN IN</NavLink> }
           { isLoggedIn !== '' && <button className="btn" onClick={(event: React.MouseEvent<HTMLElement>) => logout(event)}>SIGN OUT</button> }
          </div>
        </nav>
      </header>
  )
};

export default Header;