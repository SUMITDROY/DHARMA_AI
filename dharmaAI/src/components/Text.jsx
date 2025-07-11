import { useChat } from "../hooks/useChat";
import ShreeKrishna from "../assets/Shree-Krishna.jpg";
import React from "react";
import ChatTextarea from "./ChatTextarea";
import  GlassNavbar  from "./navbar";


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
    <div className="min-h-screen w-full bg-black relative">
    {/* Midnight Mist */}
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `
          radial-gradient(circle at 50% 100%, rgba(70, 85, 110, 0.5) 0%, transparent 60%),
          radial-gradient(circle at 50% 100%, rgba(99, 102, 241, 0.4) 0%, transparent 70%),
          radial-gradient(circle at 50% 100%, rgba(181, 184, 208, 0.3) 0%, transparent 80%)
        `,
      }}
    />


    {<div
      className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center min-h-full space-y-4 text-center"
      style={{ backgroundImage: `url()` }}
    >

      <GlassNavbar />
      <div className="p-30 text-amber-50 text-5xl" style={{ fontFamily: "Switzer, sans-serif" }}>  
       welcome to 
      <span className="text-amber-400"> dharma AI</span>
      <div className="text-base" >
      Get answers to life’s questions through the timeless wisdom of Shree Krishna, the Lord of the Universe. Inspired by the Bhagavad Gita, Dharma AI speaks with the voice of eternal truth.
      </div>
   
      </div>

        <div className="w-full px-4">
        <ChatTextarea text={text} setText={setText} handleSubmit={handleSubmit} chatHistory={chatHistory} />
        </div>

      <p>{MAX_LIMIT - messageCount} messages remaining</p>



      {/* <div>
        {loading ? <p>🙏 Awaiting Krishna's wisdom...</p> : <p>{response}</p>}
      </div> */}
    </div>}
  </div>
  );
}
