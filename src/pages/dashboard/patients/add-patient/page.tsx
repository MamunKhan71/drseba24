"use client"
import { NavigationTracker } from '@/app/(dashboard)/_components/NavigationTracker'
import { usePathname } from 'next/navigation'
import React from 'react'

const AddPatient = () => {
    return (
        <div>
            <NavigationTracker pathname={usePathname()} />
        </div>
    )
}

export default AddPatient