import React from 'react';

type AdminPatientComponentProps = {
    data?: Record<string, any>;
};

export const AdminPatientComponent: React.FC<AdminPatientComponentProps> = ({ data = {} }) => {
    const { box } = data;

    return (
        <div className="adminpatientcomponent-wrapper">
            <!DOCTYPE html>
        <html>
        <head>
        <meta charset="UTF-8">
        <title>Patient Details | Admin</title>
        
        
        <style type="text/css">
        .my-card {
        	box-shadow: 0px 0px 10px 1px maroon;
        	/*box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);*/
        }
        </style>
        
        </head>
        <body>
        
        	<div className="col-md-12 p-5">
        		<div className="card my-card">
        			<div className="card-body">
        				<p className="text-center text-danger fs-3">Patient Details</p>
        
        				<table className="table table-success table-striped">
        					<thead>
        						<tr className="table">
        							<th scope="col" style="padding-right:70px">Full Name</th>
        							<th scope="col">Gender</th>
        							<th scope="col">Age</th>
        							<th scope="col">Appointment</th>
        							<th scope="col">Email</th>
        							<th scope="col">Phone</th>
        							<th scope="col" style="padding-right:50px">Diseases</th>
        							<th scope="col" style="padding-right:70px">Doctor Name</th>
        							<th scope="col">Address</th>
        							<th scope="col" style="padding-right:100px">Status</th>
        
        						</tr>
        					</thead>
        					<tbody>
        
        						
        						<tr>
        							<th></th>
        							<td></td>
        							<td></td>
        							<td></td>
        							<td></td>
        							<td></td>
        							<td></td>
        							<td></td>
        							<td></td>
        							<td></td>
        
        						</tr>
        						
        						
        
        						
        					</tbody>
        
        				</table>
        
        			</div>
        
        
        		</div>
        
        	</div>
        
        
        
        
        </body>
        </html>
        </div>
    );
};

export default AdminPatientComponent;
