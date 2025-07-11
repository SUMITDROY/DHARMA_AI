// import React, { useEffect, useRef } from "react";

// const ChatBox = ({ chatHistory }) => {
//   const bottomRef = useRef(null);

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [chatHistory]);

//   return (
//     <div className="h-[80vh] overflow-y-auto p-4 bg-gray-100 rounded-xl border border-gray-300 flex flex-col gap-4">
//       {chatHistory.map((eM, index) => (
//         <div key={index} className="flex flex-col gap-2">
//           <div className="self-end bg-green-100 text-green-900 p-3 rounded-2xl max-w-[70%]">
//             <p>{eM.question}</p>
//           </div>
//           <div className="self-start bg-gray-200 text-gray-800 p-3 rounded-2xl max-w-[70%]">
//             <p>{eM.answer}</p>
//           </div>
//         </div>
//       ))}
//       <div ref={bottomRef} />
//     </div>
//   );
// };

// export default ChatBox;
