import React, { useState, FormEvent } from 'react';
import Navbar from '../../components/layout/Navbar';
import GlobalStyles from '../../components/layout/GlobalStyles';

const DoctorLogin: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [successMsg, setSuccessMsg] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/doctorLogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ email, password }).toString(),
      });

      if (!response.ok) {
        // If the backend returns a non-2xx status, treat it as an error
        const errorText = await response.text();
        setErrorMsg(errorText || 'Login failed. Please try again.');
        setSuccessMsg('');
        return;
      }

      // Assume the backend returns JSON with a `success` flag and a `message`
      const data = await response.json();

      if (data.success) {
        setSuccessMsg(data.message || 'Login successful.');
        setErrorMsg('');
        // Redirect to the doctor dashboard or desired page
        window.location.href = '/doctor';
      } else {
        setErrorMsg(data.message || 'Invalid credentials.');
        setSuccessMsg('');
      }
    } catch (err) {
      setErrorMsg('An unexpected error occurred. Please try again.');
      setSuccessMsg('');
    }
  };

  return (
    <>
      <GlobalStyles />
      <Navbar />

      {/* Custom CSS for this page */}
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
                  <i className="fa-solid fa-stethoscope"></i> Doctor Login
                </p>
              </div>

              <div className="card-body">
                {successMsg && (
                  <p className="text-center text-success fs-5">{successMsg}</p>
                )}
                {errorMsg && (
                  <p className="text-center text-danger fs-5">{errorMsg}</p>
                )}

                <form onSubmit={handleSubmit}>
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
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorLogin;