import MainLayout from "@/components/Layout/MainLayout";
import AllAppointments from "@/pages/dashboard/appointments/AllAppointments";
import Dashboard from "@/pages/dashboard/Dashboard";
import DoctorPage from "@/pages/dashboard/doctors/Doctors";
import DoctorProfile from "@/pages/dashboard/doctors/profile/page";
import PatientsPage from "@/pages/dashboard/patients/PatientPage";
import Education from "@/pages/dashboard/profile/education/Education";
import PersonalInformation from "@/pages/dashboard/ProfileSettings";
import Profession from "@/pages/dashboard/profile/profession/Profession";
import ForgetPassword from "@/pages/forget-password/ForgetPassword";
import LoginPage from "@/pages/login/Login";
import VerifyEmailPage from "@/pages/verify/Verify";
import { createBrowserRouter } from "react-router-dom";
import ProfileSettings from "@/pages/dashboard/ProfileSettings";
import Settings from "@/pages/dashboard/profile/Settings";
import Schedule from "@/pages/dashboard/profile/schedule/Schedule";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />
    },
    // {
    //     path: '/register',
    //     element: <Register />
    // },
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
                path: 'profile',
                element: <ProfileSettings />,
                children: [
                    {
                        index: true,
                        element: <ProfileSettings />
                    },
                    {
                        path: 'education',
                        element: <Education />
                    },
                    {
                        path: 'profession',
                        element: <Profession />
                    },
                    
                ]
            },
            {
                path: "schedule",
                element: <Schedule />
            },
            {
                path: 'appointments',
                element: <AllAppointments />
            },
            {
                path: 'settings',
                element: <Settings />
            }
        ]
    }
])
export default router