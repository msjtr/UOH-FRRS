export const msalConfig = {
  auth: {
    clientId: "bd9ad99a-c81a-44bf-aaf9-0a8f9584ab8a",
    authority: "https://login.microsoftonline.com/514faa19-8c84-4cef-8ae9-2b9dbce933cd",
    redirectUri: "https://uoh-frrs.onrender.com",
    postLogoutRedirectUri: "https://uoh-frrs.onrender.com",
    navigateToLoginRequestUrl: false,
  },

  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
};

export const loginRequest = {
  scopes: [
    "openid",
    "profile",
    "email",
    "User.Read",
  ],
};
