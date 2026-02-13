'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

export default function Home() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        // No token, redirect to login
        router.push('/login')
        return
      }

      const response = await fetch(`${API_URL}/auth/me`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.ok) {
        const data = await response.json()
        setUser(data.user)
        setLoading(false)
      } else {
        // Invalid token, redirect to login
        localStorage.removeItem('token')
        router.push('/login')
      }
    } catch (error) {
      console.error('Auth check error:', error)
      localStorage.removeItem('token')
      router.push('/login')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    router.push('/login')
  }

  // Show loading while checking auth
  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    )
  }

  // Only show home page if user is authenticated
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-indigo-600">Pratik Auth</div>
            <div className="flex gap-4 items-center">
              <span className="text-gray-700">Welcome, {user.name}!</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome, {user.name}!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            You are successfully logged in
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Profile</h2>
            <div className="space-y-4 text-left">
              <div className="flex justify-between py-3 border-b">
                <span className="font-medium text-gray-600">Name:</span>
                <span className="text-gray-900">{user.name}</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="font-medium text-gray-600">Email:</span>
                <span className="text-gray-900">{user.email}</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="font-medium text-gray-600">User ID:</span>
                <span className="text-gray-900">#{user.id}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

export default function Home() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        // No token, redirect to login
        router.push('/login')
        return
      }

      const response = await fetch(`${API_URL}/auth/me`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.ok) {
        const data = await response.json()
        setUser(data.user)
        setLoading(false)
      } else {
        // Invalid token, redirect to login
        localStorage.removeItem('token')
        router.push('/login')
      }
    } catch (error) {
      console.error('Auth check error:', error)
      localStorage.removeItem('token')
      router.push('/login')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    router.push('/login')
  }

  // Show loading while checking auth
  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    )
  }

  // Only show home page if user is authenticated
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-indigo-600">Pratik Auth</div>
            <div className="flex gap-4 items-center">
              <span className="text-gray-700">Welcome, {user.name}!</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome, {user.name}!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            You are successfully logged in
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Profile</h2>
            <div className="space-y-4 text-left">
              <div className="flex justify-between py-3 border-b">
                <span className="font-medium text-gray-600">Name:</span>
                <span className="text-gray-900">{user.name}</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span className="font-medium text-gray-600">Email:</span>
                <span className="text-gray-900">{user.email}</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="font-medium text-gray-600">User ID:</span>
                <span className="text-gray-900">#{user.id}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
 <div className="flex justify-between py-3 border-b">
                <span className="font-medium text-gray-600">Name:</span>
                <span className="text-gray-900">{user.name}</span>
              </div>            <span className="text-gray-900">#{user.id}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
 <div className="flex justify-between py-3 border-b">
                <span className="font-medium text-gray-600">Name:</span>
                <span className="text-gray-900">{user.name}</span>
              </div>
                      <span className="font-medium text-gray-600">Name:</span>
                <span className="text-gray-900">{user.name}</span>
              </div>            <span className="text-gray-900">#{user.id}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
 <div className="flex justify-between py-3 border-b">
                <span className="font-medium text-gray-600">Name:</span>
                <span className="text-gray-900">{user.name}</span>
              </div>