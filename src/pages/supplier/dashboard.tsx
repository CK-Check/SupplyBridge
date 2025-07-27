import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Package, ShoppingCart, TrendingUp, Users, AlertCircle, CheckCircle } from "lucide-react";

const statsData = [
  {
    title: "Total Materials",
    value: "156",
    change: "+12%",
    trend: "up",
    icon: Package,
    color: "text-blue-400"
  },
  {
    title: "Active Orders",
    value: "23",
    change: "+5%", 
    trend: "up",
    icon: ShoppingCart,
    color: "text-green-400"
  },
  {
    title: "Monthly Revenue",
    value: "₹45,670",
    change: "+18%",
    trend: "up",
    icon: TrendingUp,
    color: "text-purple-400"
  },
  {
    title: "Vendor Partners",
    value: "89",
    change: "+7%",
    trend: "up",
    icon: Users,
    color: "text-orange-400"
  }
];

const recentActivity = [
  {
    id: 1,
    type: "order",
    message: "New order from Ramesh's Chaat Corner",
    time: "2 minutes ago",
    status: "pending"
  },
  {
    id: 2,
    type: "material",
    message: "Fresh Tomatoes stock updated",
    time: "15 minutes ago",
    status: "completed"
  },
  {
    id: 3,
    type: "order",
    message: "Order ORD-002 marked as delivered",
    time: "1 hour ago",
    status: "completed"
  },
  {
    id: 4,
    type: "alert",
    message: "Low stock alert: Green Chili",
    time: "2 hours ago",
    status: "warning"
  }
];

const topMaterials = [
  { name: "Fresh Tomatoes", orders: 45, revenue: "₹12,500", growth: 15 },
  { name: "Onions", orders: 38, revenue: "₹8,900", growth: 12 },
  { name: "Basmati Rice", orders: 32, revenue: "₹15,600", growth: 8 },
  { name: "Chicken", orders: 28, revenue: "₹22,400", growth: 22 },
  { name: "Spice Mix", orders: 25, revenue: "₹5,200", growth: 18 }
];

export function SupplierDashboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
            Supplier Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's your business overview.
          </p>
        </div>
        <Badge variant="outline" className="bg-green-500/20 text-green-300 border-green-500/30 hover-lift">
          <CheckCircle className="h-3 w-3 mr-1" />
          Online
        </Badge>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="glass-effect hover-lift" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold mt-2">
                      {stat.value}
                    </p>
                    <div className="flex items-center mt-2">
                      <Badge variant="outline" className="bg-green-500/20 text-green-300 border-green-500/30">
                        {stat.change}
                      </Badge>
                    </div>
                  </div>
                  <div className={`p-3 rounded-lg bg-primary/20 ${stat.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card className="glass-effect hover-lift">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary rounded-lg shadow-glow">
                <AlertCircle className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <CardTitle className="text-xl">Recent Activity</CardTitle>
                <CardDescription>Latest updates and notifications</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors duration-200">
                  <div className={`p-1.5 rounded-full ${
                    activity.status === 'completed' ? 'bg-green-500/20' :
                    activity.status === 'warning' ? 'bg-yellow-500/20' : 'bg-blue-500/20'
                  }`}>
                    {activity.status === 'completed' ? (
                      <CheckCircle className="h-3 w-3 text-green-400" />
                    ) : activity.status === 'warning' ? (
                      <AlertCircle className="h-3 w-3 text-yellow-400" />
                    ) : (
                      <Package className="h-3 w-3 text-blue-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Materials */}
        <Card className="glass-effect hover-lift">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary rounded-lg shadow-glow">
                <TrendingUp className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <CardTitle className="text-xl">Top Performing Materials</CardTitle>
                <CardDescription>Best selling items this month</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topMaterials.map((material, index) => (
                <div key={material.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{material.name}</p>
                      <p className="text-sm text-muted-foreground">{material.orders} orders</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-400">{material.revenue}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Progress value={material.growth * 5} className="w-16 h-2" />
                      <span className="text-xs text-green-400">+{material.growth}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}