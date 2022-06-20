import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { DirectoryItemContainer, Body, BackgroundImage } from './DirectoryItem.styles';

const DirectoryItem = ({ category: { title, imageUrl, route } }) => {
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h1>{title}</h1>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

DirectoryItem.propTypes = {
  category: PropTypes.instanceOf(Object).isRequired,
};

export default DirectoryItem;
