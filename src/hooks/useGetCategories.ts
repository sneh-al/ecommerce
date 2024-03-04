import { useQuery } from "@tanstack/react-query";
import api from "../api/fakeStoreAPI";
import { useBoundStore } from "../store/store";

async function getCategories() {
  const { data } = await api.get(`/products/categories`);
  return data;
}
const useGetCategories = () => {
  const addCategories = useBoundStore((state) => state.addCategories);
  const categories = useBoundStore((state) => state.categories);

  const { data: fetchedData, isLoading, isError } =  useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    enabled : !categories
  });
  if (!isLoading && !isError && fetchedData && !categories) {
    addCategories(fetchedData.slice(0,5));
  }
  return { isLoading, isError };

};

export default useGetCategories;
