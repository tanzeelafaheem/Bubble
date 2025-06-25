import { useEffect, useState } from "react";
import socket from "../../utils/socket";
import axiosInstance from "../../api/axiosInstance";

const userIcon = "/profilePics/userIcon.png";


const ChatBox = ({ selectedFriend }) => {
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState("");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchMessages = async () => {
      if (!selectedFriend) return;
      try {
        const res = await axiosInstance.get(`/message/get-messages/${userId}/${selectedFriend._id}`);
        setMessages(res.data.messages);
      } catch (err) {
        console.error("Error loading messages", err);
      }
    };

    fetchMessages();
  }, [selectedFriend]);

 
  useEffect(() => {
    socket.on("msg-receive", (data) => {
      if (data.sender === selectedFriend?._id) {
        setMessages((prev) => [...prev, data]);
      }
    });

    return () => socket.off("msg-receive");
  }, [selectedFriend]);

  const handleSend = async () => {
    if (!newMsg.trim()) return;

    const messageData = {
      sender: userId,
      receiver: selectedFriend._id,
      content: newMsg,
    };

    socket.emit("send-msg", messageData);

    setMessages((prev) => [...prev, { ...messageData }]);
    setNewMsg("");
  };

  if (!selectedFriend) return <div className="p-6">Select a friend to chat</div>;

  return (
<div className="flex flex-col bg-white rounded-xl p-4 h-[90vh]">
      {/* Header */}
      <div className="pb-3 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">
          Chat with {selectedFriend.username}
        </h2>
      </div>

      {/* Chat Messages */}
   <div className="flex-1 overflow-y-auto flex flex-col gap-3 pr-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-end gap-2 ${
              msg.sender === userId ? "justify-end self-end" : ""
            }`}
          >
            {msg.sender !== userId && (
              <img
                src={selectedFriend.profilePic||userIcon}
                className="w-8 h-8 rounded-full"
              />
            )}
            <div
              className={`px-4 py-2 rounded-xl max-w-xs ${
                msg.sender === userId
                  ? "bg-[#218e6c] text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          className="flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
        />
        <button
          onClick={handleSend}
          className="bg-[#218e6c] text-white px-4 py-2 rounded-xl hover:bg-green-300 hover:text-black transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
