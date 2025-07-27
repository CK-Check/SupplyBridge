import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, Target, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-gray-900 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                SupplyBridge
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800" asChild>
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="bg-gray-800 text-gray-300 border border-gray-700">
              About SupplyBridge
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Connecting Vendors & Suppliers
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              SupplyBridge is a revolutionary platform designed to bridge the gap between street food vendors 
              and raw material suppliers, creating a seamless supply chain ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  To empower street food vendors with reliable, efficient, and cost-effective supply chain solutions 
                  while helping suppliers expand their reach and grow their business.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  To become the leading platform connecting millions of vendors and suppliers across India, 
                  creating a more efficient and transparent food supply ecosystem.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  Trust, transparency, innovation, and community. We believe in building lasting relationships 
                  and creating value for all stakeholders in the ecosystem.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 space-y-8">
            <h2 className="text-3xl font-bold text-white">Why SupplyBridge?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">For Vendors</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Access to verified suppliers</li>
                  <li>• Competitive pricing</li>
                  <li>• Reliable delivery</li>
                  <li>• Quality assurance</li>
                  <li>• Automated invoicing</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">For Suppliers</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Expand customer base</li>
                  <li>• Efficient order management</li>
                  <li>• Payment security</li>
                  <li>• Market insights</li>
                  <li>• Growth opportunities</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <Link href="/auth/signup">Join SupplyBridge Today</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 