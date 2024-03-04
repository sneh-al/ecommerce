

export const createCategoriesSlice = (set) => ({
  categories: null,
  addCategories: (cat) => {
     set(() => ({ categories: cat }))
  },
});
