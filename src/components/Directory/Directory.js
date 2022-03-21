import PropTypes from 'prop-types';
import CategoryItem from '../CategoryItem/CategoryItem';
import './Directory.styles.scss';

const Directory = ({ categories }) => (
  <div className="directory-container">
    {categories.map((category) => (
      <CategoryItem key={category.id} category={category} />
    ))}
  </div>
);

Directory.propTypes = {
  categories: PropTypes.instanceOf(Object).isRequired,
};

export default Directory;
