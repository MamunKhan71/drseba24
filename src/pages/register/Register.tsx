"use client"

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Eye, EyeIcon as EyeClosed, Stethoscope, Upload, Heart, User, X, ArrowRight, Smile, Calculator, Lock, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { CalendarIcon } from 'lucide-react'
import { useForm, Resolver } from "react-hook-form"
import { Link } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import HeaderTitle from '@/components/headerTitle'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command'
import { Textarea } from '@/components/ui/textarea'
import PasswordValidator from '@/components/passwordValidator'
// import HeaderTitle from '@/components/headerTitle'
// import { Card, CardContent } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type FormValues = {
    title: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    gender: string;
    district: string;
    nationalId: string;
    registrationNumber: string;
    doctorType: string;
    mobileNumber: string;
    email: string;
    password: string;
    terms: boolean;
    profilePicture: File | null;
    degrees: Degree[];
};
type Degree = {
    name: string;
    college: string;
    result: string;
};


const resolver: Resolver<FormValues> = async (values) => {
    const errors: Record<string, any> = {};

    if (!values.title) {
        errors.title = {
            type: 'required',
            message: 'Title is required *',
        };
    }

    if (!values.firstName) {
        errors.firstName = {
            type: 'required',
            message: 'First name is required *',
        };
    }

    if (!values.lastName) {
        errors.lastName = {
            type: 'required',
            message: 'Last name is required *',
        };
    }

    if (!values.dateOfBirth) {
        errors.dateOfBirth = {
            type: 'required',
            message: 'Date of birth is required *',
        };
    }

    if (!values.gender) {
        errors.gender = {
            type: 'required',
            message: 'Gender is required *',
        };
    }

    if (!values.district) {
        errors.district = {
            type: 'required',
            message: 'District is required *',
        };
    }

    if (!values.nationalId) {
        errors.nationalId = {
            type: 'required',
            message: 'National ID/Passport number is required *',
        };
    }

    if (!values.registrationNumber) {
        errors.registrationNumber = {
            type: 'required',
            message: 'BMDC Registration number is required *',
        };
    }

    if (!values.doctorType) {
        errors.doctorType = {
            type: 'required',
            message: 'Doctor type is required *',
        };
    }

    if (!values.mobileNumber) {
        errors.mobileNumber = {
            type: 'required',
            message: 'Mobile number is required *',
        };
    }

    if (!values.email) {
        errors.email = {
            type: 'required',
            message: 'Email is required *',
        };
    }

    if (!values.password) {
        errors.password = {
            type: 'required',
            message: 'Password is required *',
        };
    }

    if (!values.terms) {
        errors.terms = {
            type: 'required',
            message: 'You must accept the terms and conditions *',
        };
    }

    if (!values.profilePicture) {
        errors.profilePicture = {
            type: 'required',
            message: 'Profile picture is required *',
        };
    }
    if (!values.degrees || values.degrees.length === 0) {
        errors.degrees = {
            type: 'required',
            message: 'At least one degree is required *',
        };
    } else {
        const degreeErrors = values.degrees.map(degree => {
            const degreeError: Record<string, any> = {};
            if (!degree.name) degreeError.name = { type: 'required', message: 'Degree name is required *' };
            if (!degree.college) degreeError.college = { type: 'required', message: 'College name is required *' };
            if (!degree.result) degreeError.result = { type: 'required', message: 'Result is required *' };
            return degreeError;
        });
        if (degreeErrors.some(error => Object.keys(error).length > 0)) {
            errors.degrees = degreeErrors;
        }
    }


    return {
        values: Object.keys(errors).length === 0 ? values : {},
        errors,
    };
};

