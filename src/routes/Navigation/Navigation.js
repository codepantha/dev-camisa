import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Navigation.scss';

const Navigation = () => (
  <>
    <nav className="navigation">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="nav-links-container">
        <Link to="/shop" className="nav-link">
          SHOP
        </Link>
        <Link to="/sign-in">
          Sign in
        </Link>
      </div>
    </nav>
    <Outlet />
  </>
);

export default Navigation;
