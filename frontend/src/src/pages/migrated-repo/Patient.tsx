import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/* -------------------------------------------------------------
   Types – match the real backend entities (only fields used here)
   ------------------------------------------------------------- */
interface Appointment {
  id: number;
  fullName: string;
  gender: string;
  age: string;
  appointmentDate: string;
  email: string;
  phone: string;
  diseases: string;
  status: string;
}

interface Doctor {
  id: number;
}

/* -------------------------------------------------------------
   Patient page – exact UI replica of patient.jsp
   ------------------------------------------------------------- */
const Patient: React.FC = () => {
  const navigate = useNavigate();

  /* ---- Authentication check (mirrors JSP redirect) ---- */
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  useEffect(() => {
    // The original JSP reads the doctor object from HttpSession.
    // Here we assume the same information is stored in localStorage
    // (or any client‑side store) as a JSON string under "doctorObj".
    const stored = localStorage.getItem("doctorObj");
    if (stored) {
      try {
        setDoctor(JSON.parse(stored) as Doctor);
      } catch {
        setDoctor(null);
      }
    } else {
      setDoctor(null);
    }
  }, []);

  /* ---- Redirect if not logged in (same as <c:redirect>) ---- */
  useEffect(() => {
    if (doctor === null) {
      navigate("/doctor/login", { replace: true });
    }
  }, [doctor, navigate]);

  /* ---- Success / error messages (mirrors session attributes) ---- */
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    // In the JSP the messages are stored in the session and removed after display.
    // We mimic that by reading from sessionStorage (or any storage you prefer).
    const succ = sessionStorage.getItem("successMsg");
    const err = sessionStorage.getItem("errorMsg");
    if (succ) {
      setSuccessMsg(succ);
      sessionStorage.removeItem("successMsg");
    }
    if (err) {
      setErrorMsg(err);
      sessionStorage.removeItem("errorMsg");
    }
  }, []);

  /* ---- Load appointments for the logged‑in doctor ---- */
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    if (!doctor) return; // guard – already redirected if missing

    // NOTE: The exact endpoint is defined in the existing Java backend.
    // Replace the URL below with the real one that returns a JSON array
    // of Appointment objects for the given doctor ID.
    const endpoint = `/api/appointments?doctorId=${doctor.id}`;

    fetch(endpoint, {
      method: "GET",
      credentials: "include", // preserve session cookies if any
    })
      .then(async (res) => {
        if (!res.ok) {
          const txt = await res.text();
          throw new Error(txt || "Failed to fetch appointments");
        }
        return res.json();
      })
      .then((data: Appointment[]) => {
        setAppointments(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoadError(err.message);
        setLoading(false);
      });
  }, [doctor]);

  /* ---- Render helpers ---- */
  const renderStatusAction = (appt: Appointment) => {
    if (appt.status === "Pending") {
      return (
        <a
          href={`comment.jsp?id=${appt.id}`}
          className="btn btn-success btn-sm"
        >
          Comment / Prescription
        </a>
      );
    }
    return (
      <a href="#!" className="btn btn-success btn-sm disabled">
        <i className="fa fa-comment"></i> Comment / Prescription
      </a>
    );
  };

  /* -------------------------------------------------------------
     JSX – faithful reproduction of the original JSP markup
     ------------------------------------------------------------- */
  return (
    <div>
      {/* ---- Global CSS includes (allcss.jsp) are assumed to be loaded
            elsewhere in the application (e.g., index.html). ---- */}
      {/* ---- Page‑specific CSS ---- */}
      <style>{`
        .my-card {
          box-shadow: 0px 0px 10px 1px maroon;
        }
      `}</style>

      {/* ---- Navbar include (navbar.jsp) is expected to be rendered
            by a layout component surrounding this page. ---- */}

      <div className="container p-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card my-card">
              <div className="card-body">
                <p className="text-center text-success fs-3">
                  Patient Details
                </p>

                {/* ---- Success / error messages ---- */}
                {successMsg && (
                  <p className="text-center text-success fs-5">{successMsg}</p>
                )}
                {errorMsg && (
                  <p className="text-center text-danger fs-5">{errorMsg}</p>
                )}

                {/* ---- Table (patient list) ---- */}
                {loading ? (
                  <p className="text-center">Loading appointments...</p>
                ) : loadError ? (
                  <p className="text-center text-danger">{loadError}</p>
                ) : appointments.length === 0 ? (
                  <p className="text-center">No records found.</p>
                ) : (
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col" style={{ paddingRight: "100px" }}>
                          Full Name
                        </th>
                        <th scope="col">Gender</th>
                        <th scope="col">Age</th>
                        <th scope="col">Appointment Date</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Diseases</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointments.map((ap) => (
                        <tr key={ap.id}>
                          <th>{ap.fullName}</th>
                          <td>{ap.gender}</td>
                          <td>{ap.age}</td>
                          <td>{ap.appointmentDate}</td>
                          <td>{ap.email}</td>
                          <td>{ap.phone}</td>
                          <td>{ap.diseases}</td>
                          <td>{ap.status}</td>
                          <td>{renderStatusAction(ap)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
                {/* ---- End of table ---- */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patient;