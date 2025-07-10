import { useChat } from "../hooks/useChat";
import ShreeKrishna from "../assets/Shree-Krishna.jpg";
import React from "react";
import ChatTextarea from "./ChatTextarea";


export function Text() {
  const {
    text,
    setText,
    response,
    loading,
    messageCount,
    limitReached,
    chatHistory,
    handleSubmit,
    MAX_LIMIT,
  } = useChat();

  return (
    <div
      className=" justify-items-center bg-no-repeat h-screen"
      style={{ backgroundImage: `url()` }}
    >
      <div className="p-4" style={{ fontFamily: "Switzer, sans-serif" }}>
        dharma AI
      </div>
        {/* response box will come here */}

      <div className="px-4">
        <ChatTextarea text={text} setText={setText} handleSubmit={handleSubmit} />
      </div>
      <p>{MAX_LIMIT - messageCount} messages remaining</p>

   {/* for response box */}
      <div>
        {chatHistory.map((eM, index) => {
          return (
            <div key={index}>
              <p>you: {eM.question}</p>
              <p>Krishna: {eM.answer}</p>
            </div>
          );
        })}
      </div>
      {/* for response box */}

      <div>
        {loading ? <p>🙏 Awaiting Krishna's wisdom...</p> : <p>{response}</p>}
      </div>
    </div>
  );
}
