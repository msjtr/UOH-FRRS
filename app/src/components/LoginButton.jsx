import { useMsal } from "@azure/msal-react";
import { Button } from "@fluentui/react-components";

export default function LoginButton() {
  const { instance } = useMsal();

  const login = async () => {
    try {
      await instance.loginPopup({
        scopes: [
          "User.Read"
        ]
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button
      appearance="primary"
      size="large"
      onClick={login}
    >
      تسجيل الدخول بحساب جامعة حائل
    </Button>
  );
}
