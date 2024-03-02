import { useQuery } from "@tanstack/react-query";
import api from "../api/PlatziFakeStoreAPI";

async function getProducts() {
  const { data } = await api.get(`/products?offset=0&limit=10`);
  return data;
}
const useGetProducts = () => {

  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
   
  });
};

export default useGetProducts;
