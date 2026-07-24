import { Text } from "@fluentui/react-components";
import { useMsal } from "@azure/msal-react";
import LoginButton from "../components/LoginButton";

function MainLayout() {
  const { accounts } = useMsal();

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: "#f5f5f5",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "260px",
          background: "#004b87",
          color: "white",
          padding: "20px",
        }}
      >
        <Text
          size={600}
          weight="bold"
          style={{ color: "white" }}
        >
          University of Ha'il
        </Text>

        <br />

        <Text style={{ color: "white" }}>
          Facilities Readiness
        </Text>
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          size={800}
          weight="bold"
        >
          Dashboard
        </Text>

        <br />

        {accounts.length === 0 ? (
          <>
            <Text size={500}>
              الرجاء تسجيل الدخول بحساب جامعة حائل
            </Text>

            <br />
            <br />

            <LoginButton />
          </>
        ) : (
          <>
            <Text size={500}>
              مرحباً
            </Text>

            <br />

            <Text
              size={700}
              weight="bold"
            >
              {accounts[0].name}
            </Text>

            <br />

            <Text>
              تم تسجيل الدخول بنجاح إلى نظام جاهزية المرافق
            </Text>
          </>
        )}
      </div>
    </div>
  );
}

export default MainLayout;
