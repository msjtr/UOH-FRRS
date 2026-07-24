import { Button } from "@fluentui/react-components";
import { useMsal } from "@azure/msal-react";

export default function Header() {
  const { accounts, instance } = useMsal();

  return (
    <header
      style={{
        height: 70,
        background: "#fff",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
      }}
    >
      <h2 style={{ margin: 0 }}>نظام جاهزية المرافق</h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <span>{accounts[0]?.name}</span>

        <Button
          appearance="secondary"
          onClick={() => instance.logoutRedirect()}
        >
          تسجيل الخروج
        </Button>
      </div>
    </header>
  );
}
