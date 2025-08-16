import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Landing from "./pages/Landing/Landing.page";
import SignUp from "./pages/Auth/Signup.page";
import Login from "./pages/Auth/Login.page";
import JobSeekerDashboard from "./pages/JobSeeker/JobSeekerDashboard.page";
import JobDetails from "./pages/JobSeeker/JobDetails.page";
import SavedJobs from "./pages/JobSeeker/SavedJobs.page";
import UserProfile from "./pages/JobSeeker/UserProfile.page";
import ProtectedRoute from "./routes/ProtectedRoute.route";
import EmployerDashboard from "./pages/Employer/EmployerDashboard.page";
import JobPostingForm from "./pages/Employer/JobPostingForm.page";
import ManageJobs from "./pages/Employer/ManageJobs.page";
import ApplicationViewer from "./pages/Employer/ApplicationViewer.page";
import EmployerProfile from "./pages/Employer/EmployerProfile.page";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          <Route path="/find-jobs" element={<JobSeekerDashboard />} />
          <Route path="/job/:jobId" element={<JobDetails />} />
          <Route path="/bookmarks" element={<SavedJobs /> } />
          <Route path="/profile" element={<UserProfile />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute requiredRole="employer" />}>
            <Route path="/employer/dashboard" element={<EmployerDashboard />} />
            <Route path="/post-job" element={<JobPostingForm />} />
            <Route path="/manage-jobs" element={<ManageJobs />} />
            <Route path="/applicants" element={<ApplicationViewer />} />
            <Route path="/company-profile" element={<EmployerProfile />} />
          </Route>

          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>

      {/* Toaster */}
      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "13px",
          },
        }}
      />
    </div>
  );
};

export default App;
