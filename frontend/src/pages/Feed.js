import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Feed = () => {
  const [query, setQuery] = useState("");
  const [post, setPost] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`http://localhost:8080/post/${query}`);
      setPost(response.data);
    };
    const fetchInitialPosts = async () => {
      const response = await axios.get(`http://localhost:8080/posts`);
      setPost(response.data);
    };
    if (query.length === 0) fetchInitialPosts();
    if (query.length > 2) fetchPosts();
  }, [query]);

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
        position: "sticky",
        top: 0,
        zIndex: 100,
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
          💼 Job Feed
        </span>

        {/* Search */}
        <div style={{
          marginLeft: "auto",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#1e1f22",
          border: "1px solid #3f4147",
          borderRadius: "4px",
          padding: "6px 12px",
          gap: 8,
          width: 280,
        }}>
          <span style={{ color: "#80848e" }}>🔍</span>
          <input
            type="text"
            placeholder="Search jobs..."
            onChange={(e) => setQuery(e.target.value)}
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#f2f3f5",
              fontSize: "14px",
              fontFamily: "'Nunito', sans-serif",
              width: "100%",
            }}
          />
        </div>
      </div>

      {/* Cards Grid */}
      <div style={{
        padding: "24px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: 16,
        maxWidth: 1200,
        margin: "0 auto",
      }}>
        {post && post.map((p) => (
          <div key={p.id} style={{
            backgroundColor: "#2b2d31",
            border: "1px solid #3f4147",
            borderRadius: "8px",
            padding: "20px",
            transition: "border-color 0.17s ease, transform 0.17s ease, box-shadow 0.17s ease",
            cursor: "default",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = "#5865f2";
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.4)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = "#3f4147";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
          >
            {/* Profile */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <div style={{
                width: 40,
                height: 40,
                backgroundColor: "#5865f2",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                flexShrink: 0,
              }}>
                👤
              </div>
              <h3 style={{
                color: "#f2f3f5",
                margin: 0,
                fontSize: "1rem",
                fontWeight: 700,
              }}>
                {p.profile}
              </h3>
            </div>

            {/* Desc */}
            <p style={{
              color: "#b5bac1",
              fontSize: "13px",
              margin: "0 0 12px 0",
              lineHeight: 1.6,
            }}>
              {p.desc}
            </p>

            {/* Exp */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              backgroundColor: "#1e1f22",
              borderRadius: "3px",
              padding: "4px 10px",
              marginBottom: 12,
            }}>
              <span style={{ color: "#23a559", fontSize: "12px" }}>⏱</span>
              <span style={{ color: "#b5bac1", fontSize: "12px", fontWeight: 600 }}>
                {p.exp} {p.exp === 1 ? "year" : "years"} experience
              </span>
            </div>

            {/* Techs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {p.techs && p.techs.map((s, i) => (
                <span key={i} style={{
                  backgroundColor: "#4f545c",
                  color: "#f2f3f5",
                  borderRadius: "3px",
                  padding: "2px 8px",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.3px",
                }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {!post && (
        <div style={{ textAlign: "center", color: "#80848e", marginTop: 80, fontSize: "14px" }}>
          Loading jobs...
        </div>
      )}
    </div>
  );
};

export default Feed;
