"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'

// Login Page Component
export function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login submitted:', formData)
    // Redirect to dashboard/home page after successful login
    router.push('/home')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="text-xl font-bold text-blue-500">
              SupplyBridge
            </Link>
            <div className="flex space-x-4">
              <Button variant="ghost" className="text-gray-300 hover:text-white" asChild>
                <Link href="/auth/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex min-h-[calc(100vh-4rem)]">
        {/* Left Side - Info */}
        <div className="hidden lg:flex lg:w-1/2 bg-gray-900 items-center justify-center p-12">
          <div className="max-w-md">
            <h1 className="text-3xl font-bold mb-6">Welcome Back to SupplyBridge</h1>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Connect with verified suppliers, manage your inventory, and grow your street food business with our comprehensive platform.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <span className="text-gray-300">Instant supplier matching</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <span className="text-gray-300">Automated invoice generation</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <span className="text-gray-300">Real-time order tracking</span>
              </div>
            </div>

            <div className="mt-8 flex space-x-4">
              <Badge variant="secondary" className="bg-gray-800 text-gray-300">5000+ Vendors</Badge>
              <Badge variant="secondary" className="bg-gray-800 text-gray-300">500+ Suppliers</Badge>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <Card className="w-full max-w-md bg-gray-900 border-gray-700">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white">Sign In</CardTitle>
              <p className="text-gray-400">Enter your credentials to access your dashboard</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="vendor@example.com"
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Password
                  </label>
                  <Input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="remember-me" className="ml-2 text-sm text-gray-300">
                      Remember me
                    </label>
                  </div>
                  <Link href="/auth/forgot-password" className="text-sm text-blue-400 hover:text-blue-300">
                    Forgot password?
                  </Link>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={handleSubmit}
                >
                  Sign In
                </Button>

                <Separator className="bg-gray-700" />

                <div className="text-center">
                  <span className="text-gray-400">Don't have an account? </span>
                  <Link href="/auth/signup" className="text-blue-400 hover:text-blue-300 font-medium">
                    Sign up
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
