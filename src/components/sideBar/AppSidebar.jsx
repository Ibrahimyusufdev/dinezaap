import {
  LayoutDashboard,
  Compass,
  Book,
  DollarSign,
  Share2,
  MessageSquareText,
  Gift,
  ChartNoAxesColumnDecreasing,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import SideHeader from "./SideHeader";
import NavMain from "./NavMain";

const AppSidebar = () => {
  const sideBarData = [
    { title: "Dashboard", path: "/user/dashboard", icon: LayoutDashboard },
    { title: "Explore Restaurants", path: "/user/explore", icon: Compass },
    { title: "My Reservations", path: "/user/reservations", icon: Book },
    { title: "My Earnings", path: "/user/earnings", icon: DollarSign },
    { title: "Invite Friends", path: "/user/invite", icon: Share2 },
    { title: "Invite Messages", path: "/user/messages", icon: MessageSquareText },
  ];
 

  return (
    <Sidebar>
      <SidebarHeader>
        <SideHeader />
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={sideBarData} />
      </SidebarContent>
    </Sidebar>
  )
};

export default AppSidebar;
