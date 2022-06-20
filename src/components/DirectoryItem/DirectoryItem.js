import PropTypes from 'prop-types';
// import './DirectoryItem.styles.jsx';
import { DirectoryItemContainer, Body, BackgroundImage } from './DirectoryItem.styles';

const DirectoryItem = ({ category: { title, imageUrl } }) => (
  <DirectoryItemContainer>
    <BackgroundImage imageUrl={imageUrl} />
    <Body>
      <h1>{title}</h1>
      <p>Shop Now</p>
    </Body>
  </DirectoryItemContainer>
);

DirectoryItem.propTypes = {
  category: PropTypes.instanceOf(Object).isRequired,
};

export default DirectoryItem;
