import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createCategoriesSlice } from "./categoriesSlice";

export const useBoundStore = create(
  (...a) => ({
    ...createCategoriesSlice(...a),
  })
);
