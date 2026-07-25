import { useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const { pathname } = useLocation();

  const current =
    pathname === "/"
      ? "لوحة التحكم"
      : pathname
          .replace("/", "")
          .replace(/-/g, " ");

  return (
    <div
      style={{
        marginBottom: "20px",
        color: "#666",
        fontSize: "14px",
        fontWeight: 500,
      }}
    >
      {current}
    </div>
  );
}
