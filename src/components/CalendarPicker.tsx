"use client"

import React, { useState } from 'react'
import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from '@/lib/utils'

interface CalendarPickerProps {
    className?: string;
}

export function CalendarPicker({ className }: CalendarPickerProps) {
    const todayDate = new Date()
    const [date, setDate] = useState<{ from: Date | undefined; to: Date | undefined }>({
        from: new Date(todayDate.setDate(todayDate.getDate() - 20)),
        to: addDays(new Date(), 0),
    })

    // Update this to correctly handle DateRange (which can have Date or undefined)
    const handleDateSelect = (range: { from?: Date; to?: Date } | undefined) => {
        if (range) {
            // Handle the case where 'from' and 'to' are optional
            setDate({
                from: range.from || undefined, // fallback to undefined if not provided
                to: range.to || undefined, // fallback to undefined if not provided
            })
        } else {
            setDate({ from: undefined, to: undefined }) // Reset the date range if undefined
        }
    }

    return (
        <div className={cn("grid gap-2", className)}>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                            "w-[300px] justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date?.from ? (
                            date.to ? (
                                <>
                                    {format(date.from, "LLL dd, y")} -{" "}
                                    {format(date.to, "LLL dd, y")}
                                </>
                            ) : (
                                format(date.from, "LLL dd, y")
                            )
                        ) : (
                            <span>Pick a date</span>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={handleDateSelect} 
                        numberOfMonths={2}
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}
