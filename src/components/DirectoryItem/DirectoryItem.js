import PropTypes from 'prop-types';
import './DirectoryItem.styles.scss';

const DirectoryItem = ({ category: { title, imageUrl } }) => (
  <div className="category-container">
    <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="category-body-container">
      <h1>{title}</h1>
      <p>Shop Now</p>
    </div>
  </div>
);

DirectoryItem.propTypes = {
  category: PropTypes.instanceOf(Object).isRequired,
};

export default DirectoryItem;
