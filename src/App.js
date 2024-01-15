import submitForm from "./submitForm";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Tabs from "./tabs";
import React, { useState } from "react";
function App() {
  const Form = () => {
    return (
      <div className="container mt-5">
        <div className="card p-4">
          <form
            onSubmit={submitForm}
            action="https://www.greatfrontend.com/api/questions/contact-form"
            method="post"
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                pattern="[A-Za-z ]+"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message:
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  const Assign = () => {
    const three_ = () => {
      const input = { a: 1, b: 2, c: 3 };
      const output = Object.keys(input).map((key) => ({ [key]: input[key] }));
      const three = JSON.stringify(output).replace(/"(.*?)":/g, "$1:");
      setOutput_3(three);
    };
    const four_ = () => {
      const input_2 = [{ a: 1 }, { b: 2 }, { c: 3 }];
      const output_2 = {};

      for (const obj of input_2) {
        for (const key in obj) {
          if (obj.hasOwnProperty(key)) {
            output_2[key] = obj[key];
          }
        }
      }

      console.log(output_2);

      const four = JSON.stringify(output_2)
        .replace(/"(.*?)":/g, "$1:")
        .replace(/"/g, "");
      setOutput_4(four);
    };
    const [output_3, setOutput_3] = useState("");
    const [output_4, setOutput_4] = useState("");
    const three = "{ a: 1, b: 2, c: 3 }";
    const four = "[{ a: 1 }, { b: 2 }, { c: 3 }]";
    return (
      <>
        <div className="container mt-4">
          <div className="d-flex justify-content-center card">
            <table>
              <tr>
                <th>
                  <button className="btn btn-primary" onClick={three_}>
                    for input -{three}
                  </button>
                </th>
                <th>
                  <button className="btn btn-secondary" onClick={four_}>
                    for input - {four}
                  </button>
                </th>
              </tr>
              <tr>
                <td>
                  <h5>{output_3}</h5>
                </td>
                <td>
                  <h5>{output_4}</h5>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </>
    );
  };
  return (
    <BrowserRouter>
      <nav aria-label="breadcrumb" className="mt-3 mx-3">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <NavLink to="/">form</NavLink>
          </li>
          <li className="breadcrumb-item">
            <NavLink to="/tabs">tabs</NavLink>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <NavLink to="/assign">for Assignment 3 and 4</NavLink>
          </li>
        </ol>
      </nav>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/tabs" element={<Tabs />} />
        <Route path="/assign" element={<Assign />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
