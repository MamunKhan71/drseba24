import { ReactNode, useState } from "react"; // Import ReactNode
// import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Pill, Plus, Stethoscope, TestTube, UserPlus } from "lucide-react";

export default function FloatingSpeedDial() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    interface MenuItem {
        icon: ReactNode; 
        label: string;
    }

    const menuItems: MenuItem[] = [
        { icon: <TestTube className="h-4 w-4" />, label: 'Add Lab Test' },
        { icon: <Pill className="h-4 w-4" />, label: 'Add Medicine' },
        { icon: <UserPlus className="h-4 w-4" />, label: 'Add Patient' },
        { icon: <Stethoscope className="h-4 w-4" />, label: 'Add Doctor' },
    ];

    return (
        <div className="fixed bottom-4 right-12 z-50">
            <div className="relative">
                {isOpen && (
                    <div
                        className="absolute bottom-20 right-0 flex flex-col-reverse items-center space-y-2 space-y-reverse">
                        {menuItems.map((item, index) => (
                            <Button
                                key={`label${index + 1}`}
                                className="rounded-full border bg-primary text-white  flex w-36 justify-start pl-4 items-center gap-2 shadow-lg transition-all duration-200 ease-in-out hover:bg-secondary hover:text-white"
                                style={{
                                    transform: `translateY(-${(index + 1) * 0.5}rem)`,
                                    opacity: isOpen ? 1 : 0,
                                    transition: `transform 0.3s ease-in-out ${index * 0.1}s, opacity 0.3s ease-in-out ${index * 0.1}s`,
                                }}
                            >
                                {item.icon}
                                <span className="">{item.label}</span>
                            </Button>
                        ))}
                    </div>
                )}
                <Button
                    variant="default"
                    size="icon"
                    className="rounded-full h-16 w-16 p-2 shadow-lg bg-primary hover:bg-secondary text-white hover:ring-8 ring-gray-200 transition-all ease-in-out animate-bouncePause hover:animate-none"
                    onClick={toggleMenu}
                    onBlur={() => setIsOpen(false)}
                >
                    <Plus className={`h-12 text-white w-12 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </div>
        </div>
    );
}
