import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets.js";

const SideHeader = () => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" asChild>
          <Link to="/">
            <div className="bg-sidebar-secondary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
              <img src={assets.logo} alt="Dineza logo" className="h-8 w-8" />
            </div>
            <span className="font-medium">DinezaApp</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default SideHeader;
