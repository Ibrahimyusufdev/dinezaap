import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "../components/sideBar/AppSidebar";
import { Outlet } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../features/user/pages/DashboardUser";
import Earnings from "../features/user/pages/Earnings";
import Explore from "../features/user/pages/Explore";
import Invite from "../features/user/pages/Invite";
import Messages from "../features/user/pages/Messages";
import Reservations from "../features/user/pages/Reservations";

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 p-4">
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
