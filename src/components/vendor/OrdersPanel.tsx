import { Package, Clock, CheckCircle, XCircle, Users, ShoppingCart, Calendar, Truck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data for orders
const mockDirectOrders = [
  {
    id: 'DO001',
    supplierName: 'Green Valley Farms',
    items: [
      { name: 'Fresh Tomatoes', quantity: 10, unit: 'kg', price: 400 },
      { name: 'Onions', quantity: 5, unit: 'kg', price: 150 }
    ],
    totalAmount: 550,
    status: 'delivered' as const,
    orderDate: '2024-01-15',
    estimatedDelivery: '2024-01-15'
  },
  {
    id: 'DO002',
    supplierName: 'Spice Kingdom',
    items: [
      { name: 'Turmeric Powder', quantity: 2, unit: 'kg', price: 300 },
      { name: 'Red Chili Powder', quantity: 1, unit: 'kg', price: 180 }
    ],
    totalAmount: 480,
    status: 'shipped' as const,
    orderDate: '2024-01-16',
    estimatedDelivery: '2024-01-17'
  },
  {
    id: 'DO003',
    supplierName: 'Fresh Dairy Co.',
    items: [
      { name: 'Fresh Milk', quantity: 20, unit: 'liters', price: 1200 }
    ],
    totalAmount: 1200,
    status: 'pending' as const,
    orderDate: '2024-01-17',
    estimatedDelivery: '2024-01-18'
  }
];

const mockGroupOrders = [
  {
    id: 'GO001',
    title: 'Bulk Rice Purchase - Premium Basmati',
    supplierName: 'Golden Grains Trading',
    targetAmount: 15000,
    currentAmount: 12500,
    participants: 8,
    endDate: '2024-01-20',
    status: 'active' as const,
    description: 'High-quality basmati rice at wholesale prices'
  },
  {
    id: 'GO002',
    title: 'Fresh Vegetables Weekly Bundle',
    supplierName: 'Green Valley Farms',
    targetAmount: 8000,
    currentAmount: 8000,
    participants: 12,
    endDate: '2024-01-15',
    status: 'fulfilled' as const,
    description: 'Weekly assorted vegetable bundle for street vendors'
  },
  {
    id: 'GO003',
    title: 'Spice Mix Variety Pack',
    supplierName: 'Spice Kingdom',
    targetAmount: 5000,
    currentAmount: 3200,
    participants: 6,
    endDate: '2024-01-25',
    status: 'active' as const,
    description: 'Authentic spice mixes at discounted group rates'
  }
];

export const OrdersPanel = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-success/20 text-success border-success/30';
      case 'shipped': return 'bg-primary/20 text-primary border-primary/30';
      case 'confirmed': return 'bg-accent/20 text-accent border-accent/30';
      case 'pending': return 'bg-warning/20 text-warning border-warning/30';
      case 'cancelled': return 'bg-destructive/20 text-destructive border-destructive/30';
      case 'active': return 'bg-primary/20 text-primary border-primary/30';
      case 'fulfilled': return 'bg-success/20 text-success border-success/30';
      case 'closed': return 'bg-muted/20 text-muted-foreground border-muted/30';
      default: return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered': return <CheckCircle className="w-4 h-4" />;
      case 'shipped': return <Truck className="w-4 h-4" />;
      case 'confirmed': return <Package className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'cancelled': return <XCircle className="w-4 h-4" />;
      case 'active': return <Clock className="w-4 h-4" />;
      case 'fulfilled': return <CheckCircle className="w-4 h-4" />;
      default: return <Package className="w-4 h-4" />;
    }
  };

  return (
    <Card className="vendor-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <Package className="w-5 h-5 text-primary" />
          Orders Management
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <Tabs defaultValue="direct" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="direct" className="flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              Direct Orders
            </TabsTrigger>
            <TabsTrigger value="group" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Group Orders
            </TabsTrigger>
          </TabsList>

          <TabsContent value="direct" className="space-y-4">
            {mockDirectOrders.map((order) => (
              <Card key={order.id} className="bg-secondary/50 border-border hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground">Order #{order.id}</h4>
                      <p className="text-sm text-muted-foreground">{order.supplierName}</p>
                    </div>
                    <Badge variant="outline" className={getStatusColor(order.status)}>
                      {getStatusIcon(order.status)}
                      <span className="ml-1 capitalize">{order.status}</span>
                    </Badge>
                  </div>

                  <div className="space-y-2 mb-3">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {item.name} ({item.quantity} {item.unit})
                        </span>
                        <span className="text-foreground font-medium">₹{item.price}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Ordered: {order.orderDate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Truck className="w-4 h-4" />
                        <span>Delivery: {order.estimatedDelivery}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-primary">₹{order.totalAmount}</p>
                      <p className="text-xs text-muted-foreground">Total Amount</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="group" className="space-y-4">
            {mockGroupOrders.map((order) => {
              const progressPercentage = (order.currentAmount / order.targetAmount) * 100;
              
              return (
                <Card key={order.id} className="bg-secondary/50 border-border hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{order.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{order.description}</p>
                        <p className="text-sm text-muted-foreground">Supplier: {order.supplierName}</p>
                      </div>
                      <Badge variant="outline" className={getStatusColor(order.status)}>
                        {getStatusIcon(order.status)}
                        <span className="ml-1 capitalize">{order.status}</span>
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="text-foreground font-medium">
                            ₹{order.currentAmount.toLocaleString()} / ₹{order.targetAmount.toLocaleString()}
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>{progressPercentage.toFixed(1)}% Complete</span>
                          <span>{order.participants} Participants</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-border">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>Ends: {order.endDate}</span>
                        </div>
                        
                        {order.status === 'active' && (
                          <Button className="vendor-button-primary px-4 py-2 text-sm">
                            Join Group
                          </Button>
                        )}
                        
                        {order.status === 'fulfilled' && (
                          <div className="text-right">
                            <p className="text-sm font-medium text-success">Order Fulfilled!</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};