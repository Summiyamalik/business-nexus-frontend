import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4 space-y-4">
        <Link to="/dashboard/investor" className="block">Investor Dashboard</Link>
        <Link to="/dashboard/entrepreneur" className="block">Entrepreneur Dashboard</Link>
      </aside>
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  )
}
