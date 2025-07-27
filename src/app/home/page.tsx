import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  ShoppingCart, 
  Users, 
  TrendingUp, 
  Shield, 
  Clock, 
  MapPin,
  Star,
  Bell,
  Package,
  Truck,
  FileText,
  Plus,
  AlertCircle,
  CheckCircle,
  RefreshCw,
  ArrowUpRight,
  Calendar,
  DollarSign,
  Activity,
  Search
} from "lucide-react"
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";

const db = getDatabase();
const auth = getAuth();

const userId = auth.currentUser?.uid;
if (userId) {
  onValue(ref(db, '/users/' + userId), (snapshot) => {
    const username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    return username;
  }, {
    onlyOnce: true
  });
}


export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-gray-900 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">SupplyBridge</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="relative">
                <Bell className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">Rajesh</span>
                </div>
                <span className="text-gray-300"></span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Good morning, Rajesh</h1>
          <p className="text-gray-400">Here's what's happening with your business today</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Active Orders</CardTitle>
              <Package className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">12</div>
              <p className="text-xs text-gray-500">+2 from yesterday</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Monthly Spend</CardTitle>
              <DollarSign className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">₹45,230</div>
              <p className="text-xs text-gray-500">-8% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Trust Score</CardTitle>
              <Star className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">4.8</div>
              <p className="text-xs text-gray-500">+0.1 this week</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Suppliers</CardTitle>
              <Users className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">8</div>
              <p className="text-xs text-gray-500">2 new this month</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Quick Actions */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
                <CardDescription className="text-gray-400">
                  Common tasks to get you started
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white justify-start" asChild>
                  <Link href="/orders/new">
                    <Plus className="mr-2 h-4 w-4" />
                    Create New Order
                  </Link>
                </Button>
                
                <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white justify-start" asChild>
                  <Link href="/suppliers">
                    <Search className="mr-2 h-4 w-4" />
                    Find Suppliers
                  </Link>
                </Button>
                
                <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white justify-start" asChild>
                  <Link href="/invoices">
                    <FileText className="mr-2 h-4 w-4" />
                    View Invoices
                  </Link>
                </Button>
                
                <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white justify-start" asChild>
                  <Link href="/inventory">
                    <Package className="mr-2 h-4 w-4" />
                    Check Inventory
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Recent Activity & Notifications */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="activity" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-gray-800 border border-gray-700">
                <TabsTrigger value="activity" className="text-gray-400 data-[state=active]:text-white data-[state=active]:bg-gray-700">
                  Recent Activity
                </TabsTrigger>
                <TabsTrigger value="notifications" className="text-gray-400 data-[state=active]:text-white data-[state=active]:bg-gray-700">
                  Notifications
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="activity">
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">Recent Orders</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-900 rounded border border-gray-700">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <div>
                          <p className="text-white font-medium">Order #1247 Delivered</p>
                          <p className="text-sm text-gray-400">Fresh Vegetables - ₹2,400</p>
                        </div>
                      </div>
                      <Badge className="bg-green-900 text-green-300 border-green-700">Completed</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gray-900 rounded border border-gray-700">
                      <div className="flex items-center space-x-3">
                        <Truck className="h-5 w-5 text-blue-400" />
                        <div>
                          <p className="text-white font-medium">Order #1248 In Transit</p>
                          <p className="text-sm text-gray-400">Spices & Grains - ₹1,800</p>
                        </div>
                      </div>
                      <Badge className="bg-blue-900 text-blue-300 border-blue-700">Shipping</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gray-900 rounded border border-gray-700">
                      <div className="flex items-center space-x-3">
                        <RefreshCw className="h-5 w-5 text-orange-400" />
                        <div>
                          <p className="text-white font-medium">Order #1249 Processing</p>
                          <p className="text-sm text-gray-400">Dairy Products - ₹950</p>
                        </div>
                      </div>
                      <Badge className="bg-orange-900 text-orange-300 border-orange-700">Processing</Badge>
                    </div>
                    
                    <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white" asChild>
                      <Link href="/orders">
                        View All Orders <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="notifications">
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">Recent Notifications</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3 p-3 bg-gray-900 rounded border border-gray-700">
                      <AlertCircle className="h-5 w-5 text-red-400 mt-0.5" />
                      <div>
                        <p className="text-white font-medium">Low Stock Alert</p>
                        <p className="text-sm text-gray-400">Onions running low. Current stock: 5kg</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 p-3 bg-gray-900 rounded border border-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
                      <div>
                        <p className="text-white font-medium">Payment Received</p>
                        <p className="text-sm text-gray-400">Invoice #INV-1247 marked as paid</p>
                        <p className="text-xs text-gray-500">5 hours ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 p-3 bg-gray-900 rounded border border-gray-700">
                      <Users className="h-5 w-5 text-blue-400 mt-0.5" />
                      <div>
                        <p className="text-white font-medium">New Supplier Match</p>
                        <p className="text-sm text-gray-400">Premium Produce Co. matches your preferences</p>
                        <p className="text-xs text-gray-500">1 day ago</p>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white">
                      View All Notifications
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Recommended Suppliers */}
        <Card className="bg-gray-800 border-gray-700 mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-white">Recommended Suppliers</CardTitle>
                <CardDescription className="text-gray-400">
                  Based on your location and order history
                </CardDescription>
              </div>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white" asChild>
                <Link href="/suppliers">View All</Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">F</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Fresh Mart Supplies</h3>
                        <p className="text-xs text-gray-400">2.3 km away</p>
                      </div>
                    </div>
                    <Badge className="bg-green-900 text-green-300 border-green-700">4.9</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-400 mb-3">Vegetables, Fruits, Dairy</p>
                  <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    View Catalog
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-700">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">S</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Spice Kingdom</h3>
                        <p className="text-xs text-gray-400">1.8 km away</p>
                      </div>
                    </div>
                    <Badge className="bg-green-900 text-green-300 border-green-700">4.7</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-400 mb-3">Spices, Grains, Oil</p>
                  <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    View Catalog
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-700">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">P</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Premium Produce</h3>
                        <p className="text-xs text-gray-400">3.1 km away</p>
                      </div>
                    </div>
                    <Badge className="bg-green-900 text-green-300 border-green-700">4.8</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-400 mb-3">Organic Vegetables</p>
                  <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    View Catalog
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Quick Reorder */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Quick Reorder</CardTitle>
            <CardDescription className="text-gray-400">
              Frequently ordered items for easy reordering
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-gray-900 rounded border border-gray-700 text-center">
                <div className="w-12 h-12 bg-green-900 rounded mx-auto mb-2 flex items-center justify-center">
                  <Package className="w-6 h-6 text-green-400" />
                </div>
                <h4 className="font-medium text-white mb-1">Onions</h4>
                <p className="text-sm text-gray-400 mb-2">50kg - ₹1,200</p>
                <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Reorder
                </Button>
              </div>

              <div className="p-4 bg-gray-900 rounded border border-gray-700 text-center">
                <div className="w-12 h-12 bg-red-900 rounded mx-auto mb-2 flex items-center justify-center">
                  <Package className="w-6 h-6 text-red-400" />
                </div>
                <h4 className="font-medium text-white mb-1">Tomatoes</h4>
                <p className="text-sm text-gray-400 mb-2">30kg - ₹900</p>
                <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Reorder
                </Button>
              </div>

              <div className="p-4 bg-gray-900 rounded border border-gray-700 text-center">
                <div className="w-12 h-12 bg-yellow-900 rounded mx-auto mb-2 flex items-center justify-center">
                  <Package className="w-6 h-6 text-yellow-400" />
                </div>
                <h4 className="font-medium text-white mb-1">Rice</h4>
                <p className="text-sm text-gray-400 mb-2">25kg - ₹1,500</p>
                <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Reorder
                </Button>
              </div>

              <div className="p-4 bg-gray-900 rounded border border-gray-700 text-center">
                <div className="w-12 h-12 bg-blue-900 rounded mx-auto mb-2 flex items-center justify-center">
                  <Package className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="font-medium text-white mb-1">Oil</h4>
                <p className="text-sm text-gray-400 mb-2">5L - ₹650</p>
                <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Reorder
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}