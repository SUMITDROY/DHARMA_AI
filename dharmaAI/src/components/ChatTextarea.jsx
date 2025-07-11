import React, { useEffect, useRef, useState } from "react";

const ChatBox = ({ text, setText, handleSubmit, chatHistory }) => {
  const chatContainerRef = useRef(null);
  const [showChat, setShowChat] = useState(false);

  // When the first message is added, show chat area
  useEffect(() => {
    if (chatHistory.length > 0) {
      setShowChat(true);
    }
  }, [chatHistory]);

  // Scroll to bottom on new message
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  return (
    <div
      className={`flex flex-col max-w-2xl mx-auto transition-all duration-500 ease-in-out overflow-hidden border border-white/20 rounded-xl backdrop-blur-md bg-white/5 ${
        showChat ? "h-[500px]" : "h-auto"
      }`}
    >
      {/* Animated chat area */}
      <div
        ref={chatContainerRef}
        className={`transition-all duration-500 ease-in-out px-4 py-3 space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent ${
          showChat ? "flex-1 h-[420px] visible opacity-100" : "h-0 invisible opacity-0"
        }`}
      >
        {chatHistory.map((eM, index) => (
          <div key={index} className="space-y-2">
            {/* User */}
            <div className="flex justify-end">
              <div className="max-w-[75%] bg-blue-600 text-white text-sm px-4 py-2 rounded-lg rounded-br-none shadow-md">
                {eM.question}
              </div>
            </div>
            {/* KrSna */}
            <div className="flex justify-start">
              <div className="max-w-[75%] bg-white/10 text-white text-sm px-4 py-2 rounded-lg rounded-bl-none shadow-md">
                {eM.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input area */}
      <div className="relative border-t border-white/10 px-3 py-2">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ask to KrSna..."
          rows="1"
          className="resize-none overflow-hidden w-full p-3 pr-12 rounded-xl bg-white/5 backdrop-blur-md border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
        />
        <div className="absolute bottom-3 right-4">
          <button
            onClick={handleSubmit}
            type="button"
            className="inline-flex items-center justify-center size-8 rounded-md text-white bg-blue-600 hover:bg-blue-500 transition"
          >
            <svg
              className="size-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
