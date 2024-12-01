import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ArrowUpDown, Eye, MoreHorizontal, PenBox, X } from "lucide-react";
import { Row, ColumnDef, Column } from "@tanstack/react-table";

// Define RowData type
interface RowData {
    id: string;
    status: string;
    email: string;
    blood: string;
    age: number;
    amount: string;
}

// Define the columns with specific types
export const columns: ColumnDef<RowData, string | number>[] = [  // Specify types for column values
    {
        accessorKey: "id",
        header: "#",
        cell: ({ row }: { row: Row<RowData> }) => (
            <div className="capitalize font-bold text-foreground">{row.index + 1}</div>  // Use row.index directly
        ),
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }: { row: Row<RowData> }) => (
            <div className="capitalize">{row.getValue("status")}</div>  // Use getValue with correct typing
        ),
    },
    {
        accessorKey: "email",
        header: ({ column }: { column: Column<RowData> }) => {
            return (
                <Button
                    className="flex gap-2 items-center"
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Email
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }: { row: Row<RowData> }) => <div className="lowercase">{row.getValue("email")}</div>,
    },
    {
        accessorKey: "blood",
        header: ({ column }: { column: Column<RowData> }) => {
            return (
                <Button
                    className="flex gap-2 items-center"
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Blood Group
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }: { row: Row<RowData> }) => <div>{row.getValue("blood")}</div>,
    },
    {
        accessorKey: "age",
        header: ({ column }: { column: Column<RowData> }) => {
            return (
                <Button
                    className="flex gap-2 items-center"
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Age
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }: { row: Row<RowData> }) => <div className="lowercase">{row.getValue("age")}</div>,
    },
    {
        accessorKey: "amount",
        header: ({ column }: { column: Column<RowData> }) => {
            return (
                <Button
                    className="flex gap-2 items-center"
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Amount
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }: { row: Row<RowData> }) => {
            const amount = parseFloat(row.getValue("amount"));

            // Format the amount as a currency amount
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BDT",
                currencyDisplay: 'narrowSymbol',
            }).format(amount);

            return <div className="text-left font-medium ">{formatted.replace("৳", "৳\u00A0")}</div>;
        },
    },
    {
        id: "actions",
        header: () => <div className="text-right">Actions</div>,
        cell: () => {
            return (
                <div className="flex justify-end w-full">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <span className="inline-flex gap-2 items-center">
                                    <Eye size={12} /> View
                                </span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <span className="inline-flex gap-2 items-center">
                                    <PenBox size={12} /> Update
                                </span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <span className="inline-flex gap-2 items-center">
                                    <X size={12} /> Delete
                                </span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            );
        },
    },
];
