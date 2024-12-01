import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'

const UserRole = () => {
    const [selectedRole, setSelectedRole] = React.useState("patient")

    const handleRoleChange = (value: string) => {
        setSelectedRole(value)
        console.log("Selected role:", value)
    }
    return (
        <Tabs value={selectedRole} onValueChange={handleRoleChange} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="patient">Patient</TabsTrigger>
                <TabsTrigger value="doctor">Doctor</TabsTrigger>
                <TabsTrigger value="receptionist">Receptionist</TabsTrigger>
                <TabsTrigger value="pharmacist">Pharmacist</TabsTrigger>
            </TabsList>
        </Tabs>
    )
}

export default UserRole