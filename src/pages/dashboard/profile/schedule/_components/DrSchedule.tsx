"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TimePicker } from "./TimePicker"
import { NavigationTracker } from "@/pages/dashboard/_components/NavigationTracker"
import { useLocation } from "react-router"
import { Plus, Save, Trash2 } from "lucide-react"
const DAYS_OF_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

interface TimeSlot {
    start: string
    end: string
    maxPatients: number
}

interface DaySchedule {
    day: string
    timeSlots: TimeSlot[]
}

export default function DoctorSchedule() {
    const location = useLocation().pathname
    const [selectedDay, setSelectedDay] = useState(DAYS_OF_WEEK[0])
    const [isAddingUnavailability, setIsAddingUnavailability] = useState(false)
    const [newUnavailability, setNewUnavailability] = useState({ start: "", end: "", reason: "" })
    const [unavailabilities, setUnavailabilities] = useState([])
    const [schedule, setSchedule] = useState<DaySchedule[]>(
        DAYS_OF_WEEK.map(day => ({ day, timeSlots: [] }))
    )
    const [newSlot, setNewSlot] = useState<TimeSlot>({ start: "09:00", end: "17:00", maxPatients: 10 })

    const addTimeSlot = () => {
        setSchedule(prev => prev.map(daySchedule =>
            daySchedule.day === selectedDay
                ? { ...daySchedule, timeSlots: [...daySchedule.timeSlots, newSlot] }
                : daySchedule
        ))
        setNewSlot({ start: "09:00", end: "17:00", maxPatients: 10 })
    }

    const removeTimeSlot = (day: string, index: number) => {
        setSchedule(prev => prev.map(daySchedule =>
            daySchedule.day === day
                ? { ...daySchedule, timeSlots: daySchedule.timeSlots.filter((_, i) => i !== index) }
                : daySchedule
        ))
    }

    const saveSchedule = () => {
        console.log("Saving schedule:", schedule)
        // Here you would typically send the schedule to your backend
    }

    const addUnavailability = () => {
        if (newUnavailability.start && newUnavailability.end) {
            setUnavailabilities([...unavailabilities, newUnavailability])
            setNewUnavailability({ start: "", end: "", reason: "" })
            setIsAddingUnavailability(false)
        }
    }

    const removeUnavailability = (index: number) => {
        setUnavailabilities(unavailabilities.filter((_, i) => i !== index))
    }

    return (
        <div>
            <NavigationTracker pathname={location} />
            <Card className="w-full bg-transparent border-none shadow-none mt-6 space-y-6">
                <CardHeader className="p-0">
                    <CardTitle>Doctor Scheduling</CardTitle>
                </CardHeader>
                <CardContent className="flex gap-6 justify-between w-full p-0">
                    <Tabs value={selectedDay} onValueChange={setSelectedDay} className="w-full max-w-2xl">
                        <TabsList className="grid grid-cols-7 mb-4">
                            {DAYS_OF_WEEK.map(day => (
                                <TabsTrigger key={day} value={day} className="text-xs sm:text-sm">
                                    {day.slice(0, 3)}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        {DAYS_OF_WEEK.map(day => (
                            <TabsContent key={day} value={day} className="mt-0 rounded-lg border p-4">
                                <div className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <div>
                                            <Label htmlFor="start-time">Start Time</Label>
                                            <TimePicker
                                                value={newSlot.start}
                                                onChange={(time) => setNewSlot({ ...newSlot, start: time })}
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="end-time">End Time</Label>
                                            <TimePicker
                                                value={newSlot.end}
                                                onChange={(time) => setNewSlot({ ...newSlot, end: time })}
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="max-patients">Max Patients</Label>
                                            <Input
                                                id="max-patients"
                                                type="number"
                                                value={newSlot.maxPatients}
                                                onChange={(e) => setNewSlot({ ...newSlot, maxPatients: parseInt(e.target.value) })}
                                            />
                                        </div>
                                    </div>

                                </div>
                                <Button onClick={addTimeSlot} className="w-48 mt-4 hover:bg-secondary">
                                    <Plus size={20} /> Add Time Slot
                                </Button>
                            </TabsContent>
                        ))}

                        <div className="space-y-4 mt-4 border rounded-lg p-4 bg-gray-100">
                            <h3 className="text-lg font-semibold">Unavailability</h3>
                            {unavailabilities.map((unavailability, index) => (
                                <div key={index} className="flex items-center justify-between bg-muted p-2 rounded">
                                    <span>{unavailability.start} - {unavailability.end}: {unavailability.reason}</span>
                                    <Button variant="destructive" size="icon" onClick={() => removeUnavailability(index)}>
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            ))}
                            {isAddingUnavailability ? (
                                <div className="space-y-4">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="unavailable-start">Start Time</Label>
                                            <TimePicker
                                                value={newUnavailability.start}
                                                onChange={(time) => setNewUnavailability({ ...newUnavailability, start: time })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="unavailable-end">End Time</Label>
                                            <TimePicker
                                                value={newUnavailability.end}
                                                onChange={(time) => setNewUnavailability({ ...newUnavailability, end: time })}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="unavailable-reason">Reason</Label>
                                        <Input
                                            id="unavailable-reason"
                                            value={newUnavailability.reason}
                                            onChange={(e) => setNewUnavailability({ ...newUnavailability, reason: e.target.value })}
                                            placeholder="Enter reason for unavailability"
                                        />
                                    </div>
                                    <Button onClick={addUnavailability} className="w-full">Add Unavailability</Button>
                                </div>
                            ) : (
                                <Button onClick={() => setIsAddingUnavailability(true)} className="w-full">
                                    <Plus className="mr-2 h-4 w-4" /> Mark Unavailable Time
                                </Button>
                            )}
                        </div>

                    </Tabs>
                    <div className="flex-1">
                        <div className="flex justify-between w-full items-center mb-4" >
                            <h3 className="text-lg font-semibold">Weekly Schedule</h3>
                            <Button onClick={saveSchedule} className="w-48 hover:bg-secondary">
                                <Save size={20} />Save Schedule
                            </Button>
                        </div>
                        <ScrollArea className="h-[450px] rounded-md border p-4">
                            {schedule.map(({ day, timeSlots }) => (
                                <div key={day} className="mb-4">
                                    <h4 className="font-semibold">{day}</h4>
                                    {timeSlots.length > 0 ? (
                                        timeSlots.map((slot, index) => (
                                            <div key={index} className="flex justify-between items-center bg-muted p-2 rounded mt-2">
                                                <span>
                                                    {slot.start} - {slot.end} (Max: {slot.maxPatients})
                                                </span>
                                                <Button
                                                    variant="destructive"
                                                    size="sm"
                                                    onClick={() => removeTimeSlot(day, index)}
                                                >
                                                    Remove
                                                </Button>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-muted-foreground mt-2">No time slots scheduled</p>
                                    )}
                                </div>
                            ))}
                        </ScrollArea>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

