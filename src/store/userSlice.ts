import {toast} from "react-hot-toast";
import api from "../api/fakeStoreAPI";

export const createUserSlice = (set) => ({
  user: null,
  addUser: (u) => {
    set(() => ({ user: u }));
  },
fetchUser: async(userData) => {
    try {
        const res = await api.post("auth/login", userData);
        console.log(res)
        set(() => ({
            user: {
              ...userData,
              ...res.data,
            },
          }));
        toast.success("login successful")

    } catch (error) {
        console.log(error)
        toast.error(error?.response?.data)
    }

  },
});
