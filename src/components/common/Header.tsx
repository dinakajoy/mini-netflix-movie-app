import { NavLink } from 'react-router-dom';

type Props = {
  signedIn: boolean;
  handleLogout: Function;
}

const Header: React.FC<Props> = ({ signedIn, handleLogout }: Props) => {
  return (
    <header className="header">
      <nav className="nav">
        <NavLink exact to="/" className="logo">
          <img src={`${process.env.PUBLIC_URL}/images/logo.gif`} alt="Mini-Netflix" />
        </NavLink>

        <ul className="left">
          <li><NavLink to="/" activeClassName="active-navlink">MOVIES</NavLink></li>
          <li><NavLink to="/favourites" activeClassName="active-navlink">MY FAVOURITES</NavLink></li>
        </ul>

        <div className="right">
          { !signedIn && <NavLink className="btn" exact to="/signin">SIGN IN</NavLink> }
          { signedIn && <button className="btn" onClick={(event: React.MouseEvent<HTMLElement>) => handleLogout(event)}>SIGN OUT</button> }
        </div>
      </nav>
    </header>
  )
};

export default Header;