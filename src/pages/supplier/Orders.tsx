import { OrdersTable } from "@/components/OrdersTable";

export function Orders() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
            Manage Orders
          </h1>
          <p className="text-muted-foreground mt-1">
            View and manage incoming orders from street food vendors
          </p>
        </div>
      </div>

      <OrdersTable />
    </div>
  );
}