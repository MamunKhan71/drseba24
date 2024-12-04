import { BellIcon, Calendar, HeartPulse, Stethoscope } from 'lucide-react'
// import { usePathname } from 'next/navigation'
// import { NavigationTracker } from '../_components/NavigationTracker'
import { useState } from 'react'
import {
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { columns } from '@/components/ui/columns'
import DashboardCard from './_components/DashboardCard'
import EarningsChart from './_components/EarningsChart'
import RecentTransactions from './_components/RecentTransactions'
import AppointmentRequests from './_components/AppointmentRequests'
import RecentPatients from './_components/RecentPatients'
import ProfileProgress from './ProfileProgress'
import { useLocation } from 'react-router'
import { NavigationTracker } from './_components/NavigationTracker'

interface Payment {
    id: string
    name: string
    date: string
    status: string
    method: string
    amount: number
}


export default function Dashboard() {
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = useState({})
    const [isCompleted, setIsCompleted] = useState(false)
    const location = useLocation()

    const table = useReactTable({
        data: Payment,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    return (
        <div className='w-full'>
            <div className='space-y-4'>
                <NavigationTracker pathname={location} />
                <div className='space-y-4'>
                    {
                        isCompleted ? <>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                {dashOverview.map((dash, index) => (
                                    <DashboardCard key={index} {...dash} />
                                ))}
                            </div>
                            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
                                <div className='lg:col-span-3 space-y-6'>
                                    <EarningsChart />
                                    <RecentTransactions table={table} columns={columns} />
                                </div>
                                <div className='space-y-6'>
                                    <AppointmentRequests />
                                    <RecentPatients />
                                </div>
                            </div>
                        </> : <>
                            <ProfileProgress />
                        </>
                    }

                </div>
            </div>
        </div>
    )
}


const dashOverview = [
    {
        "title": "Total Patient",
        "icon": HeartPulse,
        "count": 9
    },
    // {
    //     "title": "Total Doctor",
    //     "icon": Stethoscope,
    //     "count": 13
    // },
    {
        "title": "Appointment",
        "icon": Calendar,
        "count": 6
    },
    {
        "title": "Notifications",
        "icon": BellIcon,
        "count": 2
    }
]





const Payment = [
    {
        id: "1",
        name: "John Doe",
        date: "2024-10-01",
        status: "confirmed",
        method: "credit card",
        amount: 5000,
    },
    {
        id: "2",
        name: "Jane Smith",
        date: "2024-09-28",
        status: "pending",
        method: "bank transfer",
        amount: 7500,
    },
    {
        id: "3",
        name: "Robert Brown",
        date: "2024-10-05",
        status: "cancelled",
        method: "paypal",
        amount: 1200,
    },
    {
        id: "4",
        name: "Emily White",
        date: "2024-09-29",
        status: "confirmed",
        method: "credit card",
        amount: 3000,
    },
    {
        id: "5",
        name: "David Williams",
        date: "2024-10-02",
        status: "failed",
        method: "cash",
        amount: 4200,
    },
    {
        id: "6",
        name: "Susan Miller",
        date: "2024-10-03",
        status: "confirmed",
        method: "credit card",
        amount: 6700,
    },
];
