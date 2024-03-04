import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createCategoriesSlice } from "./categoriesSlice";
import { createProductsSlice } from "./productsSlice";

export const useBoundStore = create(
  (...a) => ({
    ...createCategoriesSlice(...a),
    ...createProductsSlice(...a)
  })
);
