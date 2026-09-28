import React, { useState } from 'react';

type AdminIndexComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const AdminIndexComponent: React.FC<AdminIndexComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({
        'specialistName': '',
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
        <div className="adminindexcomponent-wrapper">
            <!DOCTYPE html>
        <html>
        <head>
        <meta charset="UTF-8">
        <title>Admin page</title>
        
        
        
        <style type="text/css">
        .my-card {
        	box-shadow: 0px 0px 10px 1px maroon;
        	/*box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);*/
        }
        </style>
        
        
        </head>
        <body>
        
        	{(empty adminObj ) && (
        		<c:redirect url="../admin_login.jsp"></c:redirect>
        	)}
        
        
        
        	<div className="container p-5">
        		<p className="text-center text-danger fs-3">Admin Dashboard</p>
        
        		{(not empty successMsg ) && (
        			<p className="text-center text-success fs-5">{successMsg}</p>
        			<c:remove var="successMsg" scope="session" />
        		)}
        
        		{(not empty errorMsg ) && (
        			<p className="text-center text-danger fs-5">{errorMsg}</p>
        			<c:remove var="errorMsg" scope="session" />
        		)}
        
        
        		<div className="row">
        			<div className="col-md-4">
        				<div className="card my-card">
        					<div className="card-body text-center text-danger">
        						<i className="fa-solid fa-user-doctor fa-3x"></i><br>
        						<p className="fs-4 text-center">
        							Doctor <br>
        
        						</p>
        					</div>
        				</div>
        
        			</div>
        			<div className="col-md-4">
        				<div className="card my-card">
        					<div className="card-body text-center text-danger">
        						<i className="fas fa-user-circle fa-3x"></i><br>
        						<p className="fs-4 text-center">
        							User <br>
        						</p>
        					</div>
        				</div>
        
        			</div>
        			<div className="col-md-4">
        				<div className="card my-card">
        					<div className="card-body text-center text-danger">
        						<i className="fa-solid fa-calendar-check fa-3x"></i><br>
        						<p className="fs-4 text-center">
        							Total Appointment <br>
        						</p>
        					</div>
        				</div>
        
        			</div>
        			<div className="col-md-4 mt-2">
        				<div className="card my-card" data-bs-toggle="modal"
        					data-bs-target="#exampleModal">
        					<div className="card-body text-center text-danger">
        						<i className="fa-solid fa-user-doctor fa-3x"></i><br>
        						<p className="fs-4 text-center">
        							Specialist <br>
        						</p>
        					</div>
        				</div>
        
        			</div>
        		</div>
        
        
        	</div>
        
        
        
        
        
        
        	<div className="modal fade" id="exampleModal" tabindex="-1"
        		aria-labelledby="exampleModalLabel" aria-hidden="true">
        		<div className="modal-dialog">
        			<div className="modal-content">
        				<div className="modal-header">
        					<h5 className="modal-title text-danger" id="exampleModalLabel">Add Specialist</h5>
        					<button type="button" className="btn-close" data-bs-dismiss="modal"
        						aria-label="Close"></button>
        				</div>
        				<div className="modal-body">
        
        					<form onSubmit={handleSubmit} action="../addSpecialist" method="post">
        
        						<div className="form-group">
        							<label className="form-label">Enter Specialist Name</label> <input type="text"
        								name="specialistName" placeholder="Enter Specialist Name" className="form-control" />
        						</div>
        						<div className="text-center mt-2">
        							<button type="submit" className="btn btn-outline-danger ">Add</button>
        						</div>
        
        					</form>
        
        
        
        				</div>
        				<div className="modal-footer">
        					<button type="button" className="btn btn-secondary"
        						data-bs-dismiss="modal">Close</button>
        
        				</div>
        			</div>
        		</div>
        	</div>
        
        
        
        
        
        
        </body>
        </html>
        </div>
    );
};

export default AdminIndexComponent;
