import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";

/**
 * Signup page – migrated from `signup.jsp`.
 * Preserves:
 *  • Bootstrap layout & classes
 *  • Custom `.my-card` style
 *  • Navbar include
 *  • Conditional rendering of success / error messages
 *  • Controlled form for fields: fullName, email, password
 *  • Form submission using `application/x-www-form-urlencoded`
 */
const Signup: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Form fields (controlled)
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Message handling – read from URL query params (fallback to empty)
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Extract possible messages that might have been appended by the server
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sMsg = params.get("successMsg");
    const eMsg = params.get("errorMsg");
    if (sMsg) setSuccessMsg(sMsg);
    if (eMsg) setErrorMsg(eMsg);
  }, [location.search]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Build URL‑encoded body
    const body = new URLSearchParams();
    body.append("fullName", fullName);
    body.append("email", email);
    body.append("password", password);

    try {
      const resp = await fetch("/user_register", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      });

      // The original JSP expects a redirect with session messages.
      // We attempt to read JSON { successMsg?, errorMsg? } or plain text.
      const contentType = resp.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        const data = await resp.json();
        if (data.successMsg) {
          setSuccessMsg(data.successMsg);
          setErrorMsg(null);
          // Optionally navigate to a clean URL without query params
          navigate("/signup", { replace: true });
        } else if (data.errorMsg) {
          setErrorMsg(data.errorMsg);
          setSuccessMsg(null);
        }
      } else {
        const text = await resp.text();
        // Simple heuristic: if response contains the word "success" treat as success
        if (text.toLowerCase().includes("success")) {
          setSuccessMsg(text);
          setErrorMsg(null);
          navigate("/signup", { replace: true });
        } else {
          setErrorMsg(text);
          setSuccessMsg(null);
        }
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("An unexpected error occurred.");
      setSuccessMsg(null);
    }
  };

  return (
    <>
      {/* Global CSS imports (Bootstrap etc.) are assumed to be loaded elsewhere */}
      <Navbar />

      {/* Inline custom CSS for the card – mirrors `component/allcss.jsp` + page‑specific style */}
      <style>{`
        .my-card {
          box-shadow: 0px 0px 10px 1px maroon;
        }
      `}</style>

      <div className="container p-5">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <div className="card my-card">
              <div className="card-header text-center text-white my-bg-color">
                <p className="fs-4 text-center text-white mt-2">
                  <i className="fa fa-user-plus"></i> User Register
                </p>
              </div>
              <div className="card-body">
                {/* Success / Error messages */}
                {successMsg && (
                  <p className="text-center text-success fs-3">{successMsg}</p>
                )}
                {errorMsg && (
                  <p className="text-center text-danger fs-3">{errorMsg}</p>
                )}

                {/* Registration Form */}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      name="fullName"
                      type="text"
                      placeholder="Enter full name"
                      className="form-control"
                      value={fullName}
                      onChange={(e) = /> setFullName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="Enter Email"
                      className="form-control"
                      value={email}
                      onChange={(e) = /> setEmail(e.target.value)}
                      required
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      name="password"
                      type="password"
                      placeholder="Enter password"
                      className="form-control"
                      value={password}
                      onChange={(e) = /> setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn my-bg-color text-white col-md-12"
                  >
                    Register
                  </button>
                </form>
                {/* End of form */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;