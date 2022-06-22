import axios from "axios";

export const login = (user) => {
  return axios.post("/login", user).then((res) => res);
};

export const register = (user) => {
  return axios.post("/register", user).then((res) => {
    return res;
  });
};
