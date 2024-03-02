import { useQuery } from "@tanstack/react-query";
import api from "../api/PlatziFakeStoreAPI";
import { useBoundStore } from "../store/store";

async function getCategories() {
  const { data } = await api.get(`/categories`);
  return data;
}
const useGetCategories = () => {
  const addCategories = useBoundStore((state) => state.addCategories);

  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    onSuccess: (getCategories) => {
      addCategories(getCategories);
    },
  });
};

export default useGetCategories;
