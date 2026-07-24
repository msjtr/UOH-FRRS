import { Button } from "@fluentui/react-components";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";

function LoginButton() {
  const { instance } = useMsal();

  const handleLogin = async () => {
    try {
      await instance.loginPopup(loginRequest);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <Button
      appearance="primary"
      size="large"
      onClick={handleLogin}
    >
      تسجيل الدخول بحساب جامعة حائل
    </Button>
  );
}

export default LoginButton;
