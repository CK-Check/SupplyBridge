import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  ShoppingCart, 
  Users, 
  TrendingUp, 
  Shield, 
  Clock, 
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Truck,
  FileText,
  Zap,
  Menu,
  ChevronDown
} from "lucide-react"

export default function LandingPage() {
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
              <span className="text-xl font-bold text-white">
                SupplyBridge
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-6">
                <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
                  Features
                </Link>
                <Link href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
                  How it Works
                </Link>
                <Link href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
                  Testimonials
                </Link>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
                <div className="relative group">
                  <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors">
                    <span>For Suppliers</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      <Link href="/auth/signup?type=supplier" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700">
                        Join as Supplier
                      </Link>
                      <Link href="/supplier-benefits" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700">
                        Supplier Benefits
                      </Link>
                      <Link href="/supplier-registration" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700">
                        Registration Guide
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800" asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
                <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800" asChild>
                  <Link href="/auth/login">Login</Link>
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <Link href="/auth/signup">Get Started</Link>
                </Button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-gray-800 text-gray-300 border border-gray-700">
                  Connecting 1000+ vendors daily
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white">
                  Bridge the gap between 
                  <span className="text-blue-400 block">
                    vendors & suppliers
                  </span>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed">
                  Connect street food vendors with verified suppliers. Smart matching, 
                  automated invoicing, and reliable delivery - all in one platform.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6"
                  asChild
                >
                  <Link href="/auth/signup">
                    Start Selling <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white" asChild>
                  <Link href="/suppliers">Join as Supplier</Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">5000+</div>
                  <div className="text-sm text-gray-400">Active Vendors</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm text-gray-400">Verified Suppliers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-sm text-gray-400">On-time Delivery</div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="bg-gray-800 border border-gray-700 rounded p-8">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-gray-900 border-gray-700">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-2">
                        <Users className="w-5 h-5 text-blue-400" />
                        <span className="font-semibold text-white">Raj's Food Cart</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Trust Score</span>
                          <Badge variant="secondary" className="bg-gray-700 text-gray-300">4.8</Badge>
                        </div>
                        <div className="text-xs text-gray-500">
                          "Found reliable suppliers instantly!"
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900 border-gray-700">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-2">
                        <Truck className="w-5 h-5 text-green-400" />
                        <span className="font-semibold text-white">Fresh Supplies Co.</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Delivery</span>
                          <Badge className="bg-green-900 text-green-300 border-green-700">On Time</Badge>
                        </div>
                        <div className="text-xs text-gray-500">
                          "Premium vegetables, daily delivery"
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-900 border-gray-700 col-span-2">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-white">Recent Order</span>
                        <Badge variant="outline" className="border-gray-600 text-gray-400">Processing</Badge>
                      </div>
                      <div className="mt-2 text-xs text-gray-500">
                        50kg Onions + 30kg Tomatoes • ₹2,800
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Everything you need to grow your business
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From smart supplier matching to automated invoicing, we've got every aspect of your supply chain covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-700 hover:border-gray-600 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-900 rounded flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <CardTitle className="text-white">Smart Matching</CardTitle>
                <CardDescription className="text-gray-400">
                  AI-powered algorithm matches you with the best suppliers based on location, quality, and price.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900 border-gray-700 hover:border-gray-600 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-900 rounded flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-white">Auto Invoicing</CardTitle>
                <CardDescription className="text-gray-400">
                  Generate professional invoices automatically with GST compliance and payment tracking.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900 border-gray-700 hover:border-gray-600 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-900 rounded flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-purple-400" />
                </div>
                <CardTitle className="text-white">Trust & Quality</CardTitle>
                <CardDescription className="text-gray-400">
                  Verified suppliers with quality ratings and delivery guarantees for peace of mind.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900 border-gray-700 hover:border-gray-600 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-900 rounded flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-orange-400" />
                </div>
                <CardTitle className="text-white">Local Network</CardTitle>
                <CardDescription className="text-gray-400">
                  Connect with suppliers in your area for faster delivery and fresher ingredients.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900 border-gray-700 hover:border-gray-600 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-red-900 rounded flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-red-400" />
                </div>
                <CardTitle className="text-white">Real-time Tracking</CardTitle>
                <CardDescription className="text-gray-400">
                  Track your orders from placement to delivery with live updates and notifications.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900 border-gray-700 hover:border-gray-600 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-900 rounded flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-indigo-400" />
                </div>
                <CardTitle className="text-white">Business Analytics</CardTitle>
                <CardDescription className="text-gray-400">
                  Insights into spending patterns, supplier performance, and inventory optimization.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              How SupplyBridge Works
            </h2>
            <p className="text-xl text-gray-400">
              Get started in minutes, not days
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Sign Up & Verify</h3>
              <p className="text-gray-400">
                Create your vendor profile and get verified in under 24 hours
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Browse & Connect</h3>
              <p className="text-gray-400">
                Discover verified suppliers in your area and check their ratings
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white">Order & Track</h3>
              <p className="text-gray-400">
                Place orders, track delivery, and manage invoices seamlessly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Trusted by thousands of vendors
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-gray-400">
                  "SupplyBridge transformed my business. I save 3 hours daily and get better prices through their supplier network."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white font-semibold">R</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Rajesh Kumar</div>
                    <div className="text-sm text-gray-400">Street Food Vendor, Mumbai</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-gray-400">
                  "The smart matching feature is incredible. It found me suppliers I never knew existed, with better quality and prices."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white font-semibold">P</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Priya Sharma</div>
                    <div className="text-sm text-gray-400">Food Cart Owner, Delhi</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-gray-400">
                  "Automated invoicing and GST compliance made my life so much easier. I can focus on cooking instead of paperwork."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white font-semibold">A</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Amit Patel</div>
                    <div className="text-sm text-gray-400">Tiffin Service, Pune</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Ready to revolutionize your supply chain?
            </h2>
            <p className="text-xl text-blue-100">
              Join thousands of vendors who've streamlined their operations with SupplyBridge
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6"
                asChild
              >
                <Link href="/auth/signup">
                  Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6"
                asChild
              >
                <Link href="/demo">Book a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">SupplyBridge</span>
              </div>
              <p className="text-gray-400">
                Connecting vendors with suppliers for a better tomorrow.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <div className="space-y-2 text-gray-400">
                <Link href="#features" className="block hover:text-white transition-colors">Features</Link>
                <Link href="/pricing" className="block hover:text-white transition-colors">Pricing</Link>
                <Link href="/api" className="block hover:text-white transition-colors">API</Link>
                <Link href="/security" className="block hover:text-white transition-colors">Security</Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2 text-gray-400">
                <Link href="/about" className="block hover:text-white transition-colors">About</Link>
                <Link href="/blog" className="block hover:text-white transition-colors">Blog</Link>
                <Link href="/careers" className="block hover:text-white transition-colors">Careers</Link>
                <Link href="/contact" className="block hover:text-white transition-colors">Contact</Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2 text-gray-400">
                <Link href="/help" className="block hover:text-white transition-colors">Help Center</Link>
                <Link href="/docs" className="block hover:text-white transition-colors">Documentation</Link>
                <Link href="/community" className="block hover:text-white transition-colors">Community</Link>
                <Link href="/status" className="block hover:text-white transition-colors">Status</Link>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />
          
          <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400">
            <div>© 2024 SupplyBridge. All rights reserved.</div>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <div>Privacy Policy</div>
              <div>Terms of Service</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}