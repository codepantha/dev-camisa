import PropTypes from 'prop-types';
import DirectoryItem from '../DirectoryItem/DirectoryItem';
import './Directory.styles.scss';

const Directory = ({ categories }) => (
  <div className="directory-container">
    {categories.map((category) => (
      <DirectoryItem key={category.id} category={category} />
    ))}
  </div>
);

Directory.propTypes = {
  categories: PropTypes.instanceOf(Object).isRequired,
};

export default Directory;
