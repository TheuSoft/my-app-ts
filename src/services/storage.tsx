const AUTH_KEY = "@my-app:isLoggedIn";
const USER_KEY = "@my-app:user";

export interface StoredUser {
  name: string;
  email: string;
  id: string;
}

export const saveAuth = (value: boolean) => {
  localStorage.setItem(AUTH_KEY, String(value));
};

export const getAuth = () => {
  return localStorage.getItem(AUTH_KEY) === "true";
};

export const saveUser = (user: StoredUser) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const getUser = (): StoredUser | null => {
  const user = localStorage.getItem(USER_KEY);

  if (!user) {
    return null;
  }

  try {
    return JSON.parse(user) as StoredUser;
  } catch {
    return null;
  }
};

export const removeAuth = () => {
  localStorage.removeItem(AUTH_KEY);
};
