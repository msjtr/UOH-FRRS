import { useState } from "react";
import { Button } from "@fluentui/react-components";
import { useMsal } from "@azure/msal-react";
import { InteractionStatus } from "@azure/msal-browser";
import { loginRequest } from "../authConfig";

function LoginButton() {
  const { instance, inProgress } = useMsal();
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    // منع بدء عملية جديدة إذا كانت هناك عملية مصادقة جارية
    if (loading || inProgress !== InteractionStatus.None) {
      return;
    }

    setLoading(true);

    try {
      await instance.loginPopup(loginRequest);
    } catch (error) {
      console.error("Login Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      appearance="primary"
      size="large"
      onClick={handleLogin}
      disabled={loading || inProgress !== InteractionStatus.None}
    >
      {loading || inProgress !== InteractionStatus.None
        ? "جارٍ تسجيل الدخول..."
        : "تسجيل الدخول بحساب جامعة حائل"}
    </Button>
  );
}

export default LoginButton;
