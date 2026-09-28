import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";

/* ------------------------------------------------------------------
   Types – match the real backend response shape.
   Adjust the fields if the actual API differs.
------------------------------------------------------------------- */
interface Appointment {
  id: number;
  fullName: string;
  gender: string;
  age: string;
  appointmentDate: string;
  phone: string;
  diseases: string;
  doctorFullName: string;
  status: string;
}

/* ------------------------------------------------------------------
   Helper to read the logged‑in user from session storage / cookie.
   The original JSP checks `session.getAttribute("userObj")`.
   Adapt this logic to whatever client‑side auth mechanism you use.
------------------------------------------------------------------- */
function getLoggedUser(): any | null {
  // Example: user object stored as JSON string in localStorage
  const raw = localStorage.getItem("userObj");
  return raw ? JSON.parse(raw) : null;
}

/* ------------------------------------------------------------------
   ViewAppointment – React replica of view_appointment.jsp
------------------------------------------------------------------- */
const ViewAppointment: React.FC = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  /* --------------------------------------------------------------
     Authentication guard – mirrors the JSP `<c:if test="${empty userObj }">`
  -------------------------------------------------------------- */
  useEffect(() => {
    const user = getLoggedUser();
    if (!user) {
      // Redirect to login page (same as JSP redirect)
      navigate("/user_login.jsp", { replace: true });
    }
  }, [navigate]);

  /* --------------------------------------------------------------
     Data fetching – replace the placeholder URL with the real endpoint.
     The original JSP obtains data server‑side, so an equivalent API
     must exist (e.g. GET /api/appointments?userId=…).
  -------------------------------------------------------------- */
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        // TODO: replace with the actual backend endpoint
        const response = await fetch("/api/appointments", {
          credentials: "include", // send cookies / session
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data: Appointment[] = await response.json();
        setAppointments(data);
        setLoading(false);
      } catch (err: any) {
        console.error(err);
        setError(err.message ?? "Failed to load appointments");
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  /* --------------------------------------------------------------
     Optional: read flash messages from session storage (if your
     backend stores them there). The JSP removes them after display.
  -------------------------------------------------------------- */
  useEffect(() => {
    const success = sessionStorage.getItem("successMsg");
    const error = sessionStorage.getItem("errorMsg");
    if (success) {
      setSuccessMsg(success);
      sessionStorage.removeItem("successMsg");
    }
    if (error) {
      setErrorMsg(error);
      sessionStorage.removeItem("errorMsg");
    }
  }, []);

  return (
    <>
      {/* Global CSS / Bootstrap is assumed to be loaded elsewhere */}
      <Navbar />

      {/* Inline page‑specific CSS (exactly as in the JSP) */}
      <style>{`
        .my-card {
          box-shadow: 0px 0px 10px 1px maroon;
        }
        .my-bg-img {
          background: linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)),
            url("img/hospital1.jpg");
          height: 20vh;
          width: 100%;
          background-size: cover;
          background-repeat: no-repeat;
        }
        .myP-color {
          color: #000; /* fallback – original colour not defined */
        }
        .my-bg-color {
          background-color: #6c757d; /* Bootstrap secondary as placeholder */
        }
      `}</style>

      {/* ----------------------------------------------------------------
          Header background image (same markup as JSP)
      ---------------------------------------------------------------- */}
      <div className="container-fluid my-bg-img p-5">
        <p className="text-center fs-2 text-white"></p>
      </div>

      {/* ----------------------------------------------------------------
          Main content
      ---------------------------------------------------------------- */}
      <div className="container-fluid p-3">
        <p className="fs-2"></p>
        <div className="row">
          {/* ----------------------------------------------------------------
              Left column – Appointment table
          ---------------------------------------------------------------- */}
          <div className="col-md-9">
            <div className="card my-card">
              <div className="card-body">
                <p className="fw-bold text-center myP-color fs-4">
                  Appointment List
                </p>

                {/* Success / Error messages (mirrors commented‑out JSP block) */}
                {successMsg && (
                  <p className="text-center text-success fs-5">{successMsg}</p>
                )}
                {errorMsg && (
                  <p className="text-center text-danger fs-5">{errorMsg}</p>
                )}

                {/* Loading / Error / Empty states */}
                {loading && <p className="text-center">Loading…</p>}
                {error && (
                  <p className="text-center text-danger">
                    Error: {error}
                  </p>
                )}
                {!loading && !error && appointments.length === 0 && (
                  <p className="text-center">No appointments found.</p>
                )}

                {/* Table – rendered only when data is present */}
                {!loading && !error && appointments.length > 0 && (
                  <table className="table table-striped">
                    <thead>
                      <tr className="my-bg-color text-white">
                        <th scope="col">Full Name</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Age</th>
                        <th scope="col">Appointment Date</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Diseases</th>
                        <th scope="col">Doctor Name</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointments.map((appt) => (
                        <tr key={appt.id}>
                          <td>{appt.fullName}</td>
                          <td>{appt.gender}</td>
                          <td>{appt.age}</td>
                          <td>{appt.appointmentDate}</td>
                          <td>{appt.phone}</td>
                          <td>{appt.diseases}</td>
                          <td>{appt.doctorFullName}</td>
                          <td>
                            {appt.status === "Pending" ? (
                              <a href="#" className="btn btn-sm btn-warning">
                                Pending
                              </a>
                            ) : (
                              appt.status
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------------------
              Right column – static image (same as JSP)
          ---------------------------------------------------------------- */}
          <div className="col-md-3 p-3">
            <img
              alt=""
              src="img/wdoc.jpg"
              width={250}
              height="auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewAppointment;