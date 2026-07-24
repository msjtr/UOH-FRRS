import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";

import App from "./App";
import { msalConfig } from "./authConfig";

const msalInstance = new PublicClientApplication(msalConfig);

async function bootstrap() {
  try {
    // تهيئة MSAL
    await msalInstance.initialize();

    // معالجة الرجوع من تسجيل الدخول
    const response = await msalInstance.handleRedirectPromise();

    // تعيين الحساب النشط
    if (response?.account) {
      msalInstance.setActiveAccount(response.account);
    } else {
      const accounts = msalInstance.getAllAccounts();
      if (accounts.length > 0) {
        msalInstance.setActiveAccount(accounts[0]);
      }
    }

    createRoot(document.getElementById("root")).render(
      <StrictMode>
        <MsalProvider instance={msalInstance}>
          <FluentProvider theme={webLightTheme}>
            <App />
          </FluentProvider>
        </MsalProvider>
      </StrictMode>
    );
  } catch (error) {
    console.error("MSAL Initialization Error:", error);
  }
}

bootstrap();
