import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";

import App from "./App";
import { msalConfig } from "./authConfig";

const msalInstance = new PublicClientApplication(msalConfig);

async function bootstrap() {
  // تهيئة MSAL
  await msalInstance.initialize();

  // معالجة الرجوع من تسجيل الدخول (Redirect) إن وجد
  await msalInstance.handleRedirectPromise();

  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <MsalProvider instance={msalInstance}>
        <FluentProvider theme={webLightTheme}>
          <App />
        </FluentProvider>
      </MsalProvider>
    </StrictMode>
  );
}

bootstrap().catch((error) => {
  console.error("MSAL Initialization Error:", error);
});
