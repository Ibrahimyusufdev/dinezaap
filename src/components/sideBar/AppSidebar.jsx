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
import NavUser from "./NavUser";

// Side bar data config
const sideBarData = {
  // getting logged in user data to use for the sidebar footer
  user: {
    name: "Ibrahim Yusuf",
    email: "Ibrahim.techresources@gmail.com",
    avatar: "/avatars/user.svg",
  },

  // Links for user routes - remember to make it composable when you add routes for restaurant
  navMain: [
    { title: "Dashboard", path: "/", icon: LayoutDashboard },
    { title: "Explore Restaurants", path: "/user/explore", icon: Compass },
    { title: "My Reservations", path: "/user/reservations", icon: Book },
    { title: "My Earnings", path: "/user/earnings", icon: DollarSign },
    { title: "Invite Friends", path: "/user/invite", icon: Share2 },
    { title: "Messages", path: "/user/messages", icon: MessageSquareText },
  ],
};

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SideHeader />
      </SidebarHeader>

      <SidebarContent className="ml-1.5">
        {/* Main navigation items */}
        <NavMain items={sideBarData.navMain} />
      </SidebarContent>

      {/* Footer navigation items, where user can also signout */}
      <SidebarFooter>
        <NavUser user={sideBarData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default AppSidebar;
