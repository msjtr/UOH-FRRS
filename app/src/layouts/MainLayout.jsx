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
  TaskListSquare24Regular,
  DocumentChart24Regular,
  Person24Regular,
  Settings24Regular,
} from "@fluentui/react-icons";

import { NavLink, Outlet } from "react-router-dom";
import { useMsal } from "@azure/msal-react";

function MainLayout() {
  const { accounts } = useMsal();

  const menu = [
    { title: "لوحة التحكم", icon: <Home24Regular />, path: "/" },
    { title: "المباني", icon: <Building24Regular />, path: "/buildings" },
    { title: "الأدوار", icon: <BuildingMultiple24Regular />, path: "/floors" },
    { title: "القاعات", icon: <Door24Regular />, path: "/rooms" },
    { title: "الجاهزية", icon: <ClipboardTask24Regular />, path: "/readiness" },
    { title: "المهام", icon: <TaskListSquare24Regular />, path: "/tasks" },
    { title: "التقارير", icon: <DocumentChart24Regular />, path: "/reports" },
    { title: "الملف الشخصي", icon: <Person24Regular />, path: "/profile" },
    { title: "الإعدادات", icon: <Settings24Regular />, path: "/settings" },
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
        {/* Sidebar */}

        <aside
          style={{
            width: 280,
            background: "#ffffff",
            borderLeft: "1px solid #ddd",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              padding: 25,
              fontSize: 22,
              fontWeight: "bold",
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
                style={({ isActive }) => ({
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  textDecoration: "none",
                  padding: "12px 15px",
                  borderRadius: 10,
                  color: isActive ? "#ffffff" : "#333",
                  background: isActive ? "#0f6cbd" : "transparent",
                })}
              >
                {item.icon}
                {item.title}
              </NavLink>
            ))}
          </div>
        </aside>

        {/* Main */}

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header */}

          <header
            style={{
              height: 70,
              borderBottom: "1px solid #ddd",
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
              <span>
                {accounts.length > 0 ? accounts[0].name : ""}
              </span>

              <Button appearance="secondary">
                تسجيل الخروج
              </Button>
            </div>
          </header>

          {/* Content */}

          <main
            style={{
              flex: 1,
              padding: 30,
              background: "#f5f6fa",
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
