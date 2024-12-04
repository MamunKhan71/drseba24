"use client"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { ArrowDownToLine, ArrowUpToLine, Ban, CalendarClock, CalendarDays, ChevronDown, Clock, Columns, DollarSign, Droplets, Loader, PlusCircle } from 'lucide-react'
import { useState } from 'react'
import { columns } from './_components/columns'

import { Button } from "@/components/ui/button"
// import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
// import { SelectSeparator } from '@radix-ui/react-select'
import { CalendarPicker } from '@/components/CalendarPicker'
// import { NavigationTracker } from '../../_components/NavigationTracker'
// import { usePathname } from 'next/navigation'
// import Link from 'next/link'
// import { GiFemale, GiMale } from 'react-icons/gi'
import { ColumnFiltersState, RowSelectionState, SortingState, VisibilityState } from '@tanstack/react-table'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { NavigationTracker } from '../_components/NavigationTracker'
const PatientsPage = () => {
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
    const location = useLocation()

    const table = useReactTable({
        data,
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
        <div className='space-y-4'>
            <NavigationTracker pathname={location} />
            <div className='space-y-6 relative'>
                <div className='grid grid-cols-3 gap-6'>
                    {
                        dashOverview?.map((dash, index) => (
                            <>
                                <div key={index} className="relative flex flex-col justify-center  overflow-hidden rounded-xl shadow-lg">
                                    <div className="group flex justify-between relative cursor-pointer   overflow-hidden border rounded-xl bg-gradient-to-br from-primary to-secondary px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300">
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
                            </>
                        ))
                    }
                </div>
                <div>
                    <div className="w-full rounded-lg  text-slate-600 font-medium">

                        <div className="flex items-center py-4 gap-4">
                            <Input
                                placeholder="Filter by name, email, id..."
                                value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                                onChange={(event) =>
                                    table.getColumn("email")?.setFilterValue(event.target.value)
                                }
                                className="max-w-sm"
                            />

                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Sorty by.." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="new">
                                        <div className="flex items-center">
                                            <ArrowUpToLine size={12} className="mr-2" />
                                            New Patients
                                        </div>
                                    </SelectItem>
                                    <SelectItem value="old">
                                        <div className="flex items-center">
                                            <ArrowDownToLine size={12} className="mr-2" />
                                            Old Patients
                                        </div>
                                    </SelectItem>
                                    <SelectItem value="blood">
                                        <div className="flex items-center">
                                            <Droplets size={12} className="mr-2" />
                                            Blood Group
                                        </div>
                                    </SelectItem>
                                    <SelectItem value="age">
                                        <div className="flex items-center">
                                            <CalendarClock size={12} className="mr-2" />
                                            Age
                                        </div>
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Gender" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="male">
                                        <div className="flex items-center">
                                            {/* <GiMale size={12} className="mr-2" /> */}
                                            Male
                                        </div>
                                    </SelectItem>
                                    <SelectItem value="female">
                                        <div className="flex items-center">
                                            {/* <GiFemale size={12} className="mr-2" /> */}
                                            Female
                                        </div>
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Paid">
                                        <div className="flex items-center">
                                            <DollarSign size={12} className="mr-2" />
                                            Paid
                                        </div>
                                    </SelectItem>
                                    <SelectItem value="Pending">
                                        <div className="flex items-center">
                                            <Loader size={12} className="mr-2" />
                                            Pending
                                        </div>
                                    </SelectItem>
                                    <SelectItem value="Cancel">
                                        <div className="flex items-center">
                                            <Ban size={12} className="mr-2" />
                                            Cancel
                                        </div>
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <CalendarPicker className={''} />
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" className="ml-auto inline-flex gap-2 items-center">
                                        <Columns size={12} /> Columns <ChevronDown className="ml-2 h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    {table
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
                                        })}
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <Link to={'/dashboard/patients/add-patient'}><Button title='Add Patient' className='bg-secondary text-white hover:bg-primary hover:text-white'><PlusCircle size={20} /> Add Patient</Button></Link>

                        </div>
                        <div className="rounded-md bg-slate-50 p-4">
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
                                                        {flexRender(
                                                            cell.column.columnDef.cell,
                                                            cell.getContext()
                                                        )}
                                                    </TableCell>
                                                ))}
                                            </TableRow>
                                        ))
                                    ) : (
                                        <TableRow>
                                            <TableCell
                                                colSpan={columns.length}
                                                className="h-24 text-center"
                                            >
                                                No results.
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                        <div className="flex items-center justify-end space-x-2 py-4">
                            <div className="space-x-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => table.previousPage()}
                                    disabled={!table.getCanPreviousPage()}
                                >
                                    Previous
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => table.nextPage()}
                                    disabled={!table.getCanNextPage()}
                                >
                                    Next
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientsPage

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

type RowData = {
    id: string;
    status: string;
    email: string;
    blood: string;
    age: number;
    amount: string;
};
const data: RowData[] = [
    {
        "id": "P001",
        "status": "pending",
        "email": "john.doe@example.com",
        "blood": "A+",
        "age": 28,
        "amount": "1500.00"
    },
    {
        "id": "P002",
        "status": "paid",
        "email": "jane.smith@example.com",
        "blood": "O-",
        "age": 34,
        "amount": "2000.00"
    },
    {
        "id": "P003",
        "status": "cancel",
        "email": "mike.jones@example.com",
        "blood": "B+",
        "age": 45,
        "amount": "1200.50"
    },
    {
        "id": "P004",
        "status": "paid",
        "email": "emily.brown@example.com",
        "blood": "AB-",
        "age": 29,
        "amount": "1750.75"
    },
    {
        "id": "P005",
        "status": "pending",
        "email": "chris.wilson@example.com",
        "blood": "A-",
        "age": 22,
        "amount": "800.00"
    },
    {
        "id": "P005",
        "status": "pending",
        "email": "chris.wilson@example.com",
        "blood": "A-",
        "age": 22,
        "amount": "800.00"
    },
    {
        "id": "P005",
        "status": "pending",
        "email": "chris.wilson@example.com",
        "blood": "A-",
        "age": 22,
        "amount": "800.00"
    },
    {
        "id": "P005",
        "status": "pending",
        "email": "chris.wilson@example.com",
        "blood": "A-",
        "age": 22,
        "amount": "800.00"
    },
    {
        "id": "P005",
        "status": "pending",
        "email": "chris.wilson@example.com",
        "blood": "A-",
        "age": 22,
        "amount": "800.00"
    },
    {
        "id": "P005",
        "status": "pending",
        "email": "chris.wilson@example.com",
        "blood": "A-",
        "age": 22,
        "amount": "800.00"
    },
    {
        "id": "P005",
        "status": "pending",
        "email": "chris.wilson@example.com",
        "blood": "A-",
        "age": 22,
        "amount": "800.00"
    },
    {
        "id": "P006",
        "status": "cancel",
        "email": "laura.miller@example.com",
        "blood": "O+",
        "age": 38,
        "amount": "950.25"
    }
]
