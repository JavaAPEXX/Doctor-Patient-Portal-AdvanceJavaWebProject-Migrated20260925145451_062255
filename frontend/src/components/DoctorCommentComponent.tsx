import React, { useState } from 'react';

type DoctorCommentComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const DoctorCommentComponent: React.FC<DoctorCommentComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({
        'userId': '',
        'fullName': '',
        'age': '',
        'phone': '',
        'diseases': '',
        'id': '',
        'doctorId': '',
        'comment': '',
    });
    const { background, box, errorMsg, successMsg } = data;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name) setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await onSubmit?.(formData);
    };

    return (
        <div className="doctorcommentcomponent-wrapper">
            <!DOCTYPE html>
        <html>
        <head>
        <meta charset="UTF-8">
        <title>Comment/Prescription Doctor</title>
        
        
        <style type="text/css">
        .my-card {
        	box-shadow: 0px 0px 10px 1px maroon;
        	/*box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);*/
        }
        
        /* backgournd image css */
        .my-bg-img {
        	background: linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)),
        		url("../img/hospital1.jpg");
        	height: 20vh;
        	width: 100%;
        	background-size: cover;
        	background-repeat: no-repeat;
        }
        </style>
        
        </head>
        <body>
        
        
        	{(empty doctorObj ) && (
        
        		<c:redirect url="../doctor_login.jsp"></c:redirect>
        
        	)}
        
        
        
        
        	<div className="container-fluid my-bg-img p-5">
        		<p className="text-center fs-2 text-white"></p>
        
        	</div>
        
        
        
        
        	<div className="container p-3">
        		<p className="fs-2"></p>
        
        		<div className="row">
        
        
        
        			<div className="col-md-6 offset-md-3">
        				<div className="card my-card">
        					<div className="card-body">
        						<p className="text-center fs-3">Leave a Treatment Comment</p>
        
        						
        
        						{(not empty successMsg ) && (
        							<p className="text-center text-success fs-5">{successMsg}</p>
        							<c:remove var="successMsg" scope="session" />
        						)}
        
        						{(not empty errorMsg ) && (
        							<p className="text-center text-danger fs-5">{errorMsg}</p>
        							<c:remove var="errorMsg" scope="session" />
        						)}
        
        
        						
        						
        						
        						<form onSubmit={handleSubmit} className="row g-3" action="../updateStatus" method="post">
        
        
        							<div className="col-md-6">
        								<label className="form-label">Full Name</label> <input
        									name="fullName" type="text" placeholder="Enter full name"
        									className="form-control" readonly value="">
        
        							</div>
        
        							<div className="col-md-6">
        								<label className="form-label">Age</label> <input name="age"
        									type="number" placeholder="Enter your Age" className="form-control"
        									readonly value="">
        							</div>
        
        							<div className="col-md-6">
        								<label className="form-label">Phone</label> <input name="phone"
        									type="number" maxlength="11" placeholder="Enter Mobile no."
        									className="form-control" readonly value="">
        							</div>
        
        							<div className="col-md-6">
        								<label className="form-label">Diseases</label> <input
        									name="diseases" type="text" placeholder="Enter diseases"
        									className="form-control" readonly value="">
        							</div>
        
        
        
        							<div className="col-md-12">
        								<label className="form-label">Leave a Comment / Prescription</label>
        								<textarea name="comment" placeholder="Leave a comment"
        									className="form-control" rows="" cols=""></textarea>
        							</div>
        
        							<input type="hidden" name="id" value="" className="form-control" />
        
        							<input type="hidden" name="doctorId" value="" className="form-control" />
        
        
        
        							<div className="col-md-12">
        								<button type="submit" className="btn btn-success col-md-12">Submit</button>
        							</div>
        
        
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

export default DoctorCommentComponent;
