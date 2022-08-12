import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropdown from '../../components/CartDropdown/CartDropdown';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import NavigationComponent, { LogoContainer, NavLinks, NavLink } from './Navigation.styles';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import selectCurrentUser from '../../store/user/userSelector';
import { selectIsCartOpen } from '../../store/cart/cartSelector';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const handleSignOut = async () => {
    await signOutUser();
  };

  return (
    <>
      <NavigationComponent>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop" className="nav-link">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink
              as="span"
              role="link"
              tabIndex={0}
              className="nav-link"
              onClick={handleSignOut}
              onKeyDown={handleSignOut}
            >
              SIGN OUT
            </NavLink>
          ) : (
            <Link to="/auth">SIGN IN</Link>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationComponent>
      <Outlet />
    </>
  );
};

export default Navigation;
