import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, Package, Truck, CheckCircle, XCircle, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Order {
  id: string;
  vendorName: string;
  items: Array<{
    name: string;
    quantity: number;
    unit: string;
  }>;
  totalAmount: number;
  status: "pending" | "confirmed" | "preparing" | "shipped" | "delivered" | "cancelled";
  orderDate: string;
  expectedDelivery: string;
}

const mockOrders: Order[] = [
  {
    id: "ORD-001",
    vendorName: "Ramesh's Chaat Corner",
    items: [
      { name: "Fresh Tomatoes", quantity: 5, unit: "kg" },
      { name: "Onions", quantity: 3, unit: "kg" },
      { name: "Green Chili", quantity: 0.5, unit: "kg" }
    ],
    totalAmount: 450,
    status: "pending",
    orderDate: "2024-01-15",
    expectedDelivery: "2024-01-17"
  },
  {
    id: "ORD-002", 
    vendorName: "Priya's Dosa Stall",
    items: [
      { name: "Rice", quantity: 10, unit: "kg" },
      { name: "Urad Dal", quantity: 2, unit: "kg" }
    ],
    totalAmount: 800,
    status: "confirmed",
    orderDate: "2024-01-14",
    expectedDelivery: "2024-01-16"
  },
  {
    id: "ORD-003",
    vendorName: "Suresh's Biryani Cart",
    items: [
      { name: "Basmati Rice", quantity: 15, unit: "kg" },
      { name: "Chicken", quantity: 8, unit: "kg" },
      { name: "Spice Mix", quantity: 1, unit: "kg" }
    ],
    totalAmount: 2500,
    status: "preparing",
    orderDate: "2024-01-13",
    expectedDelivery: "2024-01-15"
  }
];

const statusConfig = {
  pending: { 
    icon: Clock, 
    color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    label: "Pending" 
  },
  confirmed: { 
    icon: CheckCircle, 
    color: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    label: "Confirmed" 
  },
  preparing: { 
    icon: Package, 
    color: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    label: "Preparing" 
  },
  shipped: { 
    icon: Truck, 
    color: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    label: "Shipped" 
  },
  delivered: { 
    icon: CheckCircle, 
    color: "bg-green-500/20 text-green-300 border-green-500/30",
    label: "Delivered" 
  },
  cancelled: { 
    icon: XCircle, 
    color: "bg-red-500/20 text-red-300 border-red-500/30",
    label: "Cancelled" 
  }
};

export function OrdersTable() {
  const { toast } = useToast();
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [filter, setFilter] = useState<string>("all");

  const filteredOrders = orders.filter(order => 
    filter === "all" || order.status === filter
  );

  const updateOrderStatus = (orderId: string, newStatus: Order["status"]) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
    
    toast({
      title: "Status Updated",
      description: `Order ${orderId} status changed to ${newStatus}`,
    });
  };

  const getStatusBadge = (status: Order["status"]) => {
    const config = statusConfig[status];
    const Icon = config.icon;
    
    return (
      <Badge variant="outline" className={`${config.color} hover-lift transition-all duration-300`}>
        <Icon className="h-3 w-3 mr-1" />
        {config.label}
      </Badge>
    );
  };

  return (
    <Card className="glass-effect hover-lift animate-fade-in">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary rounded-lg shadow-glow">
              <Package className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <CardTitle className="text-2xl gradient-primary bg-clip-text text-transparent">
                Incoming Orders
              </CardTitle>
              <CardDescription>
                Manage and track orders from street food vendors
              </CardDescription>
            </div>
          </div>
          
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-48 hover-glow">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Orders</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="confirmed">Confirmed</SelectItem>
              <SelectItem value="preparing">Preparing</SelectItem>
              <SelectItem value="shipped">Shipped</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>

      <CardContent>
        <div className="rounded-lg border border-border/50 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/30 hover:bg-muted/50">
                <TableHead className="font-semibold">Order ID</TableHead>
                <TableHead className="font-semibold">Vendor</TableHead>
                <TableHead className="font-semibold">Items</TableHead>
                <TableHead className="font-semibold">Amount</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
                <TableHead className="font-semibold">Order Date</TableHead>
                <TableHead className="font-semibold">Expected Delivery</TableHead>
                <TableHead className="font-semibold text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id} className="hover:bg-muted/20 transition-colors duration-200">
                  <TableCell className="font-mono font-medium text-primary">
                    {order.id}
                  </TableCell>
                  
                  <TableCell className="font-medium">
                    {order.vendorName}
                  </TableCell>
                  
                  <TableCell>
                    <div className="space-y-1">
                      {order.items.slice(0, 2).map((item, index) => (
                        <div key={index} className="text-sm text-muted-foreground">
                          {item.name} ({item.quantity} {item.unit})
                        </div>
                      ))}
                      {order.items.length > 2 && (
                        <div className="text-xs text-muted-foreground">
                          +{order.items.length - 2} more items
                        </div>
                      )}
                    </div>
                  </TableCell>
                  
                  <TableCell className="font-semibold text-green-400">
                    ₹{order.totalAmount.toLocaleString()}
                  </TableCell>
                  
                  <TableCell>
                    {getStatusBadge(order.status)}
                  </TableCell>
                  
                  <TableCell className="text-muted-foreground">
                    {new Date(order.orderDate).toLocaleDateString()}
                  </TableCell>
                  
                  <TableCell className="text-muted-foreground">
                    {new Date(order.expectedDelivery).toLocaleDateString()}
                  </TableCell>
                  
                  <TableCell>
                    <div className="flex items-center gap-2 justify-center">
                      <Button variant="ghost" size="icon" className="hover-lift">
                        <Eye className="h-4 w-4" />
                      </Button>
                      
                      <Select 
                        value={order.status} 
                        onValueChange={(value: Order["status"]) => updateOrderStatus(order.id, value)}
                      >
                        <SelectTrigger className="w-32 hover-glow">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="confirmed">Confirmed</SelectItem>
                          <SelectItem value="preparing">Preparing</SelectItem>
                          <SelectItem value="shipped">Shipped</SelectItem>
                          <SelectItem value="delivered">Delivered</SelectItem>
                          <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          {filteredOrders.length === 0 && (
            <div className="p-8 text-center text-muted-foreground">
              <Package className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">No orders found</p>
              <p className="text-sm">Orders matching your filter will appear here</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}