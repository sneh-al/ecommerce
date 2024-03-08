import { useQuery } from "@tanstack/react-query";
import api from "../api/fakeStoreAPI";
import { useBoundStore } from "../store/store";

async function getUsers() {
  const { data } = await api.get(`/users/?limit=3`);
  return data;
}
const useGetUsers = () =>  useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
 



export default useGetUsers;
