import { useQuery } from "@tanstack/react-query";
import api from "../api/fakeStoreAPI";

async function getProducts(limit) {
  const { data } = await api.get(`/products?limit=${limit}`);
  return data;
}
const useGetProducts = (limit ) => useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(limit),
  });


export default useGetProducts;
