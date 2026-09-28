import React, { useState } from 'react';

type UserAppointmentComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const UserAppointmentComponent: React.FC<UserAppointmentComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({
        'userId': '',
        'fullName': '',
        'age': '',
        'appointmentDate': '',
        'email': '',
        'phone': '',
        'diseases': '',
        'gender': '',
        'doctorNameSelect': '',
        'address': '',
    });
    const { background, box, errorMsg, successMsg, userObj } = data;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name) setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await onSubmit?.(formData);
    };

    return (
        <div className="userappointmentcomponent-wrapper">
            <!DOCTYPE html>
        <html>
        <head>
        <meta charset="UTF-8">
        <title>User Appointment Page</title>
        
        <style type="text/css">
        .my-card {
        	box-shadow: 0px 0px 10px 1px maroon;
        	/*box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);*/
        }
        
        /* backgournd image css */
        
        .my-bg-img{
        	background: linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)),url("img/hospital1.jpg");
        	height: 20vh;
        	width: 100%;
        	background-size:cover;
        	background-repeat: no-repeat;
        	
        }
        
        /* backgournd image css */
        </style>
        
        </head>
        <body>
        
        
        	<div className="container-fluid my-bg-img p-5">
        		<p className="text-center fs-2 text-white"></p>
        
        	</div>
        
        
        
        
        	<div className="container p-3">
        		<p className="fs-2"></p>
        
        		<div className="row">
        			
        			<div className="col-md-6 p-5">
        				<img alt="" src="img/doc3.jpg" width="370" height="" />
        			</div>
        			
        			<div className="col-md-6">
        				<div className="card my-card">
        					<div className="card-body">
        						<p className="text-center fs-3">User Appointment</p>
        
        						{(not empty successMsg ) && (
        							<p className="text-center text-success fs-5">{successMsg}</p>
        							<c:remove var="successMsg" scope="session" />
        						)}
        
        						{(not empty errorMsg ) && (
        							<p className="text-center text-danger fs-5">{errorMsg}</p>
        							<c:remove var="errorMsg" scope="session" />
        						)}
        
        
        						<form onSubmit={handleSubmit} className="row g-3" action="addAppointment" method="post">
        							
        							<input type="hidden" name="userId" value={ userObj.id } />
        							
        							<div className="col-md-6">
        								<label className="form-label">Full Name</label> <input required="required"
        									name="fullName" type="text" placeholder="Enter full name"
        									className="form-control">
        
        							</div>
        
        							<div className="col-md-6">
        								<label className="form-label">Gender</label> <select
        									className="form-control" name="gender" required="required">
        									<option selected="selected" disabled="disabled">---Select
        										Gender---</option>
        									<option value="male">Male</option>
        									<option value="female">Female</option>
        								</select>
        							</div>
        
        							<div className="col-md-6">
        								<label className="form-label">Age</label> <input name="age"
        								required="required"	type="number" placeholder="Enter your Age" className="form-control">
        							</div>
        							<div className="col-md-6">
        								<label className="form-label">Appointment Date</label> <input
        								required="required"	name="appointmentDate" type="date" className="form-control">
        							</div>
        
        							<div className="col-md-6">
        								<label className="form-label">Email</label> <input name="email"
        								required="required"	type="email" placeholder="Enter email" className="form-control">
        							</div>
        
        							<div className="col-md-6">
        								<label className="form-label">Phone</label> <input name="phone"
        								required="required"	type="number" maxlength="11" placeholder="Enter Mobile no."
        									className="form-control">
        							</div>
        
        							<div className="col-md-6">
        								<label className="form-label">Diseases</label> <input
        								required="required"	name="diseases" type="text" placeholder="Enter diseases"
        									className="form-control">
        							</div>
        
        							<div className="col-md-6">
        								<label className="form-label">Doctor</label> <select
        								 required="required" className="form-control" name="doctorNameSelect">
        									<option selected="selected" disabled="disabled">---Select---</option>
        									
        									<option value="">  () </option>
        									
        									
        								</select>
        							</div>
        
        
        
        							<div className="col-md-12">
        								<label className="form-label">Full Address</label>
        								<textarea name="address" required="required" className="form-control" rows="3" cols=""></textarea>
        							</div>
        
        
        							{(empty userObj) && (
        								<div className="col-md-12">
        									<a href="user_login.jsp" className="btn my-bg-color text-white col-md-12">Submit</a>
        								</div>
        							)}
        
        
        							{(not empty userObj) && (
        
        								<div className="col-md-12">
        									<button type="submit" className="btn my-bg-color text-white col-md-12">Submit</button>
        								</div>
        
        							)}
        
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

export default UserAppointmentComponent;
