import { coreApi } from "..";

export const getUser = () => {
  return coreApi.get(`/user/me`);
};

export const loginUser = (email, password) => {
  const param = {
    email: email,
    password: password,
  };
  return coreApi.post("/auth/login", param);
};

export const registerUser = (email, phone_number, password) => {
  const param = {
    email: email,
    phone_number: phone_number,
    password: password,
  };
  return coreApi.post("/auth/register", param);
};
