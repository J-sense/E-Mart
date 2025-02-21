"use client";

import * as React from "react";
import { LayoutDashboard, Folder, Settings, FileText } from "lucide-react";

import { NavMain } from "@/components/dashboard/sidebar/nav-main";
import { NavUser } from "@/components/dashboard/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// Sidebar Navigation Data
const data = {
  user: {
    name: "Najmul Hassan Jishan",
    email: "example@email.com",
    avatar: "/avatars/user.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/user/dashboard",
      icon: LayoutDashboard,
      isActive: true, // Standalone Page (No Nested Items)
    },
    {
      title: "Main Page 1",
      url: "/main-page-1",
      icon: Folder,
      items: [
        { title: "Page 1.1", url: "/main-page-1/page1-1", icon: FileText },
        { title: "Page 1.2", url: "/main-page-1/page1-2", icon: FileText },
      ],
    },
    {
      title: "Main Page 2",
      url: "/main-page-2",
      icon: Folder,
      items: [
        { title: "Page 2.1", url: "/main-page-2/page2-1", icon: FileText },
        { title: "Page 2.2", url: "/main-page-2/page2-2", icon: FileText },
      ],
    },
    {
      title: "Main Page 3",
      url: "/main-page-3",
      icon: Settings,
      items: [
        { title: "Page 3.1", url: "/main-page-3/page3-1", icon: FileText },
        { title: "Page 3.2", url: "/main-page-3/page3-2", icon: FileText },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader />
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
