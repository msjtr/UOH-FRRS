import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Breadcrumb from "../components/layout/Breadcrumb";

import "../assets/styles/layout.css";

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="app-layout">

      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
      />

      <div className="app-main">

        <Header
          collapsed={collapsed}
          onToggle={() => setCollapsed(!collapsed)}
        />

        <div className="app-content">

          <Breadcrumb />

          <main className="page-content">
            <Outlet />
          </main>

        </div>

        <Footer />

      </div>

    </div>
  );
}
