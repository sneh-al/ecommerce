import { useQuery } from "@tanstack/react-query";
import api from "../api/fakeStoreAPI";
import { useBoundStore } from "../store/store";

async function getCategories() {
  const { data } = await api.get(`/products/categories`);
  return data;
}
const useGetCategories = () =>  useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,

  });



export default useGetCategories;
