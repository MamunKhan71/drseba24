"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Activity, ArrowRight, Brain, HeartPulse, Stethoscope, Users } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface Stat {
  icon: React.ElementType
  value: number
  label: string
  color: string
}

export default function ProfileProgress() {
  const [overallProgress, setOverallProgress] = useState(0)

  const stats: Stat[] = [
    { icon: Users, value: 0, label: "Patients Seen", color: "text-primary" },
    { icon: HeartPulse, value: 0, label: "Avg. Heart Rate", color: "text-primary" },
    { icon: Brain, value: 0, label: "Diagnoses Made", color: "text-primary" },
    { icon: Activity, value: 0, label: "Patient Satisfaction", color: "text-primary" },
  ]

  useEffect(() => {
    const timer = setTimeout(() => setOverallProgress(40), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <TooltipProvider>
      <Card className="w-full  overflow-hidden">
        <CardHeader className="border-b bg-gradient-to-r from-primary to-secondary pb-8 pt-6">
          <CardTitle className="text-2xl font-bold text-white">Dr. Mamun&apos; Dashboard</CardTitle>
          <div className="mt-4 flex items-end justify-between">
            <div>
              <p className="text-sm font-medium text-white">Update Progress</p>
              <p className="text-3xl font-bold text-white">{overallProgress}%</p>
            </div>
            <Stethoscope className="h-16 w-16 text-white opacity-50" />
          </div>
        </CardHeader>
        <CardContent className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Tooltip key={index}>
              <TooltipTrigger>
                <Card className="overflow-hidden">
                  <div className="flex h-full flex-col">
                    <div className={`flex items-center justify-between border-b p-4 ${stat.color} bg-opacity-10`}>
                      <stat.icon className={`h-5 w-5 ${stat.color}`} />
                      <span className="text-2xl font-bold">{stat.value}</span>
                    </div>
                    <div className="flex flex-1 items-center justify-center p-4">
                      <p className="text-center text-sm font-medium">{stat.label}</p>
                    </div>
                  </div>
                </Card>
              </TooltipTrigger>
              <TooltipContent>
                <p>View detailed {stat.label.toLowerCase()} report</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </CardContent>
        <div className="px-6 pb-6">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium">Profile Update Progress</span>
            <span className="text-sm font-medium">{overallProgress}%</span>
          </div>
          <Progress value={overallProgress} className="h-2 bg-green-100" />
          <div className='mt-4'>
            <Link to={'/dashboard/profile'}>
              <Button className='hover:bg-secondary'>Go To Profile <ArrowRight /></Button>
            </Link>
          </div>
        </div>
      </Card>
    </TooltipProvider>
  )
}

