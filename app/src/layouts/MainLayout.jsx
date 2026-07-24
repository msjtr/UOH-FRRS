import { Outlet } from "react-router-dom";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function MainLayout() {
  return (
    <FluentProvider theme={webLightTheme}>
      <div
        style={{
          display: "flex",
          direction: "rtl",
          height: "100vh",
          background: "#F5F7FA",
        }}
      >
        {/* القائمة اليمنى */}
        <Sidebar />

        {/* المحتوى */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <Header />

          <main
            style={{
              flex: 1,
              padding: 30,
              overflowY: "auto",
            }}
          >
            <Outlet />
          </main>

          <Footer />
        </div>
      </div>
    </FluentProvider>
  );
}
