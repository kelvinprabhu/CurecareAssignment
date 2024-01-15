import React, { useState } from "react";
export default function Tabs() {
  const [activeTab, setActiveTab] = useState("HTML");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="container mt-5">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "HTML" ? "active" : ""}`}
            onClick={() => handleTabClick("HTML")}
          >
            HTML
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "CSS" ? "active" : ""}`}
            onClick={() => handleTabClick("CSS")}
          >
            CSS
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "JavaScript" ? "active" : ""}`}
            onClick={() => handleTabClick("JavaScript")}
          >
            JavaScript
          </button>
        </li>
      </ul>
      <div className="tab-content mt-2">
        <div
          className={`tab-pane fade ${
            activeTab === "HTML" ? "show active" : ""
          }`}
        >
          <p>
            The HyperText Markup Language or HTML is the standard markup
            language for documents designed to be displayed in a web browser.
          </p>
        </div>
        <div
          className={`tab-pane fade ${
            activeTab === "CSS" ? "show active" : ""
          }`}
        >
          <p>
            Cascading Style Sheets is a style sheet language used for describing
            the presentation of a document written in a markup language such as
            HTML or XML.
          </p>
        </div>
        <div
          className={`tab-pane fade ${
            activeTab === "JavaScript" ? "show active" : ""
          }`}
        >
          <p>
            JavaScript, often abbreviated as JS, is a programming language that
            is one of the core technologies of the World Wide Web, alongside
            HTML and CSS.
          </p>
        </div>
      </div>
    </div>
  );
}
