import React from 'react'
import { Link } from 'react-router-dom'

const entrepreneurs = [
  { id: 1, name: 'Entrepreneur B', startup: 'EcoGreen', summary: 'Eco-friendly packaging solutions' },
  { id: 2, name: 'Entrepreneur C', startup: 'HealthPlus', summary: 'Affordable health monitoring' }
]

export default function Investor() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Entrepreneurs</h2>
      <div className="grid gap-4">
        {entrepreneurs.map(e => (
          <div key={e.id} className="p-4 bg-white rounded shadow">
            <h3 className="text-lg font-semibold">{e.name} - {e.startup}</h3>
            <p>{e.summary}</p>
            <Link to={`/profile/entrepreneur/${e.id}`} className="text-blue-600 underline">View Full Profile</Link>
            <Link to={`/chat/${e.id}`} className="ml-4 text-green-600 underline">Message</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
