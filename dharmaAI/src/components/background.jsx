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
      <div className="p-4 text-amber-50" style={{ fontFamily: "Switzer, sans-serif" }}>
        dharma AI
      </div>
        {/* response box will come here */}


        <div className="w-full px-4">
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
{/* 
      {/* for response box */}

      <div>
        {loading ? <p>🙏 Awaiting Krishna's wisdom...</p> : <p>{response}</p>}
      </div>
    </div>}
  </div>