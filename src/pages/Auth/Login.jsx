import React from 'react'
import Input from '../../components/ui/Input'
import Button from '../../components/ui/Button'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/dashboard/investor')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-4">
        <h2 className="text-xl font-bold">Login</h2>
        <Input placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button onClick={handleLogin}>Login</Button>
      </div>
    </div>
  )
}
