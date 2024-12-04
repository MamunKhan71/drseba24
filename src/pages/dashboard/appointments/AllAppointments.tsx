import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Textarea } from '@/components/ui/textarea'
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { CalendarIcon, LayoutGrid, LayoutList, PlusIcon } from 'lucide-react'
import { useState } from 'react'
// import { NavigationTracker } from '../../_components/NavigationTracker'
// import { usePathname } from 'next/navigation'
import { SortingState } from '@tanstack/react-table'
import { useLocation } from 'react-router'
import { NavigationTracker } from '../_components/NavigationTracker'
import { columns } from './_components/columns'
const AllAppointments = () => {
    const [sorting, setSorting] = useState<SortingState>([])
    const location = useLocation().pathname

    const table = useReactTable({
        data: appointments,
        columns,
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting
        }

    })
    return (
        <div className='space-y-4'>
            <NavigationTracker pathname={location} />
            <div className='space-y-6'>
                <div className='flex justify-end items-center'>
                    <Dialog>
                        <DialogTrigger>
                            <Button className="inline-flex gap-2 items-center justify-center bg-secondary hover:bg-primary rounded-full text-white"><PlusIcon size={16} /> New Appointment</Button>
                        </DialogTrigger>
                        <DialogContent className='bg-white max-w-4xl'>
                            <div className='flex items-center justify-center w-full'>
                                <div className='space-y-4 w-full'>
                                    <h1 className='font-black text-foreground text-xl text-center'>Book New Appointment</h1>
                                    <h1 className='font-semibold text-slate-400 text-sm text-center'>Request a new appointment in 10 seconds</h1>
                                    <div className='border rounded-lg p-6 space-y-4 '>
                                        <h1 className='font-black text-foreground text-xl'>Patient Info</h1>
                                        <hr />
                                        <div className='grid grid-cols-2 gap-x-6 gap-y-4'>
                                            <div className='w-full text-slate-500 text-xl font-medium'>
                                                <Label>Name *</Label>
                                                <Input>

                                                </Input>
                                            </div>
                                            <div className='w-full text-slate-500 text-xl font-medium'>
                                                <Label>Age *</Label>
                                                <Input>

                                                </Input>
                                            </div>
                                            <div className='w-full text-slate-500 text-xl font-medium'>
                                                <Label>Weight *</Label>
                                                <Input>

                                                </Input>
                                            </div>
                                            <div className='w-full text-slate-500 text-xl font-medium'>
                                                <Label>Gender *</Label>
                                                <Input>

                                                </Input>
                                            </div>
                                            <div className='w-full text-slate-500 text-xl font-medium'>
                                                <Label>Phone *</Label>
                                                <Input>

                                                </Input>
                                            </div>
                                            <div className='w-full text-slate-500 text-xl font-medium'>
                                                <Label>Email</Label>
                                                <Input>

                                                </Input>
                                            </div>
                                            <h1 className='font-black text-foreground text-xl col-span-2'>Doctor Info</h1>
                                            <hr className='col-span-2' />
                                            <div className='w-full text-slate-500'>
                                                <Label>Department</Label>
                                                <Select>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Status"></SelectValue>
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="Available">
                                                            Gastroenterologist
                                                        </SelectItem>
                                                        <SelectItem value="Out of stock">
                                                            Medicine
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className='w-full text-slate-500'>
                                                <Label>Doctor</Label>
                                                <Select>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Status"></SelectValue>
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="Available">
                                                            Md. Mamun
                                                        </SelectItem>
                                                        <SelectItem value="Out of stock">
                                                            Zarin Mostafa
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className='w-full text-slate-500 flex flex-col gap-2'>
                                                <Label htmlFor="expirationDate">Appointment Date</Label>
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                            variant={"outline"}
                                                            className="w-full pl-3 text-left font-normal"
                                                        >
                                                            <span className="truncate">Select Date</span>
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </PopoverTrigger>

                                                    {/* Adjust PopoverContent */}
                                                    <PopoverContent className="w-full p-0" align="end">
                                                        <div className="w-full">
                                                            <Calendar
                                                                mode="single"
                                                                selected={new Date()}
                                                                // onSelect={field.onChange}
                                                                disabled={(date) => date < new Date()}
                                                                initialFocus
                                                                className="w-full" // Ensures Calendar takes full width
                                                            />
                                                        </div>
                                                    </PopoverContent>
                                                </Popover>
                                            </div>
                                            <div className='w-full text-slate-500'>
                                                <Label>Time</Label>
                                                <Select>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Status"></SelectValue>
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {
                                                            bookingTime?.map((time, index) =>
                                                                <SelectItem key={index} value={time}>
                                                                    {time}
                                                                </SelectItem>
                                                            )
                                                        }
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className='w-full text-slate-500 col-span-2'>
                                                <Label>Problem Statement</Label>
                                                <Textarea></Textarea>
                                            </div>
                                            <div className='w-full text-white col-span-2'>
                                                <Button className="w-full bg-primary text-white hover:bg-primary">Book Appointment</Button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
                <div>
                    <div className='flex items-center gap-6 justify-end'>
                        <div className="flex items-center py-4 gap-4">
                            <Input
                                placeholder="Search Appointments"
                                // onChange={(event) =>
                                //     table.getColumn("email")?.setFilterValue(event.target.value)
                                // }
                                className="max-w-sm"
                            />
                            <Select>
                                <SelectTrigger className="w-[300px]">
                                    <SelectValue placeholder="Sort by" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value='newest'>Newest</SelectItem>
                                    <SelectItem value='oldest'>Oldest</SelectItem>
                                </SelectContent>
                            </Select>
                            <div className='border rounded-md p-[3px] flex items-center gap-2 justify-center'>
                                <button className='border rounded-sm p-0.5 bg-primary text-white'><LayoutList size={22} /></button>
                                <button className='border rounded-sm p-0.5 text-foreground'><LayoutGrid size={22} /></button>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gray-50 p-2 rounded-lg font-semibold text-slate-500'>
                        <Table>
                            <TableHeader>
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <TableRow key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => {
                                            return (
                                                <TableHead key={header.id}>
                                                    {header.isPlaceholder
                                                        ? null
                                                        : flexRender(
                                                            header.column.columnDef.header,
                                                            header.getContext()
                                                        )}
                                                </TableHead>
                                            )
                                        })}
                                    </TableRow>
                                ))}
                            </TableHeader>
                            <TableBody>
                                {table.getRowModel().rows?.length ? (
                                    table.getRowModel().rows.map((row) => (
                                        <TableRow
                                            key={row.id}
                                            data-state={row.getIsSelected() && "selected"}
                                        >
                                            {row.getVisibleCells().map((cell) => (
                                                <TableCell key={cell.id}>
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={columns.length} className="h-24 text-center">
                                            No results.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AllAppointments

interface RowData {
    // index: string;
    patientName: string;
    status: string;
    necessity: string;
    doctorName: string;
    time: string;
    date: string;
    patientID: string;
    patientImage: string;
    doctorDesignation: string;
}
const appointments: RowData[] = [
    {
        "patientID": "P-1001",
        "patientName": "Md. Arif Hossain",
        "date": "2024-10-20",
        "time": "10:00 AM",
        "doctorName": "Dr. Tanvir Ahmed",
        "doctorDesignation": "General Physician",
        "necessity": "General Check-up",
        "status": "Success",
        "patientImage": "https://res.cloudinary.com/dz3kxnsxr/image/upload/v1725401246/1000_F_84588657_bWFCviijaLzBAQ5Yah2QkhMdBL8ueic5_ny2knn.jpg"
    },
    {
        "patientID": "P-1002",
        "patientName": "Sabrina Islam",
        "date": "2024-10-21",
        "time": "02:30 PM",
        "doctorName": "Dr. Nusrat Jahan",
        "doctorDesignation": "Pediatrician",
        "necessity": "Pediatric Consultation",
        "status": "Pending",
        "patientImage": "https://res.cloudinary.com/dz3kxnsxr/image/upload/v1725401248/portrait-young-man-with-beard-studio-shot_949828-4306_nnaihg.jpg"
    },
    {
        "patientID": "P-1003",
        "patientName": "Kamal Uddin",
        "date": "2024-10-22",
        "time": "11:15 AM",
        "doctorName": "Dr. Masud Rana",
        "doctorDesignation": "Diabetologist",
        "necessity": "Diabetes Follow-up",
        "status": "Progress",
        "patientImage": "https://res.cloudinary.com/dz3kxnsxr/image/upload/v1725401247/shutterstock_149962697_uok97i.jpg"
    },
    {
        "patientID": "P-1004",
        "patientName": "Razia Khatun",
        "date": "2024-10-20",
        "time": "01:45 PM",
        "doctorName": "Dr. Shireen Akhter",
        "doctorDesignation": "Orthopedist",
        "necessity": "Joint Pain Check-up",
        "status": "Success",
        "patientImage": "https://res.cloudinary.com/dz3kxnsxr/image/upload/v1725401244/pexels-photo-614810.jpeg_aex0b3.jpg"
    },
    {
        "patientID": "P-1005",
        "patientName": "Abdullah Al Mamun",
        "date": "2024-10-23",
        "time": "09:30 AM",
        "doctorName": "Dr. Kamrul Islam",
        "doctorDesignation": "Cardiologist",
        "necessity": "Cardiac Disease Follow-up",
        "status": "Success",
        "patientImage": "https://res.cloudinary.com/dz3kxnsxr/image/upload/v1725401246/1000_F_84588657_bWFCviijaLzBAQ5Yah2QkhMdBL8ueic5_ny2knn.jpg"
    },
    {
        "patientID": "P-1006",
        "patientName": "Farhana Rahman",
        "date": "2024-10-24",
        "time": "04:00 PM",
        "doctorName": "Dr. Nazia Haque",
        "doctorDesignation": "Dermatologist",
        "necessity": "Skin Allergy Consultation",
        "status": "Pending",
        "patientImage": "https://res.cloudinary.com/dz3kxnsxr/image/upload/v1725401248/portrait-young-man-with-beard-studio-shot_949828-4306_nnaihg.jpg"
    },
    {
        "patientID": "P-1007",
        "patientName": "Hasan Mahmud",
        "date": "2024-10-25",
        "time": "12:00 PM",
        "doctorName": "Dr. Jamil Ahmed",
        "doctorDesignation": "Dentist",
        "necessity": "Routine Dental Check-up",
        "status": "Success",
        "patientImage": "https://res.cloudinary.com/dz3kxnsxr/image/upload/v1725401247/shutterstock_149962697_uok97i.jpg"
    },
    {
        "patientID": "P-1008",
        "patientName": "Shahida Akhter",
        "date": "2024-10-26",
        "time": "03:15 PM",
        "doctorName": "Dr. Sadia Karim",
        "doctorDesignation": "Gynecologist",
        "necessity": "Pregnancy Follow-up",
        "status": "Progress",
        "patientImage": "https://res.cloudinary.com/dz3kxnsxr/image/upload/v1725401244/pexels-photo-614810.jpeg_aex0b3.jpg"
    },
    {
        "patientID": "P-1009",
        "patientName": "Md. Imran Hossain",
        "date": "2024-10-27",
        "time": "10:45 AM",
        "doctorName": "Dr. Mahbubur Rahman",
        "doctorDesignation": "Dentist",
        "necessity": "Toothache Consultation",
        "status": "Cancelled",
        "patientImage": "https://res.cloudinary.com/dz3kxnsxr/image/upload/v1725401246/1000_F_84588657_bWFCviijaLzBAQ5Yah2QkhMdBL8ueic5_ny2knn.jpg"
    },
    {
        "patientID": "P-1010",
        "patientName": "Tasnim Akhter",
        "date": "2024-10-28",
        "time": "11:30 AM",
        "doctorName": "Dr. Nilufa Begum",
        "doctorDesignation": "ENT Specialist",
        "necessity": "ENT Consultation",
        "status": "Success",
        "patientImage": "https://res.cloudinary.com/dz3kxnsxr/image/upload/v1725401248/portrait-young-man-with-beard-studio-shot_949828-4306_nnaihg.jpg"
    }
]

const bookingTime = [
    "09:00 AM",
    "09:15 AM",
    "09:30 AM",
    "09:45 AM",
    "10:00 AM",
    "10:15 AM",
    "10:30 AM",
    "10:45 AM",
    "11:00 AM",
    "11:15 AM",
    "11:30 AM",
    "11:45 AM",
    "12:00 PM",
    "12:15 PM",
    "12:30 PM",
    "12:45 PM",
    "01:00 PM",
    "01:15 PM",
    "01:30 PM",
    "01:45 PM",
    "02:00 PM",
    "02:15 PM",
    "02:30 PM",
    "02:45 PM",
    "03:00 PM",
    "03:15 PM",
    "03:30 PM",
    "03:45 PM",
    "04:00 PM",
    "04:15 PM",
    "04:30 PM",
    "04:45 PM",
    "05:00 PM"
]