export const auth0Config = {
  domain: import.meta.env.PUBLIC_AUTH0_DOMAIN || "",
  clientId: import.meta.env.PUBLIC_AUTH0_CLIENT_ID || "",
  redirectUri: import.meta.env.PUBLIC_AUTH0_REDIRECT_URI || "",
  audience: import.meta.env.PUBLIC_AUTH0_AUDIENCE || "",
};

export const isAuthenticated = () => {
  if (typeof window === "undefined") return false;
  return !!localStorage.getItem("auth0:isAuthenticated");
};

export const getUser = () => {
  if (typeof window === "undefined") return null;
  const userStr = localStorage.getItem("auth0:user");
  return userStr ? JSON.parse(userStr) : null;
};
