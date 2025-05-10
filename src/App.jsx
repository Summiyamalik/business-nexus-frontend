import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import DashboardInvestor from './pages/Dashboard/Investor'
import DashboardEntrepreneur from './pages/Dashboard/Entrepreneur'
import ProfileInvestor from './pages/Profiles/ProfileInvestor'
import ProfileEntrepreneur from './pages/Profiles/ProfileEntrepreneur'
import Chat from './pages/Chat/Chat'
import DashboardLayout from './layouts/DashboardLayout'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard/investor" element={<DashboardInvestor />} />
        <Route path="/dashboard/entrepreneur" element={<DashboardEntrepreneur />} />
        <Route path="/profile/investor/:id" element={<ProfileInvestor />} />
        <Route path="/profile/entrepreneur/:id" element={<ProfileEntrepreneur />} />
        <Route path="/chat/:userId" element={<Chat />} />
      </Route>
    </Routes>
  )
}
