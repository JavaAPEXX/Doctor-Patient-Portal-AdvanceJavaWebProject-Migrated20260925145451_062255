import React from 'react';

type IndexComponentProps = {
    data?: Record<string, any>;
};

export const IndexComponent: React.FC<IndexComponentProps> = ({ data = {} }) => {
    const { box } = data;

    return (
        <div className="indexcomponent-wrapper">
            <!DOCTYPE html>
        <html>
        <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0 ">
        
        <title>Home Page | Doctor Patient Portal</title>
        
        
        <style type="text/css">
        .my-card {
        	box-shadow: 0px 0px 10px 1px maroon;
        	/*box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);*/
        }
        </style>
        
        </head>
        <body>
        
        
        
        	<div id="carouselExampleIndicators" className="carousel slide"
        		data-bs-ride="carousel">
        		<div className="carousel-indicators">
        			<button type="button" data-bs-target="#carouselExampleIndicators"
        				data-bs-slide-to="0" className="active" aria-current="true"
        				aria-label="Slide 1"></button>
        			<button type="button" data-bs-target="#carouselExampleIndicators"
        				data-bs-slide-to="1" aria-label="Slide 2"></button>
        			<button type="button" data-bs-target="#carouselExampleIndicators"
        				data-bs-slide-to="2" aria-label="Slide 3"></button>
        			<button type="button" data-bs-target="#carouselExampleIndicators"
        				data-bs-slide-to="3" aria-label="Slide 4"></button>
        				data-bs-slide-to="4" aria-label="Slide 5"></button>
        			<button type="button" data-bs-target="#carouselExampleIndicators"
        				data-bs-slide-to="5" aria-label="Slide 6"></button>
        			<button type="button" data-bs-target="#carouselExampleIndicators"
        				data-bs-slide-to="6" aria-label="Slide 7"></button> -->
        		</div>
        		<div className="carousel-inner">
        			<div className="carousel-item active">
        				<img src="img/doctor_2.jpg" className="d-block w-100" alt="..."
        					height="500px">
        			</div>
        			<div className="carousel-item">
        				<img src="img/doctor_1.jpg" className="d-block w-100" alt="..."
        					height="500px">
        			</div>
        			<div className="carousel-item">
        				<img src="img/hospital4.jpg" className="d-block w-100" alt="..."
        					height="500px">
        			</div>
        			<div className="carousel-item">
        				<img src="img/doctor_3.jpg" className="d-block w-100" alt="..."
        					height="500px">
        			</div>
        				<img src="img/hospital1.jpg" className="d-block w-100" alt="..." />
        			</div>
        			<div className="carousel-item">
        				<img src="img/hospital2.jpg" className="d-block w-100" alt="..." />
        			</div>
        			<div className="carousel-item">
        				<img src="img/hospital3.jpg" className="d-block w-100" alt="..." />
        			</div> -->
        
        		</div>
        		<button className="carousel-control-prev" type="button"
        			data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        			<span className="carousel-control-prev-icon" aria-hidden="true"></span> <span
        				className="visually-hidden">Previous</span>
        		</button>
        		<button className="carousel-control-next" type="button"
        			data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        			<span className="carousel-control-next-icon" aria-hidden="true"></span> <span
        				className="visually-hidden">Next</span>
        		</button>
        	</div>
        
        
        
        
        	<div className="container p-3">
        		<p className="text-center mt-2 mb-5 fs-2 myP-color">Some key Features of our
        			Doctor Patient Portal</p>
        		<div className="row">
        			<div className="col-md-8 p-5">
        
        				<div className="row">
        					<div className="col-md-6">
        						<div className="card my-card">
        							<div className="card-body">
        								<p className="fs-5 myP-color">11000+ Healing Hands</p>
        								<p>Largest network of the world’s finest and brightest
        									medical experts who provide compassionate care using
        									outstanding expertise.</p>
        							</div>
        						</div>
        					</div>
        
        					<div className="col-md-6">
        						<div className="card my-card">
        							<div className="card-body">
        								<p className="fs-5 myP-color">Most Advance Healthcare Technology</p>
        								<p>E-Hospitals has been the pioneer in bringing
        									ground-breaking health care technologies to Bangladesh.</p>
        							</div>
        						</div>
        					</div>
        
        					<div className="col-md-6 mt-2">
        						<div className="card my-card">
        							<div className="card-body">
        								<p className="fs-5 myP-color">Best Clinical Outcomes</p>
        								<p>Leveraging its vast medical expertise & technological
        									advantage, E-Hospitals has consistently delivered best in class
        									clinical outcomes.</p>
        							</div>
        						</div>
        					</div>
        
        					<div className="col-md-6 mt-2">
        						<div className="card my-card">
        							<div className="card-body">
        								<p className="fs-5 myP-color">500+ Pharmacies</p>
        								<p>E-Hospital Pharmacy is our first, largest and most
        									trusted branded pharmacy network, with over 50s0 plus outlets
        									covering the entire nation</p>
        							</div>
        						</div>
        					</div>
        				</div>
        
        
        			</div>
        
        			
        				<div className="col-md-4 mt-2 mys-card">
        					<img className="mt-3" alt="" src="img/doctor_1.jpg" height="440px"
        						width="470px">
        				</div>
        			
        
        		</div>
        	</div>
        
        	<hr>
        
        
        	<div className="container p-2">
        		<p className="text-center fs-2 myP-color">Our Team</p>
        		<div className="row">
        			<div className="col-md-3">
        				<div className="card my-card">
        					<div className="card-body text-center">
        						<img alt="" src="img/doc1.jpg" height="300px" width="230px" />
        						<p className="fw-bold fs-5">Dr. John</p>
        						<p className="fs-7">(CEO & Chairman)</p>
        					</div>
        				</div>
        			</div>
        			<div className="col-md-3">
        				<div className="card my-card">
        					<div className="card-body text-center">
        						<img alt="" src="img/doc2.jpg" height="300px" width="230px" />
        						<p className="fw-bold fs-5">Dr. Brad</p>
        						<p className="fs-7">(Chief Doctor)</p>
        					</div>
        				</div>
        			</div>
        			<div className="col-md-3">
        				<div className="card my-card">
        					<div className="card-body text-center">
        						<img alt="" src="img/doc3.jpg" height="300px" width="230px" />
        						<p className="fw-bold fs-5">Dr. Jennifer</p>
        						<p className="fs-7">(Chief Doctor)</p>
        					</div>
        				</div>
        			</div>
        
        			<div className="col-md-3">
        				<div className="card my-card">
        					<div className="card-body text-center">
        						<img alt="" src="img/doc4.jpg" height="300px" width="230px" />
        						<p className="fw-bold fs-5">Dr. Maria</p>
        						<p className="fs-7">(Dean)</p>
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

export default IndexComponent;
