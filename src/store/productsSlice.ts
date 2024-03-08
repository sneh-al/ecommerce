

export const createProductsSlice = (set) => ({
    products: null,
    addProducts: (prods) => {
       set(() => ({ products: prods }))
    },
    filterProducts: (selectedCategories) =>   {
      set((state) => ({ products: state.products?.filter(product => product.category ===selectedCategories ) }))
   }
  });
  