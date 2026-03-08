import * as React from "react";
import { Link } from "react-router-dom";
import Create from "./Create";

export default function Dashboard() {
  const [activeTab, setActiveTab] = React.useState("create");

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#313338",
      fontFamily: "'Nunito', sans-serif",
    }}>
      {/* Top Bar */}
      <div style={{
        backgroundColor: "#2b2d31",
        borderBottom: "1px solid #3f4147",
        padding: "12px 24px",
        display: "flex",
        alignItems: "center",
        gap: 16,
      }}>
        <Link to="/">
          <button style={{
            backgroundColor: "#4f545c",
            color: "#fff",
            border: "none",
            borderRadius: "3px",
            padding: "8px 16px",
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "'Nunito', sans-serif",
          }}
          onMouseEnter={e => e.target.style.backgroundColor = "#686d73"}
          onMouseLeave={e => e.target.style.backgroundColor = "#4f545c"}
          >
            ← Home
          </button>
        </Link>
        <span style={{ color: "#f2f3f5", fontWeight: 800, fontSize: "16px" }}>
          🏢 Employer Dashboard
        </span>
      </div>

      {/* Tab Bar */}
      <div style={{
        backgroundColor: "#2b2d31",
        borderBottom: "1px solid #3f4147",
        padding: "0 24px",
        display: "flex",
        gap: 4,
      }}>
        {[{ key: "create", label: "📝 Create Post" }].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              background: "none",
              border: "none",
              borderBottom: activeTab === tab.key ? "2px solid #5865f2" : "2px solid transparent",
              color: activeTab === tab.key ? "#f2f3f5" : "#80848e",
              padding: "12px 16px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "'Nunito', sans-serif",
              transition: "color 0.17s ease",
            }}
            onMouseEnter={e => { if (activeTab !== tab.key) e.target.style.color = "#b5bac1"; }}
            onMouseLeave={e => { if (activeTab !== tab.key) e.target.style.color = "#80848e"; }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={{ padding: "24px", maxWidth: 800, margin: "0 auto" }}>
        {activeTab === "create" && <Create />}
      </div>
    </div>
  );
}
