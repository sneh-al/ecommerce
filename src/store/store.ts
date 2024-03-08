import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createCategoriesSlice } from "./categoriesSlice";
import { createProductsSlice } from "./productsSlice";
import { createUserSlice } from "./userSlice";
import { createCartSlice } from "./cartSlice";

export const useBoundStore = create(
 persist(
  (...a) => ({
    ...createCategoriesSlice(...a),
    ...createProductsSlice(...a),
    ...createUserSlice(...a),
    ...createCartSlice(...a),
  }),
  {name: "fake store"}
 )
);
