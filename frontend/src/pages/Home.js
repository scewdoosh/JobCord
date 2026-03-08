import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#313338",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Nunito', sans-serif",
    }}>
      {/* Logo / Icon */}
      <div style={{
        width: 80,
        height: 80,
        backgroundColor: "#5865f2",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 24,
        fontSize: 36,
        boxShadow: "0 8px 24px rgba(88,101,242,0.4)"
      }}>
        💼
      </div>

      {/* Title */}
      <h1 style={{
        color: "#f2f3f5",
        fontSize: "2.4rem",
        fontWeight: 800,
        margin: "0 0 8px 0",
        textAlign: "center",
        letterSpacing: "-0.5px"
      }}>
        Job Board
      </h1>

      <p style={{
        color: "#b5bac1",
        fontSize: "1rem",
        marginBottom: 40,
        textAlign: "center",
        maxWidth: 400,
      }}>
        Get hired or hire people for free. Find your next opportunity today.
      </p>

      {/* Buttons */}
      <div style={{ display: "flex", gap: 16 }}>
        <Link to="/employer/dashboard">
          <button style={{
            backgroundColor: "#5865f2",
            color: "#fff",
            border: "none",
            borderRadius: "3px",
            padding: "12px 24px",
            fontSize: "14px",
            fontWeight: 700,
            cursor: "pointer",
            fontFamily: "'Nunito', sans-serif",
            transition: "background-color 0.17s ease, transform 0.1s ease",
            letterSpacing: "0.3px"
          }}
          onMouseEnter={e => { e.target.style.backgroundColor = "#4752c4"; e.target.style.transform = "translateY(-1px)"; }}
          onMouseLeave={e => { e.target.style.backgroundColor = "#5865f2"; e.target.style.transform = "translateY(0)"; }}
          >
            🏢 Hire Talent
          </button>
        </Link>

        <Link to="/employee/feed">
          <button style={{
            backgroundColor: "#23a559",
            color: "#fff",
            border: "none",
            borderRadius: "3px",
            padding: "12px 24px",
            fontSize: "14px",
            fontWeight: 700,
            cursor: "pointer",
            fontFamily: "'Nunito', sans-serif",
            transition: "background-color 0.17s ease, transform 0.1s ease",
            letterSpacing: "0.3px"
          }}
          onMouseEnter={e => { e.target.style.backgroundColor = "#1a8a47"; e.target.style.transform = "translateY(-1px)"; }}
          onMouseLeave={e => { e.target.style.backgroundColor = "#23a559"; e.target.style.transform = "translateY(0)"; }}
          >
            🚀 Get Job Now
          </button>
        </Link>
      </div>

      {/* Footer hint */}
      <p style={{ color: "#4f545c", fontSize: "12px", marginTop: 48 }}>
        Powered by Spring Boot + MongoDB
      </p>
    </div>
  );
};

export default Home;
