import React, { useEffect } from 'react';
import { Navbar } from '../../components/layout/Navbar';

interface Doctor {
  id: number;
  fullName: string;
  dateOfBirth: string;
  qualification: string;
  specialist: string;
  email: string;
  phone: string;
}

const ViewDoctor: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulating the backend call: DoctorDAO.getAllDoctor()
    // In a real migration, this would be an API call to the existing backend endpoint
    // that serves the list of doctors. Since no specific API endpoint was provided in the
    // backend context, we assume a standard REST endpoint or mock the data structure
    // based on the Doctor entity.
    
    // For the purpose of this migration, we will fetch from a hypothetical endpoint
    // that matches the backend behavior. If the backend is unchanged and serves JSP,
    // this might need to be an API bridge. However, strictly following the instruction
    // "Backend Mode: unchanged", we assume there is an API or we simulate the data 
    // retrieval that the JSP did via Java code.
    
    // NOTE: Since the backend is unchanged and the original JSP fetched data directly 
    // via Java DAO, a real migration would require an API endpoint. 
    // Assuming a standard /api/doctors endpoint for demonstration of the UI logic.
    
    const fetchDoctors = async () => {
      try {
        // Placeholder for actual API call
        // const response = await fetch('/api/doctors');
        // const data = await response.json();
        // setDoctors(data);
        
        // For this component to be "production-ready" in a vacuum without the actual 
        // API endpoint definition, we leave the fetch logic structured but commented 
        // or using a mock if no API is defined. 
        // However, the prompt says "Table data must come from the real backend".
        // Since no backend endpoint was provided in the context, I will structure the 
        // code to call a standard endpoint that would exist in a migrated backend, 
        // or leave it as a stub if the backend is truly static JSP.
        
        // Given the constraints, I will assume a standard API call pattern.
        // If the backend is strictly JSP without an API, this component cannot fetch 
        // data dynamically without a backend change. 
        // I will implement the UI exactly as requested, with a fetch call to a 
        // logical endpoint '/api/doctors' which would need to be implemented if 
        // the backend was migrated, OR if the backend is unchanged, this implies 
        // an API layer exists or will be added.
        
        // For the sake of a compilable and functional UI component that matches 
        // the JSP behavior (loading data on mount):
        
        // Mocking the data structure to ensure the component renders correctly 
        // if the API is not yet available, but keeping the structure ready for 
        // the real API.
        
        // In a strict migration where backend is UNCHANGED (JSP), this React app 
        // would typically proxy to the JSP or the JSP would be converted to an API.
        // I will use a fetch to '/api/doctors' as the standard expectation for 
        // a React frontend consuming a backend.
        
        const response = await fetch('/api/doctors');
        if (!response.ok) {
          throw new Error('Failed to fetch doctors');
        }
        const data: Doctor[] = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
        setErrorMsg('Failed to load doctors');
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const handleDelete = (id: number) => {
    // The original JSP links to ../deleteDoctor?id=<id>
    // We preserve this behavior by navigating to the same URL
    window.location.href = `/deleteDoctor?id=${id}`;
  };

  return (
    <div>
      <Navbar />
      
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card my-card">
              <div className="card-body">
                <p className="fs-3 text-center text-danger">List of Doctors</p>

                {/* Message print */}
                {successMsg && (
                  <p className="text-center text-success fs-3">{successMsg}</p>
                )}

                {errorMsg && (
                  <p className="text-center text-danger fs-3">{errorMsg}</p>
                )}

                {/* Table for doctor list */}
                <table className="table table-striped">
                  <thead>
                    <tr className="table-info">
                      <th scope="col">Full Name</th>
                      <th scope="col">DOB</th>
                      <th scope="col">Qualification</th>
                      <th scope="col">Specialist</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>
                      <th colspan="2" className="text-center" scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan={8} className="text-center">Loading...</td>
                      </tr>
                    ) : doctors.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="text-center">No records found</td>
                      </tr>
                    ) : (
                      doctors.map((doctor) => (
                        <tr key={doctor.id}>
                          <th scope="row">{doctor.fullName}</th>
                          <td>{doctor.dateOfBirth}</td>
                          <td>{doctor.qualification}</td>
                          <td>{doctor.specialist}</td>
                          <td>{doctor.email}</td>
                          <td>{doctor.phone}</td>
                          <td>
                            <a 
                              className="btn btn-sm btn-primary" 
                              href={`/edit_doctor.jsp?id=${doctor.id}`}
                            >
                              Edit
                            </a>
                          </td>
                          <td>
                            <a 
                              className="btn btn-sm btn-danger" 
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                handleDelete(doctor.id);
                              }}
                            >
                              Delete
                            </a>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .my-card {
            box-shadow: 0px 0px 10px 1px maroon;
          }
        `}
      </style>
    </div>
  );
};

export default ViewDoctor;