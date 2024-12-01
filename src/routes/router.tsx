import MainLayout from "@/components/Layout/MainLayout";
import Dashboard from "@/pages/dashboard/Dashboard";
import DoctorPage from "@/pages/dashboard/doctors/Doctors";
import PatientsPage from "@/pages/dashboard/patients/PatientPage";
import LoginPage from "@/pages/login/Login";
import Register from "@/pages/register/Register";
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
            }
        ]
    }
])
export default router