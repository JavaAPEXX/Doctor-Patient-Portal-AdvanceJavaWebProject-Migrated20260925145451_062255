import React, { useState } from 'react';

type AdminLoginComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const AdminLoginComponent: React.FC<AdminLoginComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({
        'email': '',
        'password': '',
    });
    const { box, errorMsg, successMsg } = data;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name) setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await onSubmit?.(formData);
    };

    return (
        <div className="adminlogincomponent-wrapper">
            <!DOCTYPE html>
        <html>
        <head>
        <meta charset="UTF-8">
        <title>Admin Login</title>
        
        
        <style type="text/css">
        .my-card {
        	box-shadow: 0px 0px 10px 1px maroon;
        	/*box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);*/
        }
        </style>
        
        
        </head>
        <body>
        
        
        	<div className="container p-5">
        		<div className="row">
        			<div className="col-md-4 offset-md-4">
        				<div className="card my-card">
        					<div className="card-header text-center text-white my-bg-color">
        						<p className="fs-4 text-center text-white mt-2">
        							<i className="fa fa-universal-access"></i> Admin Login
        						</p>
        					</div>
        					<div className="card-body">
        
        						{(not empty successMsg ) && (
        							<p className="text-center text-success fs-5">{successMsg}</p>
        							<c:remove var="successMsg" scope="session" />
        						)}
        
        						{(not empty errorMsg ) && (
        							<p className="text-center text-danger fs-5">{errorMsg}</p>
        							<c:remove var="errorMsg" scope="session" />
        						)}
        
        
        						<form onSubmit={handleSubmit} action="adminLogin" method="post">
        							<div className="mb-3">
        								<label className="form-label">Email address</label> <input
        									name="email" type="email" placeholder="Enter Email"
        									className="form-control">
        								<div id="emailHelp" className="form-text">We'll never share
        									your email with anyone else.</div>
        							</div>
        							<div className="mb-3">
        								<label className="form-label">Password</label> <input
        									name="password" type="password" placeholder="Enter password"
        									className="form-control">
        							</div>
        
        							<button type="submit"
        								className="btn my-bg-color text-white col-md-12">Submit</button>
        						</form>
        					</div>
        				</div>
        			</div>
        		</div>
        	</div>
        
        
        
        
        </body>
        </html>
        </div>
    );
};

export default AdminLoginComponent;
