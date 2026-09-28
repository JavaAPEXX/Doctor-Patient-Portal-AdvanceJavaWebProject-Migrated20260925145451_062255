import React from 'react';

type DoctorIndexComponentProps = {
    data?: Record<string, any>;
};

export const DoctorIndexComponent: React.FC<DoctorIndexComponentProps> = ({ data = {} }) => {
    const { box } = data;

    return (
        <div className="doctorindexcomponent-wrapper">
            <!DOCTYPE html>
        <html>
        <head>
        <meta charset="UTF-8">
        <title>Index Page | Doctor</title>
        
        
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
        
        
        
        	<div className="container p-5">
        		<p className="text-center text-success fs-3">Doctor DashBoard</p>
        
        
        		<div className="row">
        			<div className="col-md-4 offset-md-2">
        				<div className="card my-card">
        					<div className="card-body text-center text-success">
        						<i className="fa-solid fa-user-doctor fa-3x"></i><br>
        						<p className="fs-4 text-center">
        							Doctor <br>
        						</p>
        					</div>
        				</div>
        
        			</div>
        
        			<div className="col-md-4">
        				<div className="card my-card">
        					<div className="card-body text-center text-success">
        						<i className="fa-solid fa-calendar-check fa-3x"></i><br>
        						<p className="fs-4 text-center">
        							Total Appointment <br> 
        						</p>
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

export default DoctorIndexComponent;
