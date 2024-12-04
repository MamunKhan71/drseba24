"use client"

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    // DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { AnimatePresence, motion } from 'framer-motion';
import { Archive, BadgePercent, BellIcon, BookmarkCheck, Briefcase, ChevronDown, ClipboardPlus, Edit, FileText, Headset, LayoutDashboard, LucideBriefcaseMedical, Moon, PlusCircle, School, Settings, User, UserCog, UserPen, UserPenIcon, UserRound, Users, Variable } from 'lucide-react';
// import { signOut, useSession } from 'next-auth/react';
// import Image from 'next/image';
// import Link from 'next/link';
import React, { useState } from 'react';
// import { NavigationTracker } from './_components/NavigationTracker';
// import { usePathname } from 'next/navigation';
import FloatingSpeedDial from '../FloatingSpeedDial';
import { Link, Outlet } from 'react-router-dom';


interface DashboardCategory {
    icon: React.ElementType;
    name: string;
    href: string;
}

interface DashboardProfile {
    icon: React.ElementType;
    name: string;
    href: string;
}
interface DashboardLayoutProps {
    children: React.ReactNode;
}
export default function MainLayout() {
    // const pathname = usePathname().split('/')
    // const pathnameText = pathname[pathname.length - 1].replace('-', " ").toUpperCase() || '/'
    // const { data } = useSession()
    const userRole = 'doctor'
    const toggleDashboard = () => setIsDashboardOpen(!isDashboardOpen)
    const toggleProfile = () => setIsProfileOpen(!isProfileOpen)
    const [isDashboardOpen, setIsDashboardOpen] = useState<boolean>(true)
    const [isProfileOpen, setIsProfileOpen] = useState<boolean>(true)
    const rolePermissions: Record<string, string[]> = {
        doctor: ["Overview", "Patients", "Appointments", "Prescriptions", "Personal Info", "Professional Info", "Settings", "Education"],
        admin: ["Overview", "Patients", "Doctors", "Appointments", "Lab Tests", "Receptionist", "Add Medicine", "Prescriptions"],
        // Add more roles and their permissions here
    };
    const dashboardCategories: DashboardCategory[] = [
        { icon: LayoutDashboard, name: 'Overview', href: '/dashboard' },
        { icon: Users, name: 'Patients', href: '/dashboard/patients' },
        { icon: UserRound, name: 'Doctors', href: '/dashboard/doctors' },
        { icon: LucideBriefcaseMedical, name: 'Appointments', href: '/dashboard/appointments' },
        { icon: Variable, name: 'Lab Tests', href: '/dashboard/lab-tests' },
        { icon: Variable, name: 'Receptionist', href: '/dashboard/receptions' },
        { icon: PlusCircle, name: 'Add Medicine', href: '/dashboard/add-medicine' },
        { icon: ClipboardPlus, name: 'Prescriptions', href: '/dashboard/prescriptions' },
    ]
    const generalRoutes = [
        {
            "name": "Invoices",
            "href": "#",
            "icon": FileText
        },
        {
            "name": "Campaigns",
            "href": "#",
            "icon": BadgePercent
        },
        {
            "name": "Services",
            "href": "#",
            "icon": Archive
        },
        {
            "name": "Customer Support",
            "href": "#",
            "icon": Headset
        },
        {
            "name": "Settings",
            "href": "/dashboard/settings",
            "icon": Settings
        }
    ]
    const filteredRoutes = generalRoutes.filter(routes => {
        const eligibleRoutes = rolePermissions[userRole]
        return eligibleRoutes.includes(routes.name)
    })

    const filteredDashboardCategories = dashboardCategories.filter(category => {
        const eligibleCategories = rolePermissions[userRole]
        return eligibleCategories?.includes(category.name)
    })
    const dashboardProfile: DashboardProfile[] = [
        { icon: User, name: 'Personal Info', href: '/dashboard/profile' },
        { icon: School, name: 'Education', href: '/dashboard/doctors/profile' },
        { icon: Briefcase, name: 'Professional Info', href: '/dashboard/edit-profile' },
        // { icon: BookmarkCheck, name: 'Settings', href: '/dashboard/my-bookings' },
    ]

    const filteredDashboardProfile = dashboardProfile.filter(profile => {
        const eligibleProfile = rolePermissions[userRole]
        return eligibleProfile.includes(profile.name)
    })

    return (
        <div className='flex relative  font-poppins'>
            <div className='basis-[300px] space-y-10 bg-primary min-h-screen p-8 pt-5'>
                {/* <Link to={'/'} className='flex items-center justify-start'>
                    <img className='w-32' src="/logo.svg" alt="" />
                </Link> */}
                <h1 className='text-2xl font-bold text-white'>DrSeba24</h1>
                <div>
                    <div className='space-y-4'>
                        <div className='space-y-3'>
                            <Button
                                variant="ghost"
                                onClick={toggleDashboard}
                                className="w-full justify-between text-white font-bold hover:bg-secondary hover:text-foreground"
                            >
                                <span className="inline-flex gap-2 items-center">
                                    <LayoutDashboard size={20} /> Dashboard
                                </span>

                                <ChevronDown
                                    size={20}
                                    className={`transform transition-transform duration-200 ${isDashboardOpen ? 'rotate-180' : ''
                                        }`}
                                />
                            </Button>
                            {isDashboardOpen && (
                                <ul
                                    className='space-y-2 ml-4'>
                                    {filteredDashboardCategories.map((category, index) => (
                                        <li key={index}>
                                            <Link
                                                to={category.href}
                                                key={`categories${index + 2}`}
                                            >
                                                <Button variant="ghost" className="w-full justify-start hover:bg-gradient-to-br hover:bg-secondary text-white hover:text-white">
                                                    <category.icon size={20} />
                                                    {category.name}
                                                </Button>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className='space-y-3'>
                            <Button
                                variant="ghost"
                                onClick={toggleProfile}
                                className="w-full justify-between text-white font-semibold hover:bg-secondary hover:text-white"
                            >
                                <span className="inline-flex gap-2 items-center">
                                    <UserPen size={20} /> Profile
                                </span>
                                <ChevronDown
                                    size={20}
                                    className={`transform transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''
                                        }`}
                                />
                            </Button>

                            {isProfileOpen && (
                                <ul
                                    className='space-y-2 ml-4 '>
                                    {filteredDashboardProfile.map((profile, index) => (
                                        <li key={index}>
                                            <Link
                                                to={profile.href}
                                                key={`profile${index + 3}`}
                                            >
                                                <Button variant="ghost" className="w-full justify-start hover:bg-gradient-to-br hover:bg-secondary text-white hover:text-white">
                                                    <profile.icon size={20} />
                                                    {profile.name}
                                                </Button>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        {
                            filteredRoutes?.map(routes => (
                                <div className='space-y-3'>
                                    <Link
                                        to={routes.href}
                                    >
                                        <Button variant="ghost" className="w-full justify-start hover:bg-gradient-to-br hover:bg-secondary text-white hover:text-white">
                                            <routes.icon size={20} /> {routes.name}
                                        </Button>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <div className='bg-primary h-16 w-full flex items-center justify-between pr-6'>
                    {/* <h1 className='inline-flex gap-2 items-center text-lg font-bold text-foreground'><Logs /> {pathnameText}</h1> */}
                    <div className='flex gap-4 items-center justify-end w-full'>
                        <div className='relative'>
                            <BellIcon className="rounded-full size-12 bg-secondary text-white p-3" />
                            <span className='rounded-full bg-primary text-white p-1 font-medium text-xs absolute -top-1 -right-1'>2+</span>
                        </div>
                        <div>
                            <Moon className="rounded-full size-12 bg-secondary text-white p-3" />
                        </div>
                        <div>
                            <DropdownMenu>
                                <div className='bg-secondary min-w-40 flex rounded-full items-center justify-between gap-2 p-0.5'>
                                    <DropdownMenuTrigger className='relative z-10 rounded-full size-12 text-foreground flex items-center justify-center'>
                                        {/* {
                                            data?.user?.image ? <>
                                                <img src={data?.user?.image} alt={data?.user?.name || ""} alt="" />
                                            </> : <>
                                                <UserCog />
                                            </>
                                        } */}
                                        <UserCog className='text-white' />
                                    </DropdownMenuTrigger>
                                    <div>
                                        <h1 className='pr-3 text-sm font-semibold text-white'>Hello, <span className='font-bold text-white'>
                                            {/* {data?.user?.name as string} */}
                                            Mamun
                                        </span></h1>
                                        {/* <span className='text-[11px]  text-foreground font-medium uppercase'>id: #pd-10c12tr</span> */}
                                    </div>
                                </div>
                                <DropdownMenuContent className="text-foreground">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Profile</DropdownMenuItem>
                                    <DropdownMenuItem>Billing</DropdownMenuItem>
                                    <DropdownMenuItem>Team</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="font-bold hover:cursor-pointer" onClick={() => signOut({ callbackUrl: '/auth/login' })}>Logout</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>
                <div className='p-6'>
                    <Outlet />
                </div>
            </div>
            <div>
                <FloatingSpeedDial />
            </div>
        </div>
    );
}
