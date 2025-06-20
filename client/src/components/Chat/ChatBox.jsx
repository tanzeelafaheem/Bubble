import React from "react";

const ChatBox = () => {
  return (
    <div className="flex flex-col justify-between flex-1 bg-white rounded-xl  p-6">
      {/* Header */}
      <div className="pb-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Chat with Emma</h2>
      </div>

      {/* Chat Messages */}
      <div className="flex flex-col gap-4 py-4 overflow-y-auto flex-1">
        {/* Incoming Message */}
        <div className="flex items-end gap-2">
          <img
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Emma"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="text-sm text-gray-500 mb-1">Emma</p>
            <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-xl max-w-xs">
              Hey! How’s your day going?
            </div>
          </div>
        </div>

        {/* Outgoing Message */}
        <div className="flex items-end justify-end gap-2 self-end">
          <div>
            <p className="text-sm text-right text-gray-500 mb-1">You</p>
            <div className="bg-blue-500 text-white px-4 py-2 rounded-xl max-w-xs">
              Hi Emma! It's been pretty good, just finished a great book. How about yours?
            </div>
          </div>
          <img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt="You"
            className="w-8 h-8 rounded-full"
          />
        </div>

        {/* Incoming Message 2 */}
        <div className="flex items-end gap-2">
          <img
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Emma"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="text-sm text-gray-500 mb-1">Emma</p>
            <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-xl max-w-xs">
              That’s awesome! Mine’s been busy with work, but I’m looking forward to relaxing later.
            </div>
          </div>
        </div>
        <div className="flex items-end gap-2">
          <img
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Emma"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="text-sm text-gray-500 mb-1">Emma</p>
            <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-xl max-w-xs">
              That’s awesome! Mine’s been busy with work, but I’m looking forward to relaxing later.
            </div>
          </div>
        </div>
      </div>
      

      {/* Input Box */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
        <img
          src="https://randomuser.me/api/portraits/women/65.jpg"
          alt="You"
          className="w-8 h-8 rounded-full"
        />
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
