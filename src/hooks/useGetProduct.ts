import { useQuery } from "@tanstack/react-query";
import api from "../api/fakeStoreAPI";

async function getProducts(id: string) {
  const { data } = await api.get(`/products/${id}`);
  return data;
}
const useGetProduct = (id : string ) => useQuery({
    queryKey: ["product",id],
    queryFn: () => getProducts(id),
  });


export default useGetProduct;
