import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';
import { CategoriesContext } from '../../contexts/categories.context';
import './Shop.styles.scss';

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={uuidv4()} title={title} products={products} />;
      })}
    </div>
  );
};

export default Shop;
