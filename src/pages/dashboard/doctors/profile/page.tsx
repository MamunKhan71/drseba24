import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label'
import { Textarea } from "@/components/ui/textarea"
import { Award, BookOpen, BookOpenText, Clock, GraduationCap, Languages, PlusCircle, Text, X } from 'lucide-react'
import { useState } from 'react'
const initialDoctor = {
    "name": "Dr. Eshita Biswas",
    "title": "Associate Consultant",
    "image_url": "https://randomuser.me/api/portraits/women/63.jpg",
    "specialty": "General Medicine",
    "qualifications": ["MBBS", "MD"],
    "institution": "National Health Institute",
    "description": "Dr. Eshita Biswas is an Associate Consultant specializing in general medicine, with years of experience in patient care.",
    "education": [
        { degree: "MBBS", institution: "Medical University", year: "2010" },
        { degree: "MD", institution: "National Medical College", year: "2015" }
    ],
    "certificates": [
        { name: "Advanced Cardiac Life Support", year: "2018" },
        { name: "Internal Medicine Board Certification", year: "2016" }
    ],
    "email": "dr.eshita@example.com",
    "phone": "+1 (555) 123-4567",
    "languages": ["English", "Bengali", "Hindi"],
    "publications": [
        "Novel approaches in treating hypertension, Journal of Cardiology, 2019",
        "The impact of lifestyle on heart health, Medical Review, 2020"
    ]
}

const timelineItems = [
    "European Society of Cardiology",
    "Fellow Royal Society of Medicine",
    "British Cardiovascular Society",
]

