import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Column, ColumnDef, Row } from "@tanstack/react-table";
import { ArrowUpDown, Eye, PenBox, X } from "lucide-react";

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
export const columns: ColumnDef<RowData, string | number>[] = [
    {
        accessorKey: "index",
        header: "#",
        cell: ({ row }: { row: Row<RowData> }) => {
            return (
                <div className='font-bold text-foreground'>{parseInt(row.id) + 1}</div>
            )
        }
    },
    {
        accessorKey: "patientName",
        header: ({ column }: { column: Column<RowData> }) => {
            return (
                <Button
                    className='flex gap-2 items-center'
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Patient
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }: { row: Row<RowData> }) => {
            const { patientID, patientName, patientImage } = row.original
            return (
                <div className='flex items-center gap-2'>
                    <div className='size-12 rounded-full'>
                        <img className='size-full rounded-full object-cover border-2' src={patientImage} alt="" />
                    </div>
                    <div className='space-y-2'>
                        <p>{patientName}</p>
                        <Badge variant={'outline'} className={'text-primary'}>#{patientID}</Badge>
                    </div>
                </div>
            )
        }
    },
    {
        accessorKey: "date",
        header: ({ column }: { column: Column<RowData> }) => {
            return (
                <Button
                    className='flex gap-2 items-center'
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Date
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        }
    },
    {
        accessorKey: "time",
        header: ({ column }: { column: Column<RowData> }) => {
            return (
                <Button
                    className='flex gap-2 items-center'
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Time
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "doctorName",
        header: ({ column }: { column: Column<RowData> }) => {
            return (
                <Button
                    className='flex gap-2 items-center'
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Doctor
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }: { row: Row<RowData> }) => {
            const { doctorDesignation, doctorName } = row.original
            return (
                <div className='space-y-2'>
                    <p>{doctorName}</p>
                    <Badge variant={'outline'} className={'text-primary'}>{doctorDesignation}</Badge>
                </div>
            )
        }
    },
    {
        accessorKey: "necessity",
        header: "Necessity"
    },
    {
        accessorKey: "status",
        header: ({ column }: { column: Column<RowData> }) => {
            return (
                <Button
                    className='flex gap-2 items-center'
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Status
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }: { row: Row<RowData> }) => {
            const { status } = row.original
            return (
                <p className={`${status === "Success" ? 'text-green-400' : status === 'Cancelled' ? 'text-red-400' : status === 'Progress' ? 'text-accent' : 'text-slate-500'}`}>{status}</p>
            )
        }
    },
    {
        accessorKey: "action",
        header: () => {
            return (
                <div className='flex justify-end'>Actions</div>
            )
        },
        cell: () => {
            return (
                <div className='flex gap-2 items-center justify-end'>
                    <button className='border p-2 rounded-lg hover:bg-secondary hover:text-foreground'><Eye size={20} className='text-foreground hover:text-foreground' /></button>
                    <button className='border p-2 rounded-lg hover:bg-secondary hover:text-foreground'><PenBox size={20} className='text-foreground hover:text-foreground' /></button>
                    <button className='border p-2 rounded-lg hover:bg-secondary hover:text-foreground'><X size={20} className='text-foreground hover:text-foreground' /></button>
                </div>
            )
        }
    },
]