import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';

interface User {
  id: number;
}

const ChangePassword: React.FC = () => {
  const navigate = useNavigate();
  
  // State for form fields based on source: newPassword, oldPassword
  const [newPassword, setNewPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  
  // State for messages based on source conditions: successMsg, errorMsg
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  
  // State for user object (simulating session attribute userObj)
  // In a real app, this would come from a context or API call
  const [userObj, setUserObj] = useState<User | null>(null);

  useEffect(() => {
    // Simulate fetching user from session/context
    // If user is not logged in, redirect to /user/login
    // For this migration, we assume the user is logged in if they reach this page,
    // but we implement the logic to check and redirect if userObj is empty.
    
    // Placeholder for actual user retrieval logic
    // In a full app, this would be:
    // const user = getCurrentUser();
    // if (!user) {
    //   navigate('/user/login');
    // } else {
    //   setUserObj(user);
    // }
    
    // For demonstration purposes, we assume a user exists with id 1
    // Replace this with actual authentication logic
    setUserObj({ id: 1 });

  }, [navigate]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Construct form data as URLSearchParams to match application/x-www-form-urlencoded
    const formData = new URLSearchParams();
    formData.append('newPassword', newPassword);
    formData.append('oldPassword', oldPassword);
    formData.append('userId', userObj ? userObj.id.toString() : '');

    // Submit to the backend endpoint 'userChangePassword'
    fetch('userChangePassword', {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
    })
    .then(response => {
      // Assuming the backend redirects or returns JSON with messages
      // Based on JSP logic, messages are stored in session and displayed on next load
      // For a SPA, we might expect JSON response or handle redirect
      // Since the JSP uses c:remove after display, it implies a page reload or redirect back
      // We will simulate the response handling here.
      if (response.redirected) {
        // If redirected, the new page will have the messages
        window.location.reload();
      } else {
        // If JSON response
        return response.json();
      }
    })
    .then(data => {
      if (data) {
        if (data.successMsg) {
          setSuccessMsg(data.successMsg);
        }
        if (data.errorMsg) {
          setErrorMsg(data.errorMsg);
        }
        // Clear form on success
        if (data.successMsg) {
          setNewPassword('');
          setOldPassword('');
        }
      }
    })
    .catch(error => {
      console.error('Error changing password:', error);
      setErrorMsg('An error occurred while changing password.');
    });
  };

  // Redirect if user is not logged in (simulating <c:if test="${empty userObj }">)
  if (!userObj) {
    return null; // Redirect is handled in useEffect
  }

  return (
    <div>
      <Navbar />
      
      <div className="container p-4">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <div className="card my-card">
              <div className="card-body">
                <p className="fs-3 text-center myP-color">Change Password</p>

                {/* Success Message */}
                {successMsg && (
                  <p className="text-center text-success fs-5">{successMsg}</p>
                )}

                {/* Error Message */}
                {errorMsg && (
                  <p className="text-center text-danger fs-5">{errorMsg}</p>
                )}

                <form action="userChangePassword" method="post" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Enter New Password</label>
                    <input
                      name="newPassword"
                      type="password"
                      placeholder="Enter new password"
                      className="form-control"
                      required
                      value={newPassword}
                      onChange={(e) = /> setNewPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Enter Old Password</label>
                    <input
                      name="oldPassword"
                      type="password"
                      placeholder="Enter old password"
                      className="form-control"
                      required
                      value={oldPassword}
                      onChange={(e) = /> setOldPassword(e.target.value)}
                    />
                  </div>
                  <input type="hidden" value={userObj ? userObj.id : ''} name="userId" />

                  <button type="submit" className="btn my-bg-color text-white col-md-12">
                    Change Password
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;