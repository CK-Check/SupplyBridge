import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
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
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  MoreHorizontal,
  Settings,
  Home,
  BarChart3,
  Wallet,
  Building
} from "lucide-react"

export default function VendorDashboard() {
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
                  <span className="text-white text-sm font-semibold">R</span>
                </div>
                <span className="text-gray-300">Rajesh Kumar</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800 border-r border-gray-700 min-h-screen">
          <div className="p-4">
            <nav className="space-y-2">
              <Link href="/home" className="flex items-center space-x-3 px-3 py-2 rounded bg-gray-700 text-white">
                <Home className="w-5 h-5" />
                <span>Home</span>
              </Link>
              
              <Link href="/dashboard" className="flex items-center space-x-3 px-3 py-2 rounded bg-blue-600 text-white">
                <BarChart3 className="w-5 h-5" />
                <span>Dashboard</span>
              </Link>
              
              <Link href="/orders" className="flex items-center space-x-3 px-3 py-2 rounded text-gray-300 hover:bg-gray-700 hover:text-white">
                <Package className="w-5 h-5" />
                <span>Orders</span>
              </Link>
              
              <Link href="/suppliers" className="flex items-center space-x-3 px-3 py-2 rounded text-gray-300 hover:bg-gray-700 hover:text-white">
                <Users className="w-5 h-5" />
                <span>Suppliers</span>
              </Link>
              
              <Link href="/inventory" className="flex items-center space-x-3 px-3 py-2 rounded text-gray-300 hover:bg-gray-700 hover:text-white">
                <Building className="w-5 h-5" />
                <span>Inventory</span>
              </Link>
              
              <Link href="/finances" className="flex items-center space-x-3 px-3 py-2 rounded text-gray-300 hover:bg-gray-700 hover:text-white">
                <Wallet className="w-5 h-5" />
                <span>Finances</span>
              </Link>
              
              <Link href="/analytics" className="flex items-center space-x-3 px-3 py-2 rounded text-gray-300 hover:bg-gray-700 hover:text-white">
                <TrendingUp className="w-5 h-5" />
                <span>Analytics</span>
              </Link>
              
              <Link href="/settings" className="flex items-center space-x-3 px-3 py-2 rounded text-gray-300 hover:bg-gray-700 hover:text-white">
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </Link>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
                <p className="text-gray-400">Manage your business operations</p>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Plus className="mr-2 h-4 w-4" />
                New Order
              </Button>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">Total Orders</CardTitle>
                <Package className="h-4 w-4 text-blue-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">247</div>
                <p className="text-xs text-green-400">+12% from last month</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">Monthly Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-green-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">₹1,24,560</div>
                <p className="text-xs text-green-400">+8% from last month</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">Active Suppliers</CardTitle>
                <Users className="h-4 w-4 text-purple-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">12</div>
                <p className="text-xs text-gray-400">3 new this month</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">Trust Score</CardTitle>
                <Star className="h-4 w-4 text-yellow-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">4.8</div>
                <p className="text-xs text-green-400">+0.2 this month</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Dashboard Tabs */}
          <Tabs defaultValue="orders" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-gray-800 border border-gray-700">
              <TabsTrigger value="orders" className="text-gray-400 data-[state=active]:text-white data-[state=active]:bg-gray-700">
                Orders
              </TabsTrigger>
              <TabsTrigger value="suppliers" className="text-gray-400 data-[state=active]:text-white data-[state=active]:bg-gray-700">
                Suppliers
              </TabsTrigger>
              <TabsTrigger value="inventory" className="text-gray-400 data-[state=active]:text-white data-[state=active]:bg-gray-700">
                Inventory
              </TabsTrigger>
              <TabsTrigger value="finances" className="text-gray-400 data-[state=active]:text-white data-[state=active]:bg-gray-700">
                Finances
              </TabsTrigger>
            </TabsList>

            {/* Orders Tab */}
            <TabsContent value="orders">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-white">Recent Orders</CardTitle>
                      <CardDescription className="text-gray-400">
                        Track and manage your orders
                      </CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          placeholder="Search orders..."
                          className="pl-10 bg-gray-900 border-gray-700 text-white"
                        />
                      </div>
                      <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                        <Filter className="mr-2 h-4 w-4" />
                        Filter
                      </Button>
                      <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                        <Download className="mr-2 h-4 w-4" />
                        Export
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-gray-700">
                        <TableHead className="text-gray-400">Order ID</TableHead>
                        <TableHead className="text-gray-400">Supplier</TableHead>
                        <TableHead className="text-gray-400">Items</TableHead>
                        <TableHead className="text-gray-400">Amount</TableHead>
                        <TableHead className="text-gray-400">Status</TableHead>
                        <TableHead className="text-gray-400">Date</TableHead>
                        <TableHead className="text-gray-400">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="border-gray-700">
                        <TableCell className="text-white font-medium">#ORD-1249</TableCell>
                        <TableCell className="text-gray-300">Fresh Mart Supplies</TableCell>
                        <TableCell className="text-gray-300">Vegetables, Fruits</TableCell>
                        <TableCell className="text-white">₹2,400</TableCell>
                        <TableCell>
                          <Badge className="bg-green-900 text-green-300 border-green-700">Delivered</Badge>
                        </TableCell>
                        <TableCell className="text-gray-300">2024-01-15</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                      
                      <TableRow className="border-gray-700">
                        <TableCell className="text-white font-medium">#ORD-1248</TableCell>
                        <TableCell className="text-gray-300">Spice Kingdom</TableCell>
                        <TableCell className="text-gray-300">Spices, Oil</TableCell>
                        <TableCell className="text-white">₹1,800</TableCell>
                        <TableCell>
                          <Badge className="bg-blue-900 text-blue-300 border-blue-700">In Transit</Badge>
                        </TableCell>
                        <TableCell className="text-gray-300">2024-01-14</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                      
                      <TableRow className="border-gray-700">
                        <TableCell className="text-white font-medium">#ORD-1247</TableCell>
                        <TableCell className="text-gray-300">Premium Produce</TableCell>
                        <TableCell className="text-gray-300">Organic Vegetables</TableCell>
                        <TableCell className="text-white">₹3,200</TableCell>
                        <TableCell>
                          <Badge className="bg-orange-900 text-orange-300 border-orange-700">Processing</Badge>
                        </TableCell>
                        <TableCell className="text-gray-300">2024-01-13</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>

                      <TableRow className="border-gray-700">
                        <TableCell className="text-white font-medium">#ORD-1246</TableCell>
                        <TableCell className="text-gray-300">Daily Fresh Co.</TableCell>
                        <TableCell className="text-gray-300">Dairy, Eggs</TableCell>
                        <TableCell className="text-white">₹950</TableCell>
                        <TableCell>
                          <Badge className="bg-red-900 text-red-300 border-red-700">Cancelled</Badge>
                        </TableCell>
                        <TableCell className="text-gray-300">2024-01-12</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Suppliers Tab */}
            <TabsContent value="suppliers">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-white">Your Suppliers</CardTitle>
                      <CardDescription className="text-gray-400">
                        Manage your supplier network
                      </CardDescription>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Supplier
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="bg-gray-900 border-gray-700">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-green-600 rounded flex items-center justify-center">
                              <span className="text-white font-semibold">F</span>
                            </div>
                            <div>
                              <CardTitle className="text-white text-base">Fresh Mart Supplies</CardTitle>
                              <p className="text-sm text-gray-400">2.3 km away</p>
                            </div>
                          </div>
                          <Badge className="bg-green-900 text-green-300 border-green-700">4.9</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <p className="text-sm text-gray-400">Vegetables, Fruits, Dairy</p>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400">Orders this month</span>
                            <span className="text-white">12</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400">Total spent</span>
                            <span className="text-white">₹28,400</span>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                              Order Now
                            </Button>
                            <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-900 border-gray-700">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-orange-600 rounded flex items-center justify-center">
                              <span className="text-white font-semibold">S</span>
                            </div>
                            <div>
                              <CardTitle className="text-white text-base">Spice Kingdom</CardTitle>
                              <p className="text-sm text-gray-400">1.8 km away</p>
                            </div>
                          </div>
                          <Badge className="bg-green-900 text-green-300 border-green-700">4.7</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <p className="text-sm text-gray-400">Spices, Grains, Oil</p>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400">Orders this month</span>
                            <span className="text-white">8</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400">Total spent</span>
                            <span className="text-white">₹15,600</span>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                              Order Now
                            </Button>
                            <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-900 border-gray-700">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-purple-600 rounded flex items-center justify-center">
                              <span className="text-white font-semibold">P</span>
                            </div>
                            <div>
                              <CardTitle className="text-white text-base">Premium Produce</CardTitle>
                              <p className="text-sm text-gray-400">3.1 km away</p>
                            </div>
                          </div>
                          <Badge className="bg-green-900 text-green-300 border-green-700">4.8</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <p className="text-sm text-gray-400">Organic Vegetables</p>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400">Orders this month</span>
                            <span className="text-white">5</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400">Total spent</span>
                            <span className="text-white">₹19,200</span>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                              Order Now
                            </Button>
                            <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Inventory Tab */}
            <TabsContent value="inventory">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-white">Inventory Status</CardTitle>
                      <CardDescription className="text-gray-400">
                        Monitor your stock levels
                      </CardDescription>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Item
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card className="bg-gray-900 border-gray-700">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-white">Onions</h3>
                          <Badge className="bg-red-900 text-red-300 border-red-700">Low Stock</Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Current Stock</span>
                            <span className="text-white">5 kg</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Reorder Level</span>
                            <span className="text-gray-400">10 kg</span>
                          </div>
                          <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                            Reorder Now
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-900 border-gray-700">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-white">Tomatoes</h3>
                          <Badge className="bg-green-900 text-green-300 border-green-700">In Stock</Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Current Stock</span>
                            <span className="text-white">25 kg</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Reorder Level</span>
                            <span className="text-gray-400">15 kg</span>
                          </div>
                          <Button size="sm" variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700">
                            Update Stock
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-900 border-gray-700">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-white">Rice</h3>
                          <Badge className="bg-yellow-900 text-yellow-300 border-yellow-700">Medium Stock</Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Current Stock</span>
                            <span className="text-white">15 kg</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Reorder Level</span>
                            <span className="text-gray-400">10 kg</span>
                          </div>
                          <Button size="sm" variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700">
                            Update Stock
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Finances Tab */}
            <TabsContent value="finances">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-white">Financial Overview</CardTitle>
                      <CardDescription className="text-gray-400">
                        Track invoices and payments
                      </CardDescription>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Download className="mr-2 h-4 w-4" />
                      Export Report
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    <Card className="bg-gray-900 border-gray-700">
                      <CardContent className="p-4">
                        <div className="text-center">
                          <p className="text-sm text-gray-400 mb-1">Pending Payments</p>
                          <p className="text-2xl font-bold text-red-400">₹8,400</p>
                          <p className="text-xs text-gray-500">3 invoices</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-900 border-gray-700">
                      <CardContent className="p-4">
                        <div className="text-center">
                          <p className="text-sm text-gray-400 mb-1">This Month</p>
                          <p className="text-2xl font-bold text-white">₹45,230</p>
                          <p className="text-xs text-green-400">+12% vs last month</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-900 border-gray-700">
                      <CardContent className="p-4">
                        <div className="text-center">
                          <p className="text-sm text-gray-400 mb-1">Total Saved</p>
                          <p className="text-2xl font-bold text-green-400">₹12,800</p>
                          <p className="text-xs text-gray-500">vs market prices</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Recent Invoices */}
                  <Table>
                    <TableHeader>
                      <TableRow className="border-gray-700">
                        <TableHead className="text-gray-400">Invoice ID</TableHead>
                        <TableHead className="text-gray-400">Supplier</TableHead>
                        <TableHead className="text-gray-400">Amount</TableHead>
                        <TableHead className="text-gray-400">Status</TableHead>
                        <TableHead className="text-gray-400">Due Date</TableHead>
                        <TableHead className="text-gray-400">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="border-gray-700">
                        <TableCell className="text-white font-medium">#INV-1249</TableCell>
                        <TableCell className="text-gray-300">Fresh Mart Supplies</TableCell>
                        <TableCell className="text-white">₹2,400</TableCell>
                        <TableCell>
                          <Badge className="bg-green-900 text-green-300 border-green-700">Paid</Badge>
                        </TableCell>
                        <TableCell className="text-gray-300">2024-01-20</TableCell>
                        <TableCell>
                          <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                            <Download className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      
                      <TableRow className="border-gray-700">
                        <TableCell className="text-white font-medium">#INV-1248</TableCell>
                        <TableCell className="text-gray-300">Spice Kingdom</TableCell>
                        <TableCell className="text-white">₹1,800</TableCell>
                        <TableCell>
                          <Badge className="bg-red-900 text-red-300 border-red-700">Overdue</Badge>
                        </TableCell>
                        <TableCell className="text-gray-300">2024-01-18</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                              Pay Now
                            </Button>
                            <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                      
                      <TableRow className="border-gray-700">
                        <TableCell className="text-white font-medium">#INV-1247</TableCell>
                        <TableCell className="text-gray-300">Premium Produce</TableCell>
                        <TableCell className="text-white">₹3,200</TableCell>
                        <TableCell>
                          <Badge className="bg-yellow-900 text-yellow-300 border-yellow-700">Pending</Badge>
                        </TableCell>
                        <TableCell className="text-gray-300">2024-01-25</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                              Pay Now
                            </Button>
                            <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Quick Actions Footer */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-white text-lg">Low Stock Alert</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm mb-4">3 items are running low and need restocking soon.</p>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  <AlertCircle className="mr-2 h-4 w-4" />
                  View Low Stock Items
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-white text-lg">Pending Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm mb-4">You have ₹8,400 in pending payments across 3 invoices.</p>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Pay Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-white text-lg">New Suppliers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm mb-4">2 new verified suppliers match your business requirements.</p>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <Users className="mr-2 h-4 w-4" />
                  Explore Suppliers
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}