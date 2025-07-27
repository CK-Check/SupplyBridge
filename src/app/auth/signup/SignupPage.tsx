"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { LoginPage } from '../login/LoginPage'

// Signup Page Component
export function SignupPage() {
    const router = useRouter()
    const [formData, setFormData] = useState({
      businessName: '',
      ownerName: '',
      email: '',
      phone: '',
      location: '',
      password: '',
      confirmPassword: '',
      accountType: 'vendor'
    })
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match')
        return
      }
      console.log('Signup submitted:', formData)
      // Redirect to dashboard/home page after successful signup
      router.push('/home')
    }
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
                  <Link href="/auth/login">Sign In</Link>
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
              <h1 className="text-3xl font-bold mb-6">Join SupplyBridge Today</h1>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Start connecting with verified suppliers and take your street food business to the next level with our platform.
              </p>
  
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">For Vendors</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Find verified suppliers near you</li>
                    <li>• Automated invoice and tax management</li>
                    <li>• Track orders and inventory in real-time</li>
                    <li>• Build trust score with suppliers</li>
                  </ul>
                </div>
  
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">For Suppliers</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Connect with local street food vendors</li>
                    <li>• Manage orders and deliveries efficiently</li>
                    <li>• Build long-term business relationships</li>
                    <li>• Expand your customer base</li>
                  </ul>
                </div>
              </div>
  
              <div className="mt-8 flex space-x-4">
                <Badge variant="secondary" className="bg-gray-800 text-gray-300">Free to Start</Badge>
                <Badge variant="secondary" className="bg-gray-800 text-gray-300">Verified Network</Badge>
              </div>
            </div>
          </div>
  
          {/* Right Side - Signup Form */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
            <Card className="w-full max-w-md bg-gray-900 border-gray-700">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white">Create Account</CardTitle>
                <p className="text-gray-400">Join our network of vendors and suppliers</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Account Type Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Account Type
                    </label>
                    <select
                      name="accountType"
                      value={formData.accountType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded text-white focus:border-blue-500 focus:outline-none"
                    >
                      <option value="vendor">Street Food Vendor</option>
                      <option value="supplier">Raw Material Supplier</option>
                    </select>
                  </div>
  
                  <div className="grid grid-cols-2 grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Business Name
                      </label>
                      <Input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="Your business name"
                        className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                        required
                      />
                    </div>
  
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Owner Name
                      </label>
                      <Input
                        type="text"
                        name="ownerName"
                        value={formData.ownerName}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                      required
                    />
                  </div>
  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                        required
                      />
                    </div>
  
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Location
                      </label>
                      <Input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="City, State"
                        className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                        required
                      />
                    </div>
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
                      placeholder="Create a strong password"
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                      required
                    />
                  </div>
  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Confirm Password
                    </label>
                    <Input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                      required
                    />
                  </div>
  
                  <div className="flex items-center">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500"
                      required
                    />
                    <label htmlFor="terms" className="ml-2 text-sm text-gray-300">
                      I agree to the{' '}
                      <Link href="/terms" className="text-blue-400 hover:text-blue-300">
                        Terms & Conditions
                      </Link>{' '}
                      and{' '}
                      <Link href="/privacy" className="text-blue-400 hover:text-blue-300">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
  
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={handleSubmit}
                  >
                    Create Account
                  </Button>
  
                  <Separator className="bg-gray-700" />
  
                  <div className="text-center">
                    <span className="text-gray-400">Already have an account? </span>
                    <Link href="/auth/login" className="text-blue-400 hover:text-blue-300 font-medium">
                      Sign in
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
  
  // Demo Component to switch between login and signup
  export default function AuthDemo() {
    const [currentPage, setCurrentPage] = useState<'login' | 'signup'>('login')
  
    return (
      <div>
        {/* Toggle buttons for demo */}
        <div className="fixed top-4 right-4 z-50 space-x-2">
          <Button 
            variant={currentPage === 'login' ? 'default' : 'outline'}
            onClick={() => setCurrentPage('login')}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Login Page
          </Button>
          <Button 
            variant={currentPage === 'signup' ? 'default' : 'outline'}
            onClick={() => setCurrentPage('signup')}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Signup Page
          </Button>
        </div>
  
        {currentPage === 'login' ? <LoginPage /> : <SignupPage />}
      </div>
    )
  }