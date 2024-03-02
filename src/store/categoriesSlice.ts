

export const createCategoriesSlice = (set) => ({
  categories: [],
  addCategories: (cat) => {
    console.log('Adding category:', cat);
    return set(() => ({ categories: cat }))
  },
});
