import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AdminLoginComponent from './AdminLoginComponent';
import ChangePassword from './src/pages/migrated-repo/ChangePassword';
import DoctorLogin from './src/pages/migrated-repo/DoctorLogin';
import IndexComponent from './IndexComponent';
import Signup from './src/pages/migrated-repo/Signup';
import UserAppointmentComponent from './UserAppointmentComponent';
import UserLogin from './src/pages/migrated-repo/UserLogin';
import ViewAppointment from './src/pages/migrated-repo/ViewAppointment';
import AdminDoctorComponent from './AdminDoctorComponent';
import AdminEditDoctorComponent from './AdminEditDoctorComponent';
import AdminIndexComponent from './AdminIndexComponent';
import AdminNavbarComponent from './AdminNavbarComponent';
import AdminPatientComponent from './AdminPatientComponent';
import ViewDoctor from './src/pages/migrated-repo/ViewDoctor';
import ComponentAllcssComponent from './ComponentAllcssComponent';
import Footer from './src/components/layout/Footer';
import ComponentFootersimpleComponent from './ComponentFootersimpleComponent';
import ComponentNavbarComponent from './ComponentNavbarComponent';
import DoctorCommentComponent from './DoctorCommentComponent';
import DoctorEditProfileComponent from './DoctorEditProfileComponent';
import DoctorIndexComponent from './DoctorIndexComponent';
import Navbar from './src/components/layout/Navbar';
import Patient from './src/pages/migrated-repo/Patient';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="modern-app-root">
        <header className="app-nav" style={{ padding: '1rem', borderBottom: '1px solid #e2e8f0', display: 'flex', gap: '1rem' }}>
          <Link to="/">Home</Link>
        </header>
        <main className="app-main-content">
          <Routes>
        <Route path="/" element={<AdminLoginComponent />} />
        <Route path="/adminlogin" element={<AdminLoginComponent />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/doctorlogin" element={<DoctorLogin />} />
        <Route path="/index" element={<IndexComponent />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/userappointment" element={<UserAppointmentComponent />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/viewappointment" element={<ViewAppointment />} />
        <Route path="/admindoctor" element={<AdminDoctorComponent />} />
        <Route path="/admineditdoctor" element={<AdminEditDoctorComponent />} />
        <Route path="/adminindex" element={<AdminIndexComponent />} />
        <Route path="/adminnavbar" element={<AdminNavbarComponent />} />
        <Route path="/adminpatient" element={<AdminPatientComponent />} />
        <Route path="/viewdoctor" element={<ViewDoctor />} />
        <Route path="/allcss" element={<ComponentAllcssComponent />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/footersimple" element={<ComponentFootersimpleComponent />} />
        <Route path="/navbar" element={<ComponentNavbarComponent />} />
        <Route path="/doctorcomment" element={<DoctorCommentComponent />} />
        <Route path="/doctoreditprofile" element={<DoctorEditProfileComponent />} />
        <Route path="/doctorindex" element={<DoctorIndexComponent />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/patient" element={<Patient />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
