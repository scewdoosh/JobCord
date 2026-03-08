import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initial = { profile: "", exp: 0, techs: [], desc: "" };

const skillSet = [
  { name: "Javascript" },
  { name: "Java" },
  { name: "Python" },
  { name: "Django" },
  { name: "Rust" },
];

const inputStyle = {
  width: "100%",
  backgroundColor: "#1e1f22",
  border: "1px solid #3f4147",
  borderRadius: "4px",
  padding: "10px 14px",
  color: "#f2f3f5",
  fontSize: "14px",
  fontFamily: "'Nunito', sans-serif",
  outline: "none",
  transition: "border-color 0.17s ease",
  boxSizing: "border-box",
};

const labelStyle = {
  display: "block",
  color: "#b5bac1",
  fontSize: "12px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  marginBottom: 6,
};

const Create = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(initial);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((response) => console.log(response))
      .then((data) => console.log("Success:", data))
      .catch((error) => console.error("Error:", error));
    navigate("/employee/feed");
  };

  const handleChange = (e) => {
    setForm({ ...form, techs: [...form.techs, e.target.value] });
  };

  const { profile, exp, desc } = form;

  return (
    <div style={{
      backgroundColor: "#2b2d31",
      border: "1px solid #3f4147",
      borderRadius: "8px",
      padding: "28px",
      fontFamily: "'Nunito', sans-serif",
    }}>
      <h2 style={{
        color: "#f2f3f5",
        margin: "0 0 24px 0",
        fontSize: "1.2rem",
        fontWeight: 800,
        borderBottom: "1px solid #3f4147",
        paddingBottom: 16,
      }}>
        📝 Create New Job Post
      </h2>

      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

          {/* Job Profile */}
          <div>
            <label style={labelStyle}>Job Profile</label>
            <input
              type="text"
              style={inputStyle}
              placeholder="e.g. Senior Backend Developer"
              value={profile}
              onChange={(e) => setForm({ ...form, profile: e.target.value })}
              onFocus={e => e.target.style.borderColor = "#5865f2"}
              onBlur={e => e.target.style.borderColor = "#3f4147"}
              required
            />
          </div>

          {/* Years of Experience */}
          <div>
            <label style={labelStyle}>Years of Experience</label>
            <input
              type="number"
              min="0"
              style={inputStyle}
              placeholder="e.g. 3"
              value={exp}
              onChange={(e) => setForm({ ...form, exp: e.target.value })}
              onFocus={e => e.target.style.borderColor = "#5865f2"}
              onBlur={e => e.target.style.borderColor = "#3f4147"}
              required
            />
          </div>

          {/* Job Description */}
          <div>
            <label style={labelStyle}>Job Description</label>
            <textarea
              style={{ ...inputStyle, resize: "vertical", minHeight: 100 }}
              placeholder="Describe the role, requirements, location..."
              value={desc}
              onChange={(e) => setForm({ ...form, desc: e.target.value })}
              onFocus={e => e.target.style.borderColor = "#5865f2"}
              onBlur={e => e.target.style.borderColor = "#3f4147"}
              required
            />
          </div>

          {/* Skills */}
          <div>
            <label style={labelStyle}>Required Skills</label>
            <div style={{
              backgroundColor: "#1e1f22",
              border: "1px solid #3f4147",
              borderRadius: "4px",
              padding: "12px 16px",
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
            }}>
              {skillSet.map(({ name }, index) => (
                <label key={index} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  cursor: "pointer",
                  color: "#b5bac1",
                  fontSize: "14px",
                  fontWeight: 600,
                }}>
                  <input
                    type="checkbox"
                    name={name}
                    value={name}
                    onChange={handleChange}
                    style={{
                      accentColor: "#5865f2",
                      width: 16,
                      height: 16,
                      cursor: "pointer",
                    }}
                  />
                  {name}
                </label>
              ))}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            style={{
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
              alignSelf: "flex-start",
            }}
            onMouseEnter={e => { e.target.style.backgroundColor = "#4752c4"; e.target.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.target.style.backgroundColor = "#5865f2"; e.target.style.transform = "translateY(0)"; }}
          >
            🚀 Post Job
          </button>

        </div>
      </form>
    </div>
  );
};

export default Create;
