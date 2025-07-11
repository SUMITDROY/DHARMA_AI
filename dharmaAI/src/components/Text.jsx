import { useChat } from "../hooks/useChat";
import React from "react";
import ChatTextarea from "./ChatTextarea";
import GlassNavbar from "./navbar";
import DynamicText from "./dynamicText";
import Footer from "./footer";

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
    <>
      <div className="min-h-screen w-full bg-black relative">
        <div className="absolute inset-0 z-0 flex justify-center items-center overflow-hidden">
          <img
            src="https://i.pinimg.com/736x/ec/44/8b/ec448b5a0f5e42e519e7b7ac9f1d965f.jpg"
            alt="Background"
            className="w-[200px] sm:w-[380px] object-contain"

            style={{
              transform: "rotate(0deg)",
              objectPosition: "center",
            }}
          />
        </div>

        <div className="absolute top-4 right-4 z-20">
          <Footer />
        </div>

        {
          <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center min-h-full space-y-4 text-center relative z-10">
            <div
              className="p-4 sm:p-8 text-amber-50 text-2xl sm:text-3xl"
              style={{ fontFamily: "Switzer, sans-serif" }}
            >
              Welcome to
              <div className="text-5xl">
                <DynamicText />
              </div>
              <div
                className="text-base p-5"
                style={{
                  fontFamily: '"Ubuntu", sans-serif',
                  fontWeight: 400,
                  fontStyle: 'normal'
                }}
                
              >
                Get answers to life’s questions through the timeless wisdom of{" "}
                <span className="text-amber-400 font-bold drop-shadow-md">
                  KRISHNA
                </span>
                , the Lord of the Universe. Inspired by the{" "}
                <span className="text-red-600">Bhagavad Gita</span>, Dharma AI
                speaks with the voice of eternal truth.
              </div>
            </div>

            <div className="w-full px-4 mb-40">
              <ChatTextarea
                text={text}
                setText={setText}
                handleSubmit={handleSubmit}
                chatHistory={chatHistory}
              />
            </div>
          </div>
        }
      </div>
    </>
  );
}
