import { NavLink } from "react-router-dom";
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

import logo from "../../assets/images/college-logo.png";

const menuItems = [
  {
    title: "لوحة التحكم",
    path: "/",
    icon: Home24Regular,
  },
  {
    title: "المباني",
    path: "/buildings",
    icon: Building24Regular,
  },
  {
    title: "الأدوار",
    path: "/floors",
    icon: BuildingMultiple24Regular,
  },
  {
    title: "القاعات",
    path: "/rooms",
    icon: Door24Regular,
  },
  {
    title: "نماذج الجاهزية",
    path: "/readiness",
    icon: ClipboardTask24Regular,
  },
  {
    title: "المهام",
    path: "/tasks",
    icon: Clipboard24Regular,
  },
  {
    title: "التقارير",
    path: "/reports",
    icon: Document24Regular,
  },
  {
    title: "الملف الشخصي",
    path: "/profile",
    icon: Person24Regular,
  },
  {
    title: "الإعدادات",
    path: "/settings",
    icon: Settings24Regular,
  },
];

export default function Sidebar() {
  return (
    <aside
      style={{
        width: 280,
        background: "#ffffff",
        borderLeft: "1px solid #E5E7EB",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 2px 10px rgba(0,0,0,.06)",
      }}
    >
      {/* Logo */}

      <div
        style={{
          padding: 24,
          textAlign: "center",
          borderBottom: "1px solid #eee",
        }}
      >
        <img
          src={logo}
          alt="College Logo"
          style={{
            width: 95,
            marginBottom: 12,
          }}
        />

        <h2
          style={{
            margin: 0,
            fontSize: 20,
            color: "#0F172A",
          }}
        >
          FRRS
        </h2>

        <div
          style={{
            marginTop: 6,
            fontSize: 13,
            color: "#64748B",
          }}
        >
          نظام جاهزية المرافق
        </div>
      </div>

      {/* Menu */}

      <nav
        style={{
          padding: 16,
          display: "flex",
          flexDirection: "column",
          gap: 8,
          flex: 1,
        }}
      >
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              style={({ isActive }) => ({
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "13px 16px",
                borderRadius: 10,
                textDecoration: "none",
                transition: ".2s",
                background: isActive ? "#0F6CBD" : "transparent",
                color: isActive ? "#fff" : "#334155",
                fontWeight: isActive ? 600 : 500,
              })}
            >
              <Icon fontSize={22} />

              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}

      <div
        style={{
          padding: 18,
          borderTop: "1px solid #eee",
          fontSize: 12,
          color: "#64748B",
          textAlign: "center",
        }}
      >
        University of Ha'il
        <br />
        Facilities Readiness Reporting System
      </div>
    </aside>
  );
}
