'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"
import { Building2, Calendar, GraduationCap, PlusCircle, Trash2 } from 'lucide-react'
import { useState } from 'react'

interface Education {
    id: string
    type: string
    degree: string
    university: string
    year: string
    certificate?: File
    additionalInfo?: string
}

export default function EducationSection() {
    const [educationList, setEducationList] = useState<Education[]>([
        {
            id: '1',
            type: 'Medical Degree',
            degree: 'MBBS',
            university: 'Medical University',
            year: '2018',
        }
    ])

    const addEducation = () => {
        setEducationList([...educationList, {
            id: Date.now().toString(),
            type: 'Degree',
            degree: '',
            university: '',
            year: '',
        }])
    }

    const removeEducation = (id: string) => {
        setEducationList(educationList.filter(edu => edu.id !== id))
    }

    const handleFileChange = (id: string, file: File | undefined) => {
        setEducationList(educationList.map(edu => {
            if (edu.id === id) {
                return { ...edu, certificate: file }
            }
            return edu
        }))
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-primary">Education</h2>
                    <p className="text-muted-foreground">Add your educational background and certifications</p>
                </div>
                <Button onClick={addEducation} className="gap-2">
                    <PlusCircle className="h-4 w-4" />
                    Add Education
                </Button>
            </div>

            <ScrollArea className="h-auto">
                <div className="space-y-6">
                    {educationList.map((education, index) => (
                        <Card key={education.id}>
                            <CardHeader className="flex flex-row gap-4 justify-between items-center space-y-0">
                                <div className="flex gap-4 w-full">
                                    <CardTitle className="flex items-center gap-2">
                                        <GraduationCap className="h-5 w-5 text-primary" />
                                        {education.type}
                                    </CardTitle>
                                </div>
                                <div className='flex gap-4 items-center w-full justify-end'>
                                    <Badge variant="outline" className='h-full text-center text-secondary'>
                                        {index === 0 ? 'Primary Qualification' : 'Additional Qualification'}
                                    </Badge>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => removeEducation(education.id)}
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor={`degree-${education.id}`}>Degree/Certification</Label>
                                    <Input
                                        id={`degree-${education.id}`}
                                        placeholder="e.g., MBBS, MD, MS"
                                        defaultValue={education.degree}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor={`year-${education.id}`}>Year of Completion</Label>
                                    <div className="relative">
                                        <Input
                                            id={`year-${education.id}`}
                                            placeholder="Year"
                                            defaultValue={education.year}
                                        />
                                        <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor={`university-${education.id}`}>Institution/University</Label>
                                    <div className="relative">
                                        <Input
                                            id={`university-${education.id}`}
                                            placeholder="Enter institution name"
                                            defaultValue={education.university}
                                        />
                                        <Building2 className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
                                    </div>
                                </div>

                                <div className="space-y-2 ">
                                    <Label>Upload Certificate</Label>
                                    {/* <div className="border-2 border-dashed rounded-lg p-4 hover:bg-muted/50 transition-colors">
                                        <div className="flex flex-col items-center gap-2">
                                            <Upload className="h-8 w-8 text-muted-foreground" />
                                            <div className="text-center">
                                                <p className="text-sm text-muted-foreground">
                                                    Drag & drop your certificate here or{' '}
                                                    <label
                                                        htmlFor={`certificate-${education.id}`}
                                                        className="text-primary hover:underline cursor-pointer"
                                                    >
                                                        choose file
                                                    </label>
                                                </p>
                                                <p className="text-xs text-muted-foreground mt-1">
                                                    PDF, JPG, or PNG (max. 5MB)
                                                </p>
                                            </div>
                                            <Input
                                                id={`certificate-${education.id}`}
                                                type="file"
                                                className="hidden"
                                                accept=".pdf,.jpg,.jpeg,.png"
                                                onChange={(e) => handleFileChange(education.id, e.target.files?.[0])}
                                            />
                                            {education.certificate && (
                                                <div className="flex items-center gap-2 text-sm">
                                                    <Badge variant="secondary">
                                                        {education.certificate.name}
                                                    </Badge>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-4 w-4"
                                                        onClick={() => handleFileChange(education.id, undefined)}
                                                    >
                                                        <X className="h-3 w-3" />
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                    </div> */}
                                    <Input type='file' />
                                </div>

                                <div className="space-y-2 col-span-2">
                                    <Label htmlFor={`additional-${education.id}`}>Additional Information</Label>
                                    <Textarea
                                        id={`additional-${education.id}`}
                                        placeholder="Add any additional details about your education, achievements, or specializations"
                                        className="min-h-[100px]"
                                    />
                                </div>
                                {/* 
                                {index !== educationList.length - 1 && (
                                    <Separator className="my-4" />
                                )} */}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}

