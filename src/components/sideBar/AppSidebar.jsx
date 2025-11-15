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
import { useEffect } from "react";

import { Link } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import NavMain from "./NavMain";
import NavUser from "./NavUser";
import SideHeader from "./SideHeader";

// authStore
import { useAuthStore } from "../../store/useAuthStore";

/*
 Sidebar data for user and restaurants. 
 Remember to get the logged user based on role from your store
*/
const sidebarData = {
  // Sidebar data for user
  user: {
    loggedUser: {
      name: "Ibrahim Yusuf",
      email: "ibrahimyusuf1304@gmail.com",
      avatar: "/avatars/user.jpg",
    },

    // links for user routes
    navMain: [
      { title: "Dashboard", path: "/", icon: LayoutDashboard },
      { title: "Explore Restaurants", path: "/user/explore", icon: Compass },
      { title: "My Reservations", path: "/user/reservations", icon: Book },
      { title: "My Earnings", path: "/user/earnings", icon: DollarSign },
      { title: "Invite Friends", path: "/user/invite", icon: Share2 },
      { title: "Invite Messages", path: "/user/messages", icon: MessageSquareText },
    ],
  },

  // Sidebar data for restaurant
  restaurant: {
    loggedUser: {
      name: "Ibrahim Yusuf",
      email: "ibrahimyusuf1304@gmail.com",
      avatar: "/avatars/user.jpg",
    },

    // links for restaurant routes
    navMain: [
      { title: "Dashboard", path: "/", icon: LayoutDashboard },
      { title: "My Reservations", path: "/restaurant/reservations", icon: Book },
      { title: "Special Offer", path: "/restaurant/offer", icon: Gift },
      { title: "Analytics", path: "/restaurant/analytics", icon: ChartNoAxesColumnDecreasing },
      { title: "Invite Friends", path: "/restaurant/invite", icon: Share2 },
      { title: "Payment", path: "/restaurant/payment", icon: DollarSign },
      { title: "Messages", path: "/restaurant/messages", icon: MessageSquareText },
    ],
  },
};

const AppSidebar = () => {
  const user = useAuthStore((state) => state.user);
  // Get the type of logged user and set items accordingly
  const userType = user.role
  const data = sidebarData[userType];
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SideHeader />
      </SidebarHeader>

      <SidebarContent className="ml-1.5">
        {/* Main navigation items */}
        <NavMain items={data.navMain} />
      </SidebarContent>

      {/* Footer navigation items, where user can also signout */}
      <SidebarFooter>
        <NavUser  />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default AppSidebar;
