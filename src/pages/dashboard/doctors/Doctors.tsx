import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Bookmark, Calendar, CalendarClock, CalendarDays, Clock, CloudSun, DownloadCloudIcon, Hospital, Link, MapPin, Moon, Plus, Sun } from 'lucide-react'
import { useState } from 'react'

import { Button } from "@/components/ui/button"
import { Checkbox } from '@/components/ui/checkbox'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label'
import { useLocation } from "react-router"
import { NavigationTracker } from "../_components/NavigationTracker"
// import { usePathname } from 'next/navigation'
// import { NavigationTracker } from '../../_components/NavigationTracker'
const daysOfWeek = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
const DoctorPage = () => {
    const location = useLocation()
    type DayAvailability = {
        startTime: string;
        endTime: string;
    };

    const [selectedDays, setSelectedDays] = useState<Record<string, boolean>>(
        daysOfWeek.reduce((acc, day) => ({ ...acc, [day]: false }), {})
    );

    const [availability, setAvailability] = useState<Record<string, DayAvailability>>(
        daysOfWeek.reduce((acc, day) => ({ ...acc, [day]: { startTime: "", endTime: "" } }), {})
    );

    const handleCheckboxDayChange = (day: string) => {
        setSelectedDays((prev) => ({
            ...prev,
            [day]: !prev[day],
        }))
    }

    const handleTimeChange = (day: string, timeType: "startTime" | "endTime", value: string) => {
        setAvailability((prev) => ({
            ...prev,
            [day]: {
                ...prev[day],
                [timeType]: value,
            },
        }))
    }
    // const handleAvatarUpload = (event) => {
    //     const file = event.target.files[0]
    //     if (file) {
    //         const reader = new FileReader()
    //         reader.onloadend = () => {
    //             setAvatarUrl(reader.result)
    //         }
    //         reader.readAsDataURL(file)
    //     }
    // }
    return (
        <div className='space-y-4'>
            <NavigationTracker pathname={location} />
            <div className='space-y-12'>
                <div className='grid grid-cols-3 gap-6'>
                    {
                        dashOverview?.map((dash, index) => (
                            <div key={index} className="relative flex flex-col justify-center overflow-hidden rounded-xl shadow-lg">
                                <div className="group flex justify-between relative cursor-pointer overflow-hidden border rounded-xl bg-gradient-to-br from-primary to-secondary px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300">
                                    <span className="absolute top-10 right-6 z-0 h-20 w-20 rounded-full bg-primary transition-all duration-300 group-hover:scale-[12]" />
                                    <div className='text-white relative z-20'>
                                        <h1 className='font-bold text-5xl text-left drop-shadow-md'>{dash.count}</h1>
                                        <p className='font-bold text-xl drop-shadow-md'>{dash.title}</p>
                                    </div>
                                    <div className="relative z-10">
                                        <span className="grid drop-shadow-md h-20 w-20 place-items-center rounded-full bg-secondary transition-all duration-300 group-hover:bg-secondary">
                                            <dash.icon color='#ffff' size={40} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <div className="flex items-center py-4 gap-4">
                        <Input
                            placeholder="Filter by name, email, id..."
                            // onChange={(event) =>
                            //     table.getColumn("email")?.setFilterValue(event.target.value)
                            // }
                            className="max-w-sm"
                        />
                        <Select>
                            <SelectTrigger className="w-[300px]">
                                <SelectValue placeholder="Select Hospital Branch" />
                            </SelectTrigger>
                            <SelectContent>
                                {branches.map((branch, index) => (
                                    <SelectItem key={index} value={branch}>
                                        {branch}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Department" />
                            </SelectTrigger>
                            <SelectContent>
                                {
                                    departments?.map((dept, index) => (
                                        <SelectItem key={index} value={dept}>
                                            {dept}
                                        </SelectItem>
                                    ))
                                }
                            </SelectContent>
                        </Select>
                        <Select>
                            <SelectTrigger className="w-full max-w-xs border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 flex items-center gap-2">
                                <SelectValue placeholder="Select Availability" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="morning">
                                    <div className="flex items-center gap-2">
                                        <Sun className="h-4 w-4" /> Morning (8:00 AM - 12:00 PM)
                                    </div>
                                </SelectItem>
                                <SelectItem value="afternoon">
                                    <div className="flex items-center gap-2">
                                        <CloudSun className="h-4 w-4 " /> Afternoon (12:00 PM - 4:00 PM)
                                    </div>
                                </SelectItem>
                                <SelectItem value="evening">
                                    <div className="flex items-center gap-2">
                                        <Moon className="h-4 w-4 " /> Evening (4:00 PM - 8:00 PM)
                                    </div>
                                </SelectItem>
                                <SelectItem value="weekend">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4" /> Weekend Only
                                    </div>
                                </SelectItem>
                            </SelectContent>
                        </Select>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="ml-auto inline-flex gap-2 items-center bg-secondary text-foreground hover:bg-primary">
                                    Export <DownloadCloudIcon size={20} />
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align="end">
                                {/* {table
                                .getAllColumns()
                                .filter((column) => column.getCanHide())
                                .map((column) => {
                                    return (
                                        <DropdownMenuCheckboxItem
                                            key={column.id}
                                            className="capitalize"
                                            checked={column.getIsVisible()}
                                            onCheckedChange={(value) =>
                                                column.toggleVisibility(!!value)
                                            }
                                        >
                                            {column.id}
                                        </DropdownMenuCheckboxItem>
                                    )
                                })} */}
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className="bg-blue-500 text-foreground inline-flex gap-2 hover:bg-secondary"><Plus /> Add Doctor</Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl bg-white">
                                <DialogHeader>
                                    <DialogTitle>Add Doctor</DialogTitle>
                                    <DialogDescription>
                                        Add a new appointment in 10 seconds
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="flex items-center justify-center w-full">
                                    <div className="space-y-4 w-full">
                                        <div className="border rounded-lg p-6 space-y-4">
                                            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                                                <div className="w-full text-slate-500 text-xl font-medium col-span-2">
                                                    <Label>Profile Photo</Label>
                                                    <Input type="file"></Input>
                                                </div>
                                                <div className="w-full text-slate-500 text-xl font-medium">
                                                    <Label>First Name</Label>
                                                    <Input />
                                                </div>
                                                <div className="w-full text-slate-500 text-xl font-medium">
                                                    <Label>Last Name</Label>
                                                    <Input />
                                                </div>
                                                <div className="w-full text-slate-500 text-xl font-medium">
                                                    <Label>Email</Label>
                                                    <Input />
                                                </div>
                                                <div className="w-full text-slate-500 text-xl font-medium">
                                                    <Label>Phone</Label>
                                                    <Input />
                                                </div>
                                                <div className="w-full text-slate-500 text-xl font-medium">
                                                    <Label>Department</Label>
                                                    <Select>
                                                        <SelectTrigger className="w-full">
                                                            <SelectValue placeholder="Select Department" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="newest">Newest</SelectItem>
                                                            <SelectItem value="oldest">Oldest</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="w-full text-slate-500 text-xl font-medium">
                                                    <Label>Gender *</Label>
                                                    <Select>
                                                        <SelectTrigger className="w-full">
                                                            <SelectValue placeholder="Select Gender" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="male">Male</SelectItem>
                                                            <SelectItem value="female">Female</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div>
                                                    <Label className="text-slate-600 font-medium text-sm">Available Days</Label>
                                                    <div className="space-y-2 mt-2">
                                                        {Object.keys(selectedDays).map((day) => (
                                                            <div key={day} className="flex items-center space-x-2">
                                                                <Checkbox
                                                                    id={day}
                                                                    checked={selectedDays[day]}
                                                                    onCheckedChange={() => handleCheckboxDayChange(day)}
                                                                />
                                                                <Label className="text-slate-500" htmlFor={day}>{day}</Label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="space-y-2 w-full">
                                                    <Label className="text-slate-600 font-medium text-sm">Time Ranges</Label>
                                                    {daysOfWeek.map((day) => (
                                                        selectedDays[day] && (
                                                            <div key={day} className="flex items-center gap-4 w-full justify-between">
                                                                <Label className="text-xs font-medium text-slate-700 w-20">{day}</Label>
                                                                <Input
                                                                    id={`${day}-start`}
                                                                    type="time"
                                                                    className="w-24 p-1 text-xs"
                                                                    value={availability[day].startTime}
                                                                    onChange={(e) => handleTimeChange(day, "startTime", e.target.value)}
                                                                />
                                                                <span className="text-slate-500 text-xs">to</span>
                                                                <Input
                                                                    id={`${day}-end`}
                                                                    type="time"
                                                                    className="w-24 p-1 text-xs"
                                                                    value={availability[day].endTime}
                                                                    onChange={(e) => handleTimeChange(day, "endTime", e.target.value)}
                                                                />
                                                            </div>
                                                        )
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button className="w-full bg-blue-500 text-foreground hover:bg-primary">Add Doctor</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                    </div>
                </div>
                <div className='space-y-4'>
                    <div className='grid grid-cols-4 gap-6'>
                        {
                            [1, 5, 5, 5, 2].map((item, index) => (
                                <div key={index}
                                    className="w-full border bg-white rounded-lg overflow-hidden"
                                >
                                    <div className="relative h-32 bg-gray-50 text-foreground">
                                        <div className="absolute inset-0  opacity-50"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-6 ">
                                            <div className='flex gap-4 items-start'>
                                                <img className='size-20 rounded-lg' src="https://randomuser.me/api/portraits/men/64.jpg" alt="" />
                                                <div>
                                                    <h2 className="text-md font-bold">Professor Dr. Md. Ayub Ali Chowdhury</h2>
                                                    <p className="text-sm opacity-90">Medicine & Nephrology</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <div className="col-span-2 space-y-4">
                                            <div className="space-y-2">
                                                <div className='flex gap-2 '>
                                                    <Hospital className='text-slate-600' size={16} />
                                                    <div className="flex items-center justify-start gap-2 flex-wrap text-xs text-slate-500 font-medium">
                                                        <p>MBBS</p>
                                                        <p>FCPS (Medicine)</p>
                                                        <p>MD (Nephrology)</p>
                                                        <p>Gold Medalist</p>
                                                    </div>
                                                </div>
                                                <p className="flex items-center text-sm text-slate-500 font-medium"><MapPin className="h-4 w-4 mr-2" /> National Institute of Kidney Disease</p>
                                            </div>
                                            <div className='p-2 rounded-lg border bg-blue-50'>
                                                <p className='text-xs text-justify text-slate-500 font-medium'>A renowned Medicine & Nephrology specialist, Professor Dr. Md. Ayub Ali Chowdhury excels in treating kidney diseases.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-4 py-4 bg-gray-50 flex justify-end">
                                        <div className="relative w-full">
                                            <div className='flex gap-2 justify-between w-full'>
                                                <Button className=" bg-gradient-to-r from-blue-500 to-blue-600 text-foreground inline-flex gap-2 items-center"><Link size={16} /> View Profile</Button>
                                                <Button className=" bg-gradient-to-r from-blue-500 to-blue-600 text-foreground inline-flex gap-2 items-center"><Bookmark size={16} /> Book Appointment</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorPage
const branches = [
    "Ibn Sina Diagnostic & Imaging Center, Dhanmondi",
    "Ibn Sina Specialized Hospital, Dhanmondi",
    "Ibn Sina Medical Imaging Center, Zigatola",
    "Ibn Sina Medical College Hospital, Kallyanpur",
    "Ibn Sina Diagnostic & Consultation Center, Mirpur",
    "Ibn Sina D-Lab & Consultation Center, Doyagonj",
    "Ibn Sina Diagnostic & Consultation Center, Badda",
    "Ibn Sina Diagnostic & Consultation Center, Uttara",
    "Ibn Sina Diagnostic Center, Lalbagh",
    "Ibn Sina Hospital & Diagnostic Center, Jashore",
    "Ibn Sina Diagnostic & Consultation Center, Bogura",
    "Ibn Sina Diagnostic & Consultation Center, Malibagh",
    "Ibn Sina Diagnostic & Consultation Center, Savar",
    "Ibn Sina Diagnostic & Consultation Center, Keraniganj",
    "Ibn Sina Diagnostic & Consultation Center, Chattogram",
    "Ibn Sina Diagnostic & Consultation Center, Cumilla",
    "Ibn Sina Diagnostic & Consultation Center, Rajshahi",
    "Ibn Sina Diagnostic & Consultation Center, Jatrabari"
]
const departments = [
    "Medicine & Nephrology",
    "Cardiology",
    "Respiratory Medicine",
    "Psychiatry",
    "General Surgery",
    "Orthopedic Surgery",
    "Spine Surgery",
    "Neurosurgery",
    "Oncology",
    "Urology",
    "Gynecology & Obstetrics",
    "Skin",
    "ENT",
    "Pediatric Hematology & Oncology",
    "Pediatrics",
    "Pediatric Surgery",
    "Pediatric Pulmonology",
    "Nephrology",
    "Pediatric Neurology",
    "Ophthalmology",
    "Dental",
    "Hematology",
    "Anesthesiology & Pain",
    "Natural Medicine",
    "Pain Physiotherapy & Rehab",
    "Diabetes",
    "Nutrition & Food",
    "Physical Medicine & Rehabilitation",
    "Rheumatology",
    "Neurology",
    "Gastroenterology",
    "Liver & Hepatobiliary",
    "Colorectal Surgery",
    "Thoracic Surgery",
    "Cardiac Surgery",
    "Plastic Surgery & Burn",
    "Endocrinology",
    "Vascular Surgery",
    "Breast Surgery"
]
const dashOverview = [
    {
        "title": "Today Patients",
        "icon": Clock,
        "count": 9
    },
    {
        "title": "Monthly Patients",
        "icon": CalendarClock,
        "count": 13
    },
    {
        "title": "Yearly Patients",
        "icon": CalendarDays,
        "count": 6
    },

]