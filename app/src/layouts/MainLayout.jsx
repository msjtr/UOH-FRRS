import { Outlet, NavLink } from "react-router-dom";
import { useMsal } from "@azure/msal-react";

import {
  FluentProvider,
  webLightTheme,
  Button,
} from "@fluentui/react-components";

import {
  Home24Regular,
  Building24Regular,
  BuildingMultiple24Regular,
  Door24Regular,
  ClipboardTask24Regular,
  Clipboard24Regular,
  Document24Regular,
  Person24Regular,
  Settings24Regular,
} from "@fluentui/react-icons";

function MainLayout() {
  const { accounts, instance } = useMsal();

  const menu = [
    {
      title: "لوحة التحكم",
      path: "/",
      icon: <Home24Regular />,
    },
    {
      title: "المباني",
      path: "/buildings",
      icon: <Building24Regular />,
    },
    {
      title: "الأدوار",
      path: "/floors",
      icon: <BuildingMultiple24Regular />,
    },
    {
      title: "القاعات",
      path: "/rooms",
      icon: <Door24Regular />,
    },
    {
      title: "نماذج الجاهزية",
      path: "/readiness",
      icon: <ClipboardTask24Regular />,
    },
    {
      title: "المهام",
      path: "/tasks",
      icon: <Clipboard24Regular />,
    },
    {
      title: "التقارير",
      path: "/reports",
      icon: <Document24Regular />,
    },
    {
      title: "الملف الشخصي",
      path: "/profile",
      icon: <Person24Regular />,
    },
    {
      title: "الإعدادات",
      path: "/settings",
      icon: <Settings24Regular />,
    },
  ];

  return (
    <FluentProvider theme={webLightTheme}>
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          height: "100vh",
          direction: "rtl",
        }}
      >
        <aside
          style={{
            width: 280,
            background: "#ffffff",
            borderLeft: "1px solid #e5e5e5",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              padding: 25,
              fontWeight: "bold",
              fontSize: 22,
            }}
          >
            FRRS
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              padding: 15,
            }}
          >
            {menu.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "#fff" : "#333",
                  background: isActive ? "#0f6cbd" : "transparent",
                  padding: "12px 16px",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                })}
              >
                {item.icon}
                {item.title}
              </NavLink>
            ))}
          </div>
        </aside>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <header
            style={{
              height: 70,
              borderBottom: "1px solid #e5e5e5",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 25px",
              background: "#fff",
            }}
          >
            <h3>نظام جاهزية المرافق</h3>

            <div
              style={{
                display: "flex",
                gap: 15,
                alignItems: "center",
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

          <main
            style={{
              flex: 1,
              background: "#f5f6fa",
              padding: 30,
              overflow: "auto",
            }}
          >
            <Outlet />
          </main>
        </div>
      </div>
    </FluentProvider>
  );
}

export default MainLayout;
