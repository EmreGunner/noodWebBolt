import React from 'react'

const TVComponent: React.FC = () => {
  return (
    <div className="relative w-full max-w-md">
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 bg-gray-900">
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="text-gray-400 text-sm">Live Chat</div>
          </div>
        </div>
        <div className="p-4 h-64 overflow-y-auto bg-gray-800">
          {/* Chat messages would go here */}
          <div className="text-white">Sample chat message</div>
        </div>
        <div className="p-4 bg-gray-900">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-grow bg-gray-800 text-white rounded-l-full py-2 px-4 focus:outline-none"
            />
            <button className="bg-neon-green text-dark-blue rounded-r-full py-2 px-4 ml-1">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TVComponent