const RegisterPage = () => {
    const [date, setDate] = useState<Date>()
    const [open, setIsOpen] = useState(false)
    const [profilePicture, setProfilePicture] = useState<string | null>(null)
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm<FormValues>({ resolver })

    const onSubmit = handleSubmit(async (data) => {
        console.log(data);
    })

    const handleProfilePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setProfilePicture(reader.result as string)
            }
            reader.readAsDataURL(file)
            setValue('profilePicture', file)
        }
    }

    return (

        <div className="min-h-screen p-6 flex items-center justify-center relative overflow-hidden">
            <div className="container max-w-screen-lg mx-auto">
                <div className='relative z-10'>
                    <Tabs defaultValue='personal' className="rounded backdrop-blur-lg">
                        <div className='space-y-4'>
                            <HeaderTitle title='Register'></HeaderTitle>
                            <p className="text-gray-500 mb-6">
                                Register yourself with us and start serving..
                            </p>
                            <div className='grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 bg-gray-100 p-6 rounded-lg min-h-[480px] border border-dashed'>
                                <div className='mt-8'>
                                    <TabsList className='flex flex-col gap-4 justify-start items-start bg-transparent'>
                                        <TabsTrigger value='personal' className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none">Personal Information</TabsTrigger>
                                        <TabsTrigger value='education' className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none">Educational Information</TabsTrigger>
                                        <TabsTrigger value='profession' className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none">Professional Qualification</TabsTrigger>
                                        <TabsTrigger value='Final Step' className="data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none">Final Step</TabsTrigger>
                                    </TabsList>
                                </div>
                                <div className="lg:col-span-2">
                                    <TabsContent value='personal' className="w-full grid gap-4 text-sm grid-cols-1 md:grid-cols-5">
                                        <div className='col-span-2'>
                                            <Label htmlFor="firstName">First Name *</Label>
                                            <Input id="firstName" {...register('firstName')} placeholder="John" />
                                            {errors?.firstName && <p className='text-xs text-destructive mt-1'>{errors.firstName.message}</p>}
                                        </div>
                                        <div className='col-span-2'>
                                            <Label htmlFor="lastName">Last Name *</Label>
                                            <Input id="lastName" {...register('lastName')} placeholder="Doe" />
                                            {errors?.lastName && <p className='text-xs text-destructive mt-1'>{errors.lastName.message}</p>}
                                        </div>
                                        <div>
                                            <Label htmlFor="mobileNumber">Mobile Number *</Label>
                                            <Input id="mobileNumber" {...register('mobileNumber')} type="tel" placeholder="Enter mobile number" />
                                            {errors?.mobileNumber && <p className='text-xs text-destructive'>{errors.mobileNumber.message}</p>}
                                        </div>
                                        <div className="md:col-span-3">
                                            <Label htmlFor="email">Email Address</Label>
                                            <Input
                                                type="text"
                                                name="email"
                                                id="email"
                                                defaultValue=""
                                                placeholder="email@domain.com"
                                            />
                                        </div>

                                        <div className="col-span-2">
                                            <Label htmlFor="gender">Gender *</Label>
                                            <Select {...register('gender')}>
                                                <SelectTrigger id="gender">
                                                    <SelectValue placeholder="Select gender" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="male">Male</SelectItem>
                                                    <SelectItem value="female">Female</SelectItem>
                                                    <SelectItem value="other">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            {errors?.gender && <p className='text-xs text-destructive'>{errors.gender.message}</p>}
                                        </div>
                                        <div className="col-span-2">
                                            <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        id="dateOfBirth"
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-full justify-start text-left font-normal",
                                                            !date && "text-muted-foreground"
                                                        )}
                                                    >
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0">
                                                    <Calendar
                                                        mode="single"
                                                        selected={date}
                                                        onSelect={(newDate) => {
                                                            setDate(newDate)
                                                            setValue('dateOfBirth', newDate as Date)
                                                        }}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            {errors?.dateOfBirth && <p className='text-xs text-destructive'>{errors.dateOfBirth.message}</p>}
                                        </div>

                                        <div className="md:col-span-3">
                                            <Label htmlFor="address">Address / Street</Label>
                                            <Input
                                                type="text"
                                                name="address"
                                                id="address"
                                                defaultValue=""
                                                placeholder=""
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <Label htmlFor="country">Country / region</Label>
                                            <Input
                                                name="country"
                                                id="country"
                                                placeholder="Country"
                                                defaultValue=""
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <Label htmlFor="state">State / province</Label>
                                            <Input
                                                name="state"
                                                id="state"
                                                placeholder="State"
                                                defaultValue=""
                                            />
                                        </div>
                                        <div className="md:col-span-1">
                                            <Label htmlFor="zipcode">Zipcode</Label>
                                            <Input
                                                type="text"
                                                name="zipcode"
                                                id="zipcode"
                                                placeholder=""
                                                defaultValue=""
                                            />
                                        </div>
                                        <div className='col-span-3'>
                                            <Label htmlFor="nid">NID No *</Label>
                                            <div className='relative'>
                                                <Input
                                                    id="text"
                                                    {...register('nationalId')}
                                                    placeholder="Enter National ID No."
                                                />
                                            </div>
                                            {errors?.password && <p className='text-xs text-destructive mt-1'>{errors.password.message}</p>}
                                        </div>
                                        <div className='col-span-2'>
                                            <Label htmlFor="passport">Passport No</Label>
                                            <div className='relative'>
                                                <Input
                                                    id="password"
                                                    {...register('passport')}
                                                    placeholder="Enter passport no."
                                                />
                                            </div>
                                            {errors?.password && <p className='text-xs text-destructive mt-1'>{errors.password.message}</p>}
                                        </div>
                                        <div>
                                            <Button className='w-full hover:bg-secondary'>Next <ArrowRight /></Button>
                                        </div>
                                    </TabsContent>

                                    {/* Education  */}

                                    <TabsContent value='education'>
                                        <div className='grid grid-cols-5 gap-6'>
                                            <div className='col-span-5'>
                                                <Label>Medical Degree *</Label>
                                                <div className="flex space-x-2">
                                                    <Input {...register('medicalDegree.name')} placeholder="e.g., MBBS, MD" />
                                                    <Input {...register('medicalDegree.university')} placeholder="University Name" />
                                                    <Input {...register('medicalDegree.year')} placeholder="Year of Graduation" />
                                                </div>
                                                {errors?.medicalDegree && <p className='text-xs text-destructive mt-1'>{errors.medicalDegree.message}</p>}
                                            </div>
                                            <div className='col-span-5'>
                                                <Label>Post-Graduation Degree (if any)</Label>
                                                <div className="flex space-x-2">
                                                    <Input {...register('postGraduationDegree.name')} placeholder="e.g., MS, PhD" />
                                                    <Input {...register('postGraduationDegree.university')} placeholder="University Name" />
                                                    <Input {...register('postGraduationDegree.year')} placeholder="Year of Completion" />
                                                </div>
                                                {errors?.postGraduationDegree && <p className='text-xs text-destructive mt-1'>{errors.postGraduationDegree.message}</p>}
                                            </div>
                                            <div className='col-span-5'>
                                                <Label htmlFor="certifications">Certifications (Upload Option)</Label>
                                                <Input
                                                    id="certifications"
                                                    type="file"
                                                    accept=".pdf,.doc,.docx"
                                                    multiple
                                                // onChange={handleCertificationUpload}
                                                />
                                            </div>
                                            <div className='col-span-5'>
                                                <Label htmlFor="additionalTraining">Additional Training or Courses</Label>
                                                <Textarea
                                                    id="additionalTraining"
                                                    {...register('additionalTraining')}
                                                    placeholder="List any additional training or courses you've completed"
                                                />
                                            </div>
                                            <div>
                                                <Button className='w-full hover:bg-secondary'>Next <ArrowRight /></Button>
                                            </div>
                                        </div>

                                    </TabsContent>
                                    <TabsContent value='profession'>
                                        <div className='grid grid-cols-5 gap-6'>
                                            <div className='col-span-2'>
                                                <Label htmlFor="title">Title *</Label>
                                                <Select {...register('title')}>
                                                    <SelectTrigger id="title">
                                                        <SelectValue placeholder="Select" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="dr">Dr.</SelectItem>
                                                        <SelectItem value="prof">Prof.</SelectItem>
                                                        <SelectItem value="assoc">Assoc. Prof.</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                {errors?.title && <p className='text-xs text-destructive mt-1'>{errors.title.message}</p>}
                                            </div>
                                            <div className='col-span-3'>
                                                <Label>BMDC Liscense No.</Label>
                                                <Input type='text' />
                                            </div>

                                            <div className='col-span-2'>
                                                <Label>Consultation Fees</Label>
                                                <Input type='number' placeholder='Fees' />
                                            </div>
                                            <div className='col-span-3'>
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
                                            <div className='col-span-3'>
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
                                            <div className='col-span-2'>
                                                <Label>Experience</Label>
                                                <Input type='number' placeholder='No of Years' />
                                            </div>
                                        </div>

                                        <div className="inline-flex items-end mt-6">
                                            <div>
                                                <Button className='w-full hover:bg-secondary'>Review <ArrowRight /></Button>
                                            </div>
                                        </div>
                                    </TabsContent>

                                    <TabsContent value='Final Step' className='space-y-4'>
                                        {/* <div>
                                            <Label htmlFor="password">Password *</Label>
                                            <div className='relative'>
                                                <Input
                                                    id="password"
                                                    {...register('password')}
                                                    type={open ? "text" : "password"}
                                                    placeholder="Enter password"
                                                />
                                                <button
                                                    type='button'
                                                    className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700'
                                                    onClick={() => setIsOpen(!open)}
                                                >
                                                    {open ? <Eye size={20} /> : <EyeClosed size={20} />}
                                                </button>
                                            </div>
                                            {errors?.password && <p className='text-xs text-destructive mt-1'>{errors.password.message}</p>}
                                        </div> */}
                                        <div>
                                            <PasswordValidator />
                                        </div>
                                        <div>
                                            <Label htmlFor="password">Confirm Password *</Label>
                                            <div className="relative">
                                                <Lock size={20} className='text-foreground absolute left-4 top-1/2 -translate-y-1/2' />
                                                <Input
                                                    id="input-51"
                                                    className="border px-12 py-6 rounded-lg text-primary"
                                                    placeholder="Password"
                                                // type={isVisible ? "text" : "password"}
                                                // value={password}
                                                // onChange={(e) => setPassword(e.target.value)}
                                                // aria-invalid={strengthScore < 4}
                                                // aria-describedby="password-strength"

                                                />
                                                <button
                                                    className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 transition-shadow hover:text-foreground focus-visible:border focus-visible:border-ring focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                                                    type="button"
                                                    // onClick={toggleVisibility}
                                                    // aria-label={isVisible ? "Hide password" : "Show password"}
                                                    // aria-pressed={isVisible}
                                                    aria-controls="password"
                                                >
                                                    {true ? (
                                                        <EyeOff size={20} strokeWidth={2} aria-hidden="true" />
                                                    ) : (
                                                        <Eye size={20} strokeWidth={2} aria-hidden="true" />
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                        {/* <div>
                                            <Label htmlFor="password">Confirm Password *</Label>
                                            <div className='relative'>
                                                <Input
                                                    id="password"
                                                    {...register('password')}
                                                    type={open ? "text" : "password"}
                                                    placeholder="Enter password"
                                                />
                                                <button
                                                    type='button'
                                                    className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700'
                                                    onClick={() => setIsOpen(!open)}
                                                >
                                                    {open ? <Eye size={20} /> : <EyeClosed size={20} />}
                                                </button>
                                            </div>
                                            {errors?.password && <p className='text-xs text-destructive mt-1'>{errors.password.message}</p>}
                                        </div> */}
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="terms" {...register('terms')} />
                                            <label
                                                htmlFor="terms"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                I accept and agree to the{" "}
                                                <Link to="/terms" className="text-primary hover:underline">
                                                    Terms of services
                                                </Link>
                                                {" "}and{" "}
                                                <Link to="/privacy" className="text-primary hover:underline">
                                                    Privacy Policy
                                                </Link>
                                            </label>
                                        </div>
                                        <div className='mt-6'>
                                            <Link to={'/verify'}><Button className='w-full hover:bg-secondary'>Submit <ArrowRight /></Button></Link>
                                        </div>
                                    </TabsContent>
                                </div>
                            </div>
                        </div>
                    </Tabs>
                </div>
            </div>
            <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full opacity-5'>
                <img src="https://res.cloudinary.com/dz3kxnsxr/image/upload/v1727461049/clipboard-stethoscope_xo2uo1.jpg" alt="" />
            </div>
        </div>
    )
}

export default RegisterPage



