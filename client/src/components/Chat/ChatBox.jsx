import React from "react";

const ChatBox = ({ messages, selectedFriend, onSend }) => {
  const [text, setText] = React.useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="border-b p-4 bg-white">
        <h2 className="text-xl font-bold text-blue-800">
          Chat with {selectedFriend?.username || "Select a friend"}
        </h2>
      </div>
    </div>
  );
};

export default ChatBox;
