import { createAuth0Client } from "@auth0/auth0-spa-js";
import { auth0Config } from "../config/auth0";

let auth0Client: any = null;

export const getAuth0Client = async () => {
  if (!auth0Client) {
    auth0Client = await createAuth0Client({
      domain: auth0Config.domain,
      clientId: auth0Config.clientId,
      authorizationParams: {
        redirect_uri: auth0Config.redirectUri,
        audience: auth0Config.audience,
      },
    });
  }
  return auth0Client;
};

export const login = async () => {
  const client = await getAuth0Client();
  await client.loginWithRedirect();
};

export const logout = async () => {
  const client = await getAuth0Client();
  await client.logout({
    logoutParams: {
      returnTo: window.location.origin,
    },
  });
  localStorage.removeItem("auth0:isAuthenticated");
  localStorage.removeItem("auth0:user");
  window.location.href = "/";
};

export const handleRedirectCallback = async () => {
  const client = await getAuth0Client();

  if (window.location.search.includes("code=")) {
    try {
      await client.handleRedirectCallback();
      const isAuthenticated = await client.isAuthenticated();

      if (isAuthenticated) {
        const user = await client.getUser();
        localStorage.setItem("auth0:isAuthenticated", "true");
        localStorage.setItem("auth0:user", JSON.stringify(user));
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        );
        return user;
      }
    } catch (error) {
      console.error("Error handling redirect callback:", error);
    }
  }

  return null;
};
