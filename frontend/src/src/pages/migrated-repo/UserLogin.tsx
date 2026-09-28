import React, { useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const UserLogin: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<{
    text: string;
    type: 'success' | 'error';
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();
    params.append('email', email);
    params.append('password', password);

    try {
      const response = await fetch('userLogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      });

      const text = await response.text();

      if (response.ok) {
        setMessage({ text, type: 'success' });
      } else {
        setMessage({ text, type: 'error' });
      }
    } catch {
      setMessage({ text: 'An unexpected error occurred.', type: 'error' });
    }
  };

  return (
    <>
      <Navbar />

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
                  <i className="fa fa-group"></i> User Login
                </p>
              </div>

              <div className="card-body">
                {message && (
                  <p
                    className={`text-center fs-5 ${
                      message.type === 'success' ? 'text-success' : 'text-danger'
                    }`}
                  >
                    {message.text}
                  </p>
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

                  <button type="submit" className="btn col-md-12 text-white my-bg-color">
                    Submit
                  </button>
                </form>

                <br />
                Don't have an account?{' '}
                <a href="signup.jsp" className="text-decoration-none">
                  create one
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLogin;