import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Navigation.scss';
import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const handleSignOut = async () => {
    await signOutUser();
  };
  return (
    <>
      <nav className="navigation">
        <Link to="/" className="logo-container">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            SHOP
          </Link>
          {currentUser ? (
            <span
              role="link"
              tabIndex={0}
              className="nav-link"
              onClick={handleSignOut}
              onKeyDown={handleSignOut}
            >
              SIGN OUT
            </span>
          ) : (
            <Link to="/auth">SIGN IN</Link>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
