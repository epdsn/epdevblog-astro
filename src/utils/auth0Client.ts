import { Auth0Client } from "@auth0/auth0-spa-js";
import { auth0Config } from "../config/auth0";

// Initialize the Auth0 client with more detailed configuration
export const auth0Client = new Auth0Client({
  domain: auth0Config.domain,
  clientId: auth0Config.clientId,
  authorizationParams: {
    redirect_uri: auth0Config.redirectUri,
    audience: auth0Config.audience,
    scope:
      "openid profile email offline_access read:app_metadata read:user_metadata",
  },
  cacheLocation: "localstorage",
  useRefreshTokens: true,
});

// Helper function to check authentication state
export const checkAuthState = async () => {
  try {
    const isAuthenticated = await auth0Client.isAuthenticated();
    const user = await auth0Client.getUser();
    const token = await auth0Client.getTokenSilently();

    console.log("Auth State Check:", {
      isAuthenticated,
      hasUser: !!user,
      hasToken: !!token,
      user,
      token: token ? "Token present" : "No token",
    });

    return { isAuthenticated, user, token };
  } catch (error) {
    console.error("Auth state check failed:", error);
    return { isAuthenticated: false, user: null, token: null };
  }
};

export const login = async () => {
  try {
    console.log("Starting login process...");
    console.log("Auth0 config:", {
      domain: auth0Config.domain,
      clientId: auth0Config.clientId,
      redirectUri: auth0Config.redirectUri,
      audience: auth0Config.audience,
    });

    // Store the current URL to return to after login
    const returnTo =
      window.location.pathname === "/login"
        ? "/admin"
        : window.location.pathname;
    localStorage.setItem("auth0:returnTo", returnTo);

    await auth0Client.loginWithRedirect({
      authorizationParams: {
        redirect_uri: auth0Config.redirectUri,
        audience: auth0Config.audience,
        scope:
          "openid profile email offline_access read:app_metadata read:user_metadata",
      },
      appState: { returnTo },
    });
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    console.log("Starting logout process...");
    await auth0Client.logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  } catch (error) {
    console.error("Logout error:", error);
    throw error;
  }
};

export const handleRedirectCallback = async () => {
  try {
    console.log("Starting redirect callback handling...");
    console.log("Current URL:", window.location.href);

    // Check if we have a code in the URL
    const hasCode = window.location.search.includes("code=");
    console.log("Has code in URL:", hasCode);

    if (!hasCode) {
      throw new Error("No authorization code found in URL");
    }

    // Log the full URL parameters for debugging
    const urlParams = new URLSearchParams(window.location.search);
    console.log("URL Parameters:", Object.fromEntries(urlParams.entries()));

    try {
      // Handle the redirect callback
      const result = await auth0Client.handleRedirectCallback();
      console.log("Raw callback result:", result);

      // Get the app state from the result
      const appState = result?.appState || {};
      console.log("App state from callback:", appState);

      // Check authentication state immediately after callback
      const { isAuthenticated, user, token } = await checkAuthState();
      console.log("Post-callback auth state:", {
        isAuthenticated,
        hasUser: !!user,
        hasToken: !!token,
      });

      if (!isAuthenticated) {
        // Try to get the user profile directly
        try {
          const userProfile = await auth0Client.getUser();
          console.log("Direct user profile fetch:", userProfile);

          if (userProfile) {
            // If we have a user profile, we should be authenticated
            return {
              ...appState,
              returnTo: appState.returnTo || "/admin",
              user: userProfile,
              token,
            };
          }
        } catch (profileError) {
          console.error("Failed to get user profile:", profileError);
        }

        throw new Error("Authentication state not properly set after callback");
      }

      // Get the stored return URL or use the one from appState
      const returnTo =
        appState.returnTo || localStorage.getItem("auth0:returnTo") || "/admin";
      console.log("Returning to:", returnTo);

      return { ...appState, returnTo, user, token };
    } catch (callbackError) {
      console.error("Auth0 callback error details:", {
        error: callbackError,
        message:
          callbackError instanceof Error
            ? callbackError.message
            : "Unknown error",
        stack: callbackError instanceof Error ? callbackError.stack : undefined,
      });
      throw new Error(
        `Auth0 callback failed: ${
          callbackError instanceof Error
            ? callbackError.message
            : "Unknown error"
        }`
      );
    }
  } catch (error) {
    console.error("Redirect callback error:", {
      error,
      message: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
    });
    throw error;
  }
};
