import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';
import selectCategories from '../../store/category/categorySelector';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategories);
  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={uuidv4()} title={title} products={products} />;
      })}
    </div>
  );
};

export default CategoriesPreview;