export default function DoctorProfile() {
    const [doctor, setDoctor] = useState(initialDoctor)
    // const [newQualification, setNewQualification] = useState('')
    // const [newLanguage, setNewLanguage] = useState('')
    // const [newPublication, setNewPublication] = useState('')
    const [timeline, setTimeline] = useState(timelineItems)
    // const [newTimelineItem, setNewTimelineItem] = useState('')

    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     setDoctor({ ...doctor, [e.target.name]: e.target.value })
    // }

    // const addItem = (key: string, value: string, setter: React.Dispatch<React.SetStateAction<string>>) => {
    //     if (value) {
    //         setDoctor({ ...doctor, [key]: [...doctor[key], value] })
    //         setter('')
    //     }
    // }

    // const removeItem = (key: string, index: number) => {
    //     const newItems = doctor[key].filter((_: any, i: number) => i !== index)
    //     setDoctor({ ...doctor, [key]: newItems })
    // }

    // const addTimelineItem = () => {
    //     if (newTimelineItem) {
    //         setTimeline([...timeline, newTimelineItem])
    //         setNewTimelineItem('')
    //     }
    // }

    // const removeTimelineItem = (index: number) => {
    //     const newTimeline = timeline.filter((_, i) => i !== index)
    //     setTimeline(newTimeline)
    // }
    // const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    //     // Handle the accepted files here
    //     console.log(acceptedFiles);
    // }, []);
    // const { getRootProps, getInputProps } = useDropzone()
    return (

        <div className='space-y-4'>
            <div className='flex items-start justify-between'>
                <div className='flex-1'>
                    {/* <NavigationTracker pathname={usePathname()} /> */}
                </div>
                <div className='max-w-lg'>
                    <Button className="w-full bg-primary hover:bg-secondary text-white hover:text-white">
                        Save Profile
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className='space-y-8'>
                    <form className="w-full bg-gray-50 rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className='col-span-2 grid grid-cols-7 gap-4'>
                            {/* <Image height={100} width={80} className='rounded-lg object-cover' alt='profile-img' src={'https://randomuser.me/api/portraits/women/64.jpg'}/> */}
                            <img className='w-full h-20 rounded-lg object-cover' src="https://randomuser.me/api/portraits/men/60.jpg" alt="" />
                            <div className="col-span-6 flex items-center justify-center w-full" 
                            // {...getRootProps()}
                            >
                                <label
                                    htmlFor="dropzone-file"
                                    className="flex flex-col items-center justify-center w-full h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-green-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-secondary"
                                >
                                    <div className="flex flex-col items-center justify-center p-4">
                                        <svg
                                            className="w-8 h-8 text-muted-foreground dark:text-gray-400"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 16"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                            />
                                        </svg>

                                        <p className="text-xs text-muted-foreground dark:text-gray-400">
                                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                                        </p>
                                    </div>
                                    <input 
                                    // {...getInputProps()} 
                                    
                                    type="file" className="hidden" />
                                </label>
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="name">Name</Label>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                value={doctor.name}
                            // onChange={handleInputChange}
                            />
                        </div>

                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                value={doctor.email}
                            // onChange={handleInputChange}
                            />
                        </div>

                        <div>
                            <Label htmlFor="title">Title</Label>
                            <Input
                                type="text"
                                id="title"
                                name="title"
                                value={doctor.title}
                            // onChange={handleInputChange}
                            />
                        </div>

                        <div>
                            <Label htmlFor="specialty">Specialty</Label>
                            <Input
                                type="text"
                                id="specialty"
                                name="specialty"
                                value={doctor.specialty}
                            // onChange={handleInputChange}
                            />
                        </div>

                        <div>
                            <Label htmlFor="institution">Institution</Label>
                            <Input
                                type="text"
                                id="institution"
                                name="institution"
                                value={doctor.institution}
                            // onChange={handleInputChange}
                            />
                        </div>

                        <div>
                            <Label htmlFor="phone">Phone</Label>
                            <Input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={doctor.phone}
                            // onChange={handleInputChange}
                            />
                        </div>
                    </form>
                    <div className='bg-gray-50 p-6 rounded-lg space-y-4'>
                        <h3 className="font-semibold mb-2 flex items-center text-foreground">
                            <GraduationCap className="w-5 h-5 mr-2" />
                            Qualifications
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {doctor.qualifications.map((qual, index) => (
                                <Badge key={index} variant="secondary" className="text-sm bg-green-100 text-primary">
                                    {qual}
                                    <button
                                        // onClick={() => removeItem('qualifications', index)} 
                                        className="ml-2 text-primary hover:text-secondary">
                                        <span className="sr-only">Remove</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </Badge>
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <Input
                                type="text"

                                // value={newQualification}
                                // onChange={(e) => setNewQualification(e.target.value)}
                                placeholder="New Qualification"
                                className="flex-grow"
                            />
                            <Button
                                // onClick={() => addItem('qualifications', newQualification, setNewQualification)} 
                                size="icon" className="bg-primary hover:bg-secondary">
                                <span className="sr-only">Add</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </Button>
                        </div>
                    </div>
                    <div className='bg-gray-50 p-6 rounded-lg space-y-4'>
                        <h3 className="font-semibold mb-2 flex items-center text-foreground">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Education
                        </h3>
                        {doctor.education.map((edu, index) => (
                            <div key={index} className="mb-2 p-2 rounded-lg">
                                <Input
                                    type="text"
                                    value={edu.degree}
                                    // onChange={(e) => {
                                    //     const newEducation = [...doctor.education]
                                    //     newEducation[index].degree = e.target.value
                                    //     setDoctor({ ...doctor, education: newEducation })
                                    // }}
                                    className="mb-1 "
                                    placeholder="Degree"
                                />
                                <Input
                                    type="text"
                                    value={edu.institution}
                                    // onChange={(e) => {
                                    //     const newEducation = [...doctor.education]
                                    //     newEducation[index].institution = e.target.value
                                    //     setDoctor({ ...doctor, education: newEducation })
                                    // }}
                                    className="mb-1 border-gray-300 focus:border-primary"
                                    placeholder="Institution"
                                />
                                <Input
                                    type="text"
                                    value={edu.year}
                                    // onChange={(e) => {
                                    //     const newEducation = [...doctor.education]
                                    //     newEducation[index].year = e.target.value
                                    //     setDoctor({ ...doctor, education: newEducation })
                                    // }}
                                    className="border-gray-300 focus:border-primary"
                                    placeholder="Year"
                                />
                            </div>
                        ))}
                        <div className='flex justify-end w-full'>
                            <Button
                                // onClick={() => setDoctor({ ...doctor, education: [...doctor.education, { degree: '', institution: '', year: '' }] })}
                                className="mt-2 bg-primary text-white hover:bg-primary hover:text-foreground"
                            >
                                <PlusCircle size={20} /> Add Education
                            </Button>
                        </div>
                    </div>
                    <div className='bg-gray-50 p-6 rounded-lg space-y-4'>
                        <h3 className="font-semibold mb-2 text-foreground inline-flex items-center"><BookOpenText className="w-5 h-5 mr-2" />Publications</h3>
                        <ul className="space-y-2">
                            {doctor.publications.map((pub, index) => (
                                <li key={index} className="flex items-center gap-2  bg-green-50 text-foreground hover:text-foreground font-medium hover:bg-primary rounded-lg p-2 transition-all">
                                    <span>{pub}</span>
                                    <button
                                        // onClick={() => removeItem('publications', index)} 
                                        className="ml-auto">
                                        <span className="sr-only">Remove</span>
                                        <X className="w-5 h-5" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="flex gap-2 mt-2">
                            <Input
                                type="text"
                                // value={newPublication}
                                // onChange={(e) => setNewPublication(e.target.value)}
                                placeholder="New Publication"
                                className="flex-grow "
                            />
                            <Button
                                // onClick={() => addItem('publications', newPublication, setNewPublication)} size="icon" 
                                className="bg-primary hover:bg-secondary">
                                <span className="sr-only">Add</span>
                                <PlusCircle />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="space-y-8">
                    <div className='bg-gray-50 p-6 rounded-lg space-y-4'>
                        <h3 className="font-semibold mb-2 flex items-center text-foreground">
                            <Award className="w-5 h-5 mr-2" />
                            Certificates
                        </h3>
                        {doctor.certificates.map((cert, index) => (
                            <div key={index} className="mb-2 p-2 bg-gray-50 rounded-lg">
                                <Input
                                    type="text"
                                    value={cert.name}
                                    // onChange={(e) => {
                                    //     const newCertificates = [...doctor.certificates]
                                    //     newCertificates[index].name = e.target.value
                                    //     setDoctor({ ...doctor, certificates: newCertificates })
                                    // }}
                                    className="mb-1 border-gray-300 focus:border-primary"
                                    placeholder="Certificate Name"
                                />
                                <Input
                                    type="text"
                                    value={cert.year}
                                    // onChange={(e) => {
                                    //     const newCertificates = [...doctor.certificates]
                                    //     newCertificates[index].year = e.target.value
                                    //     setDoctor({ ...doctor, certificates: newCertificates })
                                    // }}
                                    className="border-gray-300 focus:border-primary"
                                    placeholder="Year"
                                />
                            </div>
                        ))}
                        <div className='flex justify-end w-full'>
                            <Button
                                // onClick={() => setDoctor({ ...doctor, certificates: [...doctor.certificates, { name: '', year: '' }] })}
                                className="mt-2 bg-primary text-white hover:bg-primary hover:text-foreground"
                            >
                                <PlusCircle size={20} /> Add Certificate
                            </Button>
                        </div>
                    </div>
                    <div className='bg-gray-50 p-6 rounded-lg space-y-4'>
                        <h3 className="font-semibold mb-2 text-foreground inline-flex items-center"><Text className="w-5 h-5 mr-2" /> Description</h3>
                        <Textarea
                            name="description"
                            value={doctor.description}
                            // onChange={handleInputChange}
                            className="min-h-[150px]"
                            placeholder="Doctor's description"
                        />
                    </div>
                    <div className='bg-gray-50 p-6 rounded-lg space-y-4'>
                        <h3 className="font-semibold mb-2 flex items-center text-foreground">
                            <Clock className="w-5 h-5 mr-2" />
                            Timeline
                        </h3>
                        <ul className="space-y-2">
                            {timeline.map((item, index) => (
                                <li key={index} className="flex items-center gap-2  bg-green-50 text-foreground hover:text-white font-medium hover:bg-primary rounded-lg p-2 transition-all">
                                    <span className="w-2 h-2 rounded-full"></span>
                                    <span>{item}</span>
                                    <button
                                        // onClick={() => removeTimelineItem(index)} 
                                        className="ml-auto">
                                        <span className="sr-only">Remove</span>
                                        <X className="w-5 h-5" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="flex gap-2 mt-2">
                            <Input
                                type="text"
                                // value={newTimelineItem}
                                // onChange={(e) => setNewTimelineItem(e.target.value)}
                                placeholder="New Timeline Item"
                                className="flex-grow"
                            />
                            <Button
                                // onClick={addTimelineItem} 
                                size="icon"
                                className="bg-primary hover:bg-secondary">
                                <span className="sr-only">Add</span>
                                <PlusCircle />
                            </Button>
                        </div>
                    </div>
                    <div className='bg-gray-50 p-6 rounded-lg space-y-4'>
                        <h3 className="font-semibold mb-2 inline-flex items-center text-foreground"><Languages className="w-5 h-5 mr-2" />Languages</h3>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {doctor.languages.map((lang, index) => (
                                <Badge key={index} variant="secondary" className="text-sm bg-green-100 text-primary">
                                    {lang}
                                    <button
                                        // onClick={() => removeItem('languages', index)} 
                                        className="ml-2 text-primary hover:text-foreground">
                                        <span className="sr-only">Remove</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </Badge>
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <Input
                                type="text"
                                // value={newLanguage}
                                // onChange={(e) => setNewLanguage(e.target.value)}
                                placeholder="New Language"
                                className="flex-grow border-primary focus:border-secondary"
                            />
                            <Button
                                // onClick={() => addItem('languages', newLanguage, setNewLanguage)} 
                                size="icon" className="bg-primary hover:bg-secondary">
                                <span className="sr-only">Add</span>
                                <PlusCircle />
                            </Button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}