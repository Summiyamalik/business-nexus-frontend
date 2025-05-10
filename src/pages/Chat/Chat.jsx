import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Chat() {
  const { userId } = useParams()
  const [messages, setMessages] = useState([
    { from: 'them', text: 'Hello! Interested in your startup.', time: '10:00 AM' },
    { from: 'me', text: 'Thanks! Let me know if you have any questions.', time: '10:01 AM' }
  ])
  const [input, setInput] = useState('')

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { from: 'me', text: input, time: new Date().toLocaleTimeString() }])
      setInput('')
    }
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded shadow p-4 flex flex-col h-[70vh]">
      <h2 className="text-xl font-bold mb-2">Chat with User #{userId}</h2>
      <div className="flex-1 overflow-y-auto space-y-2 mb-4">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.from === 'me' ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-2 rounded bg-${m.from === 'me' ? 'blue' : 'gray'}-200 max-w-xs`}>
              <p className="text-sm">{m.text}</p>
              <span className="text-xs text-gray-500">{m.time}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input value={input} onChange={e => setInput(e.target.value)} className="flex-1 border px-3 py-2 rounded" placeholder="Type a message..." />
        <button onClick={sendMessage} className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
      </div>
    </div>
  )
}
