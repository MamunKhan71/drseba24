import {
  Archive,
  BadgePercent,
  BookOpen,
  Bot,
  Calendar,
  ClipboardPlus,
  Command,
  FileText,
  Frame,
  Headset,
  LayoutDashboard,
  LifeBuoy,
  LucideBriefcaseMedical,
  Map,
  PieChart,
  PlusCircle,
  Send,
  Settings,
  Settings2,
  SquareTerminal,
  SquareTerminalIcon,
  User,
  UserRound,
  Users,
  Variable,
} from "lucide-react"
import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Mamun",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "/dashboard",
          icon: LayoutDashboard,
        },
        {
          title: "Patients",
          url: "/dashboard/patients",
          icon: Users,
        },
        {
          title: "Doctors",
          url: "/dashboard/doctors",
          icon: UserRound,
        },
        {
          title: "Appointments",
          url: "/dashboard/appointments",
          icon: LucideBriefcaseMedical,
        },
        {
          title: "Lab Tests",
          url: "/dashboard/lab-tests",
          icon: Variable,
        },
        {
          title: "Receptionist",
          url: "/dashboard/receptions",
          icon: Variable,
        },
        {
          title: "Add Medicine",
          url: "/dashboard/add-medicine",
          icon: PlusCircle,
        },
        {
          title: "Prescriptions",
          url: "/dashboard/prescriptions",
          icon: ClipboardPlus,
        },
      ],
    },
    {
      title: "Profile",
      url: "/dashboard/profile",
      icon: User,
      items: [
        {
          title: "Personal Info",
          url: "/dashboard/profile",
          icon: User,
        },
        {
          title: "Schedule",
          url: "/dashboard/schedule",
          icon: Calendar,
        },
      ],
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings,
    },
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader className="bg-primary text-white">
        <SidebarMenu className="bg-primary text-white">
          <SidebarMenuItem className="bg-primary text-white">
            <SidebarMenuButton size="lg" asChild className="text-white bg-primary">
              <a href="#" className="bg-primary text-white">
                <div className="text-white flex aspect-square bg-primary size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="bg-primary grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader >
      <SidebarContent className="bg-primary text-white">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter className="bg-primary text-white">
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
