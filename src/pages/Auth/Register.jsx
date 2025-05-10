import React from 'react'
import Input from '../../components/ui/Input'
import Button from '../../components/ui/Button'

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-4">
        <h2 className="text-xl font-bold">Register</h2>
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <select className="w-full border px-3 py-2 rounded">
          <option value="">Select Role</option>
          <option value="investor">Investor</option>
          <option value="entrepreneur">Entrepreneur</option>
        </select>
        <Button>Register</Button>
      </div>
    </div>
  )
}
