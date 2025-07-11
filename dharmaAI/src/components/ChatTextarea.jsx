import React, { useEffect, useRef, useState } from "react";

const ChatBox = ({
  text = "",
  setText = () => {},
  handleSubmit = () => {},
  chatHistory = [],
}) => {
  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    if (chatHistory.length > 0) {
      setShowChat(true);
    }
  }, [chatHistory]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [text]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="fixed bottom-4 w-full max-w-3xl mx-auto left-0 right-0 px-4">

      <div
        className={`flex flex-col-reverse bg-white/5 backdrop-blur-lg max-h-[80vh] overflow-hidden ${
          showChat
            ? "rounded-xl border border-white/20"
            : "rounded-full border border-transparent"
        }`}
      >
        <div
          className={`relative w-full flex items-center px-4 py-2 gap-2 ${
            showChat
              ? ""
              : "rounded-full border border-white/20 bg-neutral-900"
          }`}
        >
          <textarea
            ref={inputRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="ask your question and take the teachings of Krishna"
            rows="1"
            className={`resize-none overflow-hidden flex-1 bg-transparent text-white placeholder-white/50 text-sm border-none focus:outline-none ${
              showChat ? "" : "rounded-full"
            }`}
          />
          <button
            onClick={handleSubmit}
            type="button"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-red-400 via-yellow-500 to-white text-black text-sm hover:opacity-90 active:scale-[0.97] transition focus:outline-none"
          >
            →
          </button>
        </div>

        {showChat && (
          <div
            ref={chatContainerRef}
            className="px-4 py-3 space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent h-[50vh]"
          >
            {chatHistory.map((eM, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-end">
                  <div className="max-w-[75%] bg-blue-600 text-white text-sm px-4 py-2 rounded-lg rounded-br-none shadow-md">
                    {eM.question}
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="max-w-[75%] bg-white/10 text-white text-sm px-4 py-2 rounded-lg rounded-bl-none shadow-md">
                    {eM.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBox;
