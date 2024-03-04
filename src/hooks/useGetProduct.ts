import { useQuery } from "@tanstack/react-query";
import api from "../api/fakeStoreAPI";
import { useBoundStore } from "../store/store";

async function getProducts(limit) {
  const { data } = await api.get(`/products?limit=${limit}`);
  return data;
}
const useGetProducts = (limit) => {
  const addProducts = useBoundStore((state) => state.addProducts);

  const {
    data: fetchedData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(limit),
  });

  addProducts(fetchedData);

  return { isLoading, isError };
};

export default useGetProducts;
