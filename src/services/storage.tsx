const AUTH_KEY = "@my-app:isLoggedIn";

export const saveAuth = (value: boolean) => {
  localStorage.setItem(AUTH_KEY, String(value));
};

export const getAuth = () => {
  return localStorage.getItem(AUTH_KEY) === "true";
};

export const removeAuth = () => {
  localStorage.removeItem(AUTH_KEY);
};
