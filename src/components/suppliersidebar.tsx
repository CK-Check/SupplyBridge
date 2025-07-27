import { Package, ShoppingCart, Plus, BarChart3, Settings, LogOut } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { title: "Dashboard", url: "/supplier", icon: BarChart3 },
  { title: "Add Materials", url: "/supplier/add-materials", icon: Plus },
  { title: "Manage Orders", url: "/supplier/orders", icon: ShoppingCart },
  { title: "Inventory", url: "/supplier/inventory", icon: Package },
];

export function SupplierSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-primary text-primary-foreground font-medium shadow-glow" : "hover:bg-secondary/50 hover:text-foreground";

  return (
    <Sidebar
      className={`${collapsed ? "w-16" : "w-64"} gradient-dark border-r border-border/50 transition-all duration-300`}
      collapsible="icon"
    >
      <SidebarHeader className="p-4 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary rounded-lg shadow-glow">
            <Package className="h-6 w-6 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div className="animate-fade-in">
              <h2 className="text-lg font-bold gradient-primary bg-clip-text text-transparent">
                SupplyHub
              </h2>
              <p className="text-xs text-muted-foreground">Supplier Portal</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "sr-only" : "text-muted-foreground font-medium"}>
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={`${getNavCls({ isActive: isActive(item.url) })} rounded-lg transition-all duration-300 hover-lift`}
                    >
                      <item.icon className="h-5 w-5 min-w-5" />
                      {!collapsed && (
                        <span className="animate-fade-in font-medium">{item.title}</span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-border/50">
        <div className="space-y-2">
          <Button variant="ghost" size={collapsed ? "icon" : "sm"} className="w-full hover-glow">
            <Settings className="h-4 w-4" />
            {!collapsed && <span className="ml-2">Settings</span>}
          </Button>
          <Button variant="ghost" size={collapsed ? "icon" : "sm"} className="w-full hover:bg-destructive/20 hover:text-destructive">
            <LogOut className="h-4 w-4" />
            {!collapsed && <span className="ml-2">Logout</span>}
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}