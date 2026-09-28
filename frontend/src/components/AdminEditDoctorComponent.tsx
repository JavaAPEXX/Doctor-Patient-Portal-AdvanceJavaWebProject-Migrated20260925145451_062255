import React, { useState } from 'react';

type AdminEditDoctorComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const AdminEditDoctorComponent: React.FC<AdminEditDoctorComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({
        'fullName': '',
        'dateOfBirth': '',
        'qualification': '',
        'email': '',
        'phone': '',
        'password': '',
        'id': '',
        'specialist': '',
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
        <div className="admineditdoctorcomponent-wrapper">
            <!DOCTYPE html>
        <html>
        <head>
        <meta charset="UTF-8">
        <title>Doctor page</title>
        
        <style type="text/css">
        .my-card {
        	box-shadow: 0px 0px 10px 1px maroon;
        	/*box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);*/
        }
        </style>
        
        </head>
        <body>
        
        
        	<div className="container-fluid p-3">
        		<div className="row">
        			<div className="col-md-4 offset-4">
        				<div className="card my-card">
        					<div className="card-body">
        						<p className="fs-3 text-center text-danger">Edit Doctor Details</p>
        
        						{(not empty successMsg ) && (
        							<p className="text-center text-success fs-3">{successMsg}</p>
        							<c:remove var="successMsg" scope="session" />
        						)}
        
        						{(not empty errorMsg ) && (
        							<p className="text-center text-danger fs-3">{errorMsg}</p>
        							<c:remove var="errorMsg" scope="session" />
        						)}
        
        
        
        
        						
        						
        						<form onSubmit={handleSubmit} action="../updateDoctor" method="post">
        							<div className="mb-3">
        								<label className="form-label">Full Name</label> <input
        									name="fullName" type="text" placeholder="Enter full name"
        									className="form-control" value="">
        
        							</div>
        							<div className="mb-3">
        								<label className="form-label">Date of Birth</label> <input
        									name="dateOfBirth" type="date" placeholder="Enter DOB"
        									className="form-control" value="">
        
        							</div>
        							<div className="mb-3">
        								<label className="form-label">Qualification</label> <input
        									name="qualification" type="text"
        									placeholder="Enter qualification" className="form-control"
        									value="">
        							</div>
        
        							<div className="mb-3">
        								<label className="form-label">Specialist</label> <select
        									className="form-control" name="specialist">
        									<option></option>
        
        									<option>
        										
        									</option>
        
        								</select>
        							</div>
        
        							<div className="mb-3">
        								<label className="form-label">Email address</label> <input
        									name="email" type="email" placeholder="Enter Email"
        									className="form-control" value="">
        
        							</div>
        							<div className="mb-3">
        								<label className="form-label">Phone</label> <input name="phone"
        									type="text" placeholder="Enter mobile number"
        									className="form-control" value="">
        
        							</div>
        							<div className="mb-3">
        								<label className="form-label">Password</label> <input
        									name="password" type="text" placeholder="Enter password"
        									className="form-control" value="">
        							</div>
        							
        							<div className="mb-3">
        								<input name="id" type="hidden" className="form-control"
        									value="">
        							</div>
        
        							<button type="submit" className="btn btn-danger text-white col-md-12">Update</button>
        						</form>
        							className="text-decoration-none">create one</a> -->
        
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

export default AdminEditDoctorComponent;
