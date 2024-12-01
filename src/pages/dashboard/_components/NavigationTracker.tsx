'use client'

import React from "react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface NavigationTrackerProps {
    pathname: string;
}
export const NavigationTracker: React.FC<NavigationTrackerProps> = ({ pathname = '' }) => {
    const pathSegments = pathname.split('/').filter(Boolean)

    return (
        <Breadcrumb>
            <BreadcrumbList className="text-foreground">
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">home</BreadcrumbLink>
                </BreadcrumbItem>
                {pathSegments.map((segment, index) => {
                    const href = `/${pathSegments.slice(0, index + 1).join('/')}`
                    const isLast = index === pathSegments.length - 1
                    const label = segment.charAt(0).toLowerCase() + segment.slice(1)

                    return (
                        <React.Fragment key={href}>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                {isLast ? (
                                    <BreadcrumbPage className="font-medium text-blue-700">{label}</BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink href={href}>{label}</BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                        </React.Fragment>
                    )
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}
