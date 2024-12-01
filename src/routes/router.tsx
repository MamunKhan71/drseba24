import MainLayout from "@/components/Layout/MainLayout";
import AllAppointments from "@/pages/dashboard/appointments/AllAppointments";
import Dashboard from "@/pages/dashboard/Dashboard";
import DoctorPage from "@/pages/dashboard/doctors/Doctors";
import PatientsPage from "@/pages/dashboard/patients/PatientPage";
import ForgetPassword from "@/pages/forget-password/ForgetPassword";
import LoginPage from "@/pages/login/Login";
import Register from "@/pages/register/Register";
import VerifyEmailPage from "@/pages/verify/Verify";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/forget-password',
        element: <ForgetPassword />
    },
    {
        path: '/verify',
        element: <VerifyEmailPage />
    },
    {
        path: '/dashboard',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: 'patients',
                element: <PatientsPage />
            },
            {
                path: 'doctors',
                element: <DoctorPage />
            },
            {
                path: 'appointments',
                element: <AllAppointments />
            }
        ]
    }
])
export default router