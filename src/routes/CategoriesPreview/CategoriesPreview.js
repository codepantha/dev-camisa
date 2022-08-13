import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '../../store/category/categorySelector';
import Spinner from '../../components/spinner/Spinner';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <div className="shop-container">
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={uuidv4()} title={title} products={products} />
          );
        })
      )}
    </div>
  );
};

export default CategoriesPreview;
