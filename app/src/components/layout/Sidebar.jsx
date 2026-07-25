import {
  Home24Regular,
  Building24Regular,
  BuildingMultiple24Regular,
  Door24Regular,
  ClipboardTask24Regular,
  Document24Regular,
  Settings24Regular,
  Person24Regular,
  Navigation24Regular,
  PanelLeft24Regular,
} from "@fluentui/react-icons";

import { NavLink } from "react-router-dom";

import "../../assets/styles/sidebar.css";

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
    title: "الجاهزية",
    path: "/readiness",
    icon: <ClipboardTask24Regular />,
  },
  {
    title: "التقارير",
    path: "/reports",
    icon: <Document24Regular />,
  },
  {
    title: "الإعدادات",
    path: "/settings",
    icon: <Settings24Regular />,
  },
  {
    title: "الملف الشخصي",
    path: "/profile",
    icon: <Person24Regular />,
  },
];

export default function Sidebar({ collapsed, onToggle }) {
  return (
    <aside className={collapsed ? "sidebar collapsed" : "sidebar"}>
      <div className="sidebar-header">
        {!collapsed && <div className="logo">FRRS</div>}

        <button
          className="collapse-btn"
          onClick={onToggle}
          type="button"
        >
          {collapsed ? (
            <Navigation24Regular />
          ) : (
            <PanelLeft24Regular />
          )}
        </button>
      </div>

      <nav className="sidebar-menu">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            <span className="menu-icon">{item.icon}</span>

            {!collapsed && (
              <span className="menu-title">
                {item.title}
              </span>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
