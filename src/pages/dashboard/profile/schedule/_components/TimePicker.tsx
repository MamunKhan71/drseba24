import * as React from "react"
import { Clock } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

interface TimePickerProps {
    value: string
    onChange: (time: string) => void
}

export function TimePicker({ value, onChange }: TimePickerProps) {
    const [isOpen, setIsOpen] = React.useState(false)

    const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
        setIsOpen(false)
    }

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-full justify-start text-left font-normal",
                        !value && "text-muted-foreground"
                    )}
                >
                    <Clock className="mr-2 h-4 w-4" />
                    {value || "Pick a time"}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Input
                    type="time"
                    value={value}
                    onChange={handleTimeChange}
                    className="border-0 focus:ring-0"
                />
            </PopoverContent>
        </Popover>
    )
}

