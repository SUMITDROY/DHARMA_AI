import React, { useEffect, useRef, useState } from "react";

const ChatBox = ({ text, setText, handleSubmit, chatHistory }) => {
  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);
  const [showChat, setShowChat] = useState(false);

  // Show chat area after first message
  useEffect(() => {
    if (chatHistory.length > 0) {
      setShowChat(true);
    }
  }, [chatHistory]);

  // Scroll to bottom when messages update
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  // Auto expand textarea height
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [text]);

  // Handle Enter to send
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div
      className={`flex flex-col max-w-2xl w-full mx-auto transition-all duration-500 ease-in-out overflow-hidden border border-white/20 rounded-xl backdrop-blur-md bg-white/5 ${
        showChat ? "max-h-[calc(100vh-220px)]" : "h-auto"
      }`}
    >
      {/* Chat Messages */}
      <div
        ref={chatContainerRef}
        className={`transition-all duration-500 ease-in-out px-4 py-3 space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent ${
          showChat ? "flex-1 h-[350px] visible opacity-100" : "h-0 invisible opacity-0"
        }`}
      >
        {chatHistory.map((eM, index) => (
          <div key={index} className="space-y-2">
            {/* User Message */}
            <div className="flex justify-end">
              <div className="max-w-[75%] bg-blue-600 text-white text-sm px-4 py-2 rounded-lg rounded-br-none shadow-md">
                {eM.question}
              </div>
            </div>
            {/* Krishna Message */}
            <div className="flex justify-start">
              <div className="max-w-[75%] bg-white/10 text-white text-sm px-4 py-2 rounded-lg rounded-bl-none shadow-md">
                {eM.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="relative border-t border-white/10 px-3 py-2">
        <textarea
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="ask your question and take the teachings of Krishna "
          rows="1"
          className="resize-none overflow-hidden w-full p-3 pr-12 rounded-xl bg-white/5 backdrop-blur-md border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
        />
        <div className="absolute bottom-3 right-4">
          <button
            onClick={handleSubmit}
            type="button"
            className="inline-flex items-center justify-center size-8 rounded-md text-white bg-blue-600 hover:bg-blue-500 transition"
          >
  
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
