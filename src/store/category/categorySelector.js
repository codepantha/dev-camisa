const selectCategoriesMap = (state) => state.categoryReducer.categories.reduce((acc, category) => {
  const { title, items } = category;
  acc[title.toLowerCase()] = items;
  return acc;
}, {});

export default selectCategoriesMap;
