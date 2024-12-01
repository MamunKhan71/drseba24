import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export default function RecentPatients() {
    return (
        <div className='border rounded-lg p-4 flex-1 space-y-4'>
            <h1 className='font-bold text-foreground text-xl'>Recent Patients</h1>
            <div className='space-y-3'>
                {recentPatients.map((patient, index) => (
                    <div key={index}>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-6 items-center'>
                                <div>
                                    <img className='size-12 object-cover rounded-lg' src={patient.img} alt={patient.name} />
                                </div>
                                <div>
                                    <p className='font-bold text-foreground'>{patient.name}</p>
                                    <p className='text-slate-400 font-medium inline-flex gap-1 items-center text-xs'>{patient.phone}</p>
                                </div>
                            </div>
                            <div>
                                <p className='text-slate-400 font-medium text-sm'>{patient.time}</p>
                            </div>
                        </div>
                        <hr className="my-3" />
                    </div>
                ))}
            </div>
            <div className='flex justify-end w-full'>
                <Badge variant={'outline'} className='hover:cursor-pointer hover:bg-secondary hover:text-foreground text-sm font-medium text-foreground inline-flex gap-1 items-center'>
                    See all <ArrowRight size={12} />
                </Badge>
            </div>
        </div>
    )
}


const recentPatients = [
    {
        "name": "Zarin Mostafa",
        "phone": "+880 1643091606",
        "time": "2:00 PM",
        "img": "https://res.cloudinary.com/dz3kxnsxr/image/upload/v1726159684/pexels-tima-miroshnichenko-8376277_t117cw.jpg"
    },
    {
        "name": "Raihan Khan",
        "phone": "+880 1923456789",
        "time": "3:15 PM",
        "img": "https://res.cloudinary.com/dz3kxnsxr/image/upload/v1726159684/pexels-tima-miroshnichenko-8376277_t117cw.jpg"
    },
    {
        "name": "Lina Rahman",
        "phone": "+880 1712345678",
        "time": "4:30 PM",
        "img": "https://res.cloudinary.com/dz3kxnsxr/image/upload/v1726159684/pexels-tima-miroshnichenko-8376277_t117cw.jpg"
    },
    {
        "name": "Arif Hossain",
        "phone": "+880 1987654321",
        "time": "5:45 PM",
        "img": "https://res.cloudinary.com/dz3kxnsxr/image/upload/v1726159684/pexels-tima-miroshnichenko-8376277_t117cw.jpg"
    },
    {
        "name": "Maria Ahmed",
        "phone": "+880 1854321987",
        "time": "6:00 PM",
        "img": "https://res.cloudinary.com/dz3kxnsxr/image/upload/v1726159684/pexels-tima-miroshnichenko-8376277_t117cw.jpg"
    },
    {
        "name": "Tanvir Hasan",
        "phone": "+880 1789012345",
        "time": "7:30 PM",
        "img": "https://res.cloudinary.com/dz3kxnsxr/image/upload/v1726159684/pexels-tima-miroshnichenko-8376277_t117cw.jpg"
    }
]