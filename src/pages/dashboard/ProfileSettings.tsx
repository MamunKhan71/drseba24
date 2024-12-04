'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { CalendarIcon } from 'lucide-react'
import { useState } from 'react'
import { useLocation } from 'react-router'
import { NavigationTracker } from './_components/NavigationTracker'
import EducationSection from './profile/_components/EducationComponent'
import ProfileCompletionCard from './profile/_components/ProfileCompletionCard'

export default function ProfileSettings() {
  const [progress, setProgress] = useState(65)
  const location = useLocation().pathname

  return (
    <div className='space-y-4'>
      <NavigationTracker pathname={location} />
      <div className="flex gap-6 justify-between w-full">
        <div className="flex-1">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="professional">Professional Info</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>

            <TabsContent value="personal">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Information</CardTitle>
                    <CardDescription>Update your basic profile information</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-6">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-20 w-20">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>MM</AvatarFallback>
                      </Avatar>
                      <Button>Change Photo</Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" defaultValue="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" defaultValue="Doe" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" defaultValue="email@domain.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Mobile Number *</Label>
                        <Input id="phone" type="tel" placeholder="Enter mobile number" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Additional Details</CardTitle>
                    <CardDescription>Complete your profile with additional information</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              id="dateOfBirth"
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                // !date && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {/* {date ? format(date, "PPP") : <span>Pick a date</span>} */}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              // selected={date}
                              // onSelect={(newDate) => {
                              //   setDate(newDate)
                              //   setValue('dateOfBirth', newDate as Date)
                              // }}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        {/* {errors?.dateOfBirth && <p className='text-xs text-destructive'>{errors.dateOfBirth.message}</p>} */}
                      </div>

                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address / Street</Label>
                      <Input id="address" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="country">Country / region</Label>
                        <Input id="country" placeholder="Country" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State / province</Label>
                        <Input id="state" placeholder="State" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zipcode">Zipcode</Label>
                        <Input id="zipcode" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nid">NID No *</Label>
                        <Input id="nid" placeholder="Enter National ID No." />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="passport">Passport No</Label>
                        <Input id="passport" placeholder="Enter passport no." />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="professional">
              <Card>
                <CardHeader>
                  <CardTitle>Professional Information</CardTitle>
                  <CardDescription>Add your professional details and qualifications</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6 grid-cols-2">
                  <div className='col-span-2 w-full space-y-2'>
                    <Label htmlFor="additionalTraining">Career Objective</Label>
                    <Textarea
                      id="additionalTraining"
                      // {...register('additionalTraining')}
                      placeholder="List any additional training or courses you've completed and what services you offer."
                    />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor="title">Title *</Label>
                    <Select
                    // {...register('title')}
                    >
                      <SelectTrigger id="title">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dr">Dr.</SelectItem>
                        <SelectItem value="prof">Prof.</SelectItem>
                        <SelectItem value="assoc">Assoc. Prof.</SelectItem>
                      </SelectContent>
                    </Select>
                    {/* {errors?.title && <p className='text-xs text-destructive mt-1'>{errors.title.message}</p>} */}
                  </div>
                  <div className="space-y-2">
                    <Label>Specialization</Label>
                    <Input placeholder="e.g. Cardiology" />
                  </div>
                  <div className="space-y-2">
                    <Label>Experience (years)</Label>
                    <Input type="number" placeholder="Years of experience" />
                  </div>
                  {/* <div className="space-y-2">
                    <Label>Medical License Number</Label>
                    <Input placeholder="Enter your medical license number" />
                  </div> */}
                  {/* <div className="space-y-2">
                    <Label>Hospital Affiliations</Label>
                    <Input placeholder="Enter affiliated hospitals" />
                  </div> */}

                  <div className='space-y-2'>
                    <Label>BMDC Liscense No.</Label>
                    <Input type='text' />
                  </div>

                  <div className='space-y-2'>
                    <Label>Consultation Fees</Label>
                    <Input type='number' placeholder='Fees' />
                  </div>
                  <div className='space-y-2'>
                    <Label>Teleconsultation Availability</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='yes'>Yes</SelectItem>
                        <SelectItem value='no'>No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className='space-y-2'>
                    <Label>Professional Memberships</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='yes'>Yes</SelectItem>
                        <SelectItem value='no'>No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className='space-y-2'>
                    <Label>Experience</Label>
                    <Input type='number' placeholder='No of Years' />
                  </div>
                </CardContent>
              </Card>

            </TabsContent>
            <TabsContent value='education' className="w-full h-full">
              <EducationSection />
            </TabsContent>
          </Tabs>

          <div className="flex justify-end mt-6 gap-4">
            <Button variant="outline">Cancel</Button>
            <Button>Save Changes</Button>
          </div>
        </div>

        {/* Profile Completion Status */}
        <div className="w-96">
          <ProfileCompletionCard progress={40} />
        </div>
      </div>
    </div >
  )
}

