import { Button } from "@fluentui/react-components";
import { useMsal } from "@azure/msal-react";
import { InteractionStatus } from "@azure/msal-browser";
import { loginRequest } from "../authConfig";

function LoginButton() {
  const { instance, inProgress } = useMsal();

  const handleLogin = async () => {
    if (inProgress !== InteractionStatus.None) {
      return;
    }

    try {
      await instance.loginRedirect(loginRequest);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <Button
      appearance="primary"
      size="large"
      disabled={inProgress !== InteractionStatus.None}
      onClick={handleLogin}
    >
      {inProgress !== InteractionStatus.None
        ? "جارٍ تسجيل الدخول..."
        : "تسجيل الدخول بحساب جامعة حائل"}
    </Button>
  );
}

export default LoginButton;
