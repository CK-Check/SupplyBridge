import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SupplierSidebar } from "@/components/SupplierSidebar";

export function SupplierLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <SupplierSidebar />
        
        <main className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-16 border-b border-border/50 flex items-center px-6 gradient-dark">
            <SidebarTrigger className="hover-lift shadow-glow" />
            <div className="ml-auto flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-medium">Good evening</p>
                <p className="text-xs text-muted-foreground">Supplier Dashboard</p>
              </div>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-glow">
                <span className="text-sm font-bold text-primary-foreground">S</span>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="flex-1 p-6 overflow-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}