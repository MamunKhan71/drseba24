import { LucideIcon } from 'lucide-react';
interface DashboardCardProps {
    title: string;
    icon: LucideIcon; 
    count: number | string; 
}
export default function DashboardCard({ title, icon: Icon, count }: DashboardCardProps) {
    return (
        <div className="relative flex flex-col justify-center overflow-hidden rounded-xl shadow-lg">
            <div className="group flex justify-between relative cursor-pointer overflow-hidden border rounded-xl bg-primary px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300">
                <span className="absolute top-10 right-6 z-0 h-20 w-20 rounded-full bg-secondary transition-all duration-300 group-hover:scale-[10]" />
                <div className='text-foreground relative z-20'>
                    <h1 className='font-bold text-5xl text-left drop-shadow-md text-white'>{count}</h1>
                    <p className='font-bold text-xl drop-shadow-md text-white'>{title}</p>
                </div>
                <div className="relative z-10">
                    <span className="grid drop-shadow-md h-20 w-20 place-items-center rounded-full bg-secondary transition-all duration-300 group-hover:bg-secondary">
                        <Icon color='#ffff' size={40} />
                    </span>
                </div>
            </div>
        </div>
    )
}