import React from 'react'

const requests = [
  { id: 1, investor: 'Investor A', snippet: 'Looking to fund sustainable startups', status: 'Pending' }
]

export default function Entrepreneur() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Collaboration Requests</h2>
      <div className="grid gap-4">
        {requests.map(r => (
          <div key={r.id} className="p-4 bg-white rounded shadow">
            <h3 className="text-lg font-semibold">{r.investor}</h3>
            <p>{r.snippet}</p>
            <span className="text-sm text-gray-500">Status: {r.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
