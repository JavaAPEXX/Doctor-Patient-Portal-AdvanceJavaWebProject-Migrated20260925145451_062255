import React, { useState } from 'react';

type DoctorEditProfileComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const DoctorEditProfileComponent: React.FC<DoctorEditProfileComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({
        'newPassword': '',
        'oldPassword': '',
        'id': '',
        'fullName': '',
        'dateOfBirth': '',
        'qualification': '',
        'email': '',
        'phone': '',
        'id': '',
        'specialist': '',
    });
    const { box, doctorObj, errorMsg, errorMsgForD, successMsg, successMsgForD } = data;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name) setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await onSubmit?.(formData);
    };

    return (
        <div className="doctoreditprofilecomponent-wrapper">
            <!DOCTYPE html>
        <html>
        <head>
        <meta charset="UTF-8">
        <title>Edit Doctor | Doctor</title>
        
        <style type="text/css">
        .my-card {
        	box-shadow: 0px 0px 10px 1px maroon;
        	/*box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);*/
        }
        </style>
        
        
        </head>
        <body>
        
        
        	{(empty doctorObj ) && (
        
        		<c:redirect url="../doctor_login.jsp"></c:redirect>
        
        	)}
        
        
        	<div className="container p-4">
        		<div className="row">
        			<div className="col-md-4">
        				<div className="card my-card">
        
        					<div className="card-body">
        						<p className="fs-3 text-center text-success">Change Password</p>
        
        						{(not empty successMsg ) && (
        							<p className="text-center text-success fs-5">{successMsg}</p>
        							<c:remove var="successMsg" scope="session" />
        						)}
        
        						{(not empty errorMsg ) && (
        							<p className="text-center text-danger fs-5">{errorMsg}</p>
        							<c:remove var="errorMsg" scope="session" />
        						)}
        
        
        						<form onSubmit={handleSubmit} action="../doctorChangePassword" method="post">
        							<div className="mb-3">
        								<label className="form-label">Enter New Password</label> <input
        									name="newPassword" type="password"
        									placeholder="Enter new password" className="form-control"
        									required="required">
        
        							</div>
        							<div className="mb-3">
        								<label className="form-label">Enter Old Password</label> <input
        									name="oldPassword" type="password"
        									placeholder="Enter old password" className="form-control" required>
        							</div>
        							<input type="hidden" value={doctorObj.id} name="doctorId" />
        
        							<button type="submit" className="btn btn-success col-md-12">Change
        								Password</button>
        						</form>
        					</div>
        				</div>
        
        			</div>
        
        
        			<div className="col-md-6  offset-md-2">
        				<div className="card my-card">
        
        					<div className="card-body">
        						<p className="fs-3 text-center text-success">Edit Doctor Profile</p>
        
        						{(not empty successMsgForD ) && (
        							<p className="text-center text-success fs-5">{successMsgForD}</p>
        							<c:remove var="successMsgForD" scope="session" />
        						)}
        
        						{(not empty errorMsgForD ) && (
        							<p className="text-center text-danger fs-5">{errorMsgForD}</p>
        							<c:remove var="errorMsgForD" scope="session" />
        						)}
        
        
        						
        
        
        							<form onSubmit={handleSubmit} action="../doctorEditProfile" method="post">
        								<div className="mb-3">
        									<label className="form-label">Full Name</label> <input
        										name="fullName" type="text" placeholder="Enter full name"
        										className="form-control" value={doctorObj.fullName}>
        
        								</div>
        								<div className="mb-3">
        									<label className="form-label">Date of Birth</label> <input
        										name="dateOfBirth" type="date" placeholder="Enter DOB"
        										className="form-control" value={doctorObj.dateOfBirth}>
        
        								</div>
        								<div className="mb-3">
        									<label className="form-label">Qualification</label> <input
        										name="qualification" type="text"
        										placeholder="Enter qualification" className="form-control"
        										value={doctorObj.qualification}>
        								</div>
        
        								<div className="mb-3">
        									<label className="form-label">Specialist</label> <select
        										className="form-control" name="specialist">
        										<option>{ doctorObj.specialist }</option>
        
        										<option>
        											
        										</option>
        
        									</select>
        								</div>
        
        								<div className="mb-3">
        									<label className="form-label">Email address</label> <input
        										name="email" type="email" placeholder="Enter Email"
        										className="form-control" readonly value={doctorObj.email}>
        
        								</div>
        								<div className="mb-3">
        									<label className="form-label">Phone</label> <input name="phone"
        										type="text" placeholder="Enter mobile number"
        										className="form-control" value={doctorObj.phone}>
        
        								</div>
        								
        								<input type="hidden" value={doctorObj.id} name="doctorId" />
        
        
        								<button type="submit"
        									className="btn btn-success text-white col-md-12">Update</button>
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

export default DoctorEditProfileComponent;
