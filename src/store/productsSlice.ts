

export const createProductsSlice = (set) => ({
    products: null,
    addProducts: (prods) => {
       set(() => ({ products: prods }))
    },
  });
  