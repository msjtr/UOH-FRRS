import { Text } from "@fluentui/react-components";

function MainLayout() {
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
        }}
      >
        <Text
          size={800}
          weight="bold"
        >
          Dashboard
        </Text>

        <br />

        <Text>
          Welcome to Facilities Readiness &
          Reporting System
        </Text>
      </div>
    </div>
  );
}

export default MainLayout;