import { useState, useEffect } from "react";
import { GenerateText } from "../services/geminiService";
import { getStoredHistory, saveHistory } from "../utils/storage";
import { MAX_LIMIT } from "../constants";

export const useChat = () => {
    const [text, setText] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);
    const [messageCount, setMessageCount] = useState(0);
    const [limitReached, setLimitReached] = useState(false);
    const [chatHistory, setChatHistory] = useState([]);

    useEffect(() => {
      const storedHistory = JSON.parse(localStorage.getItem("dharmachatHistory")) || [];
      setChatHistory(storedHistory);
    }, []);

    useEffect(() => {
      localStorage.setItem("dharmachatHistory", JSON.stringify(chatHistory));
    }, [chatHistory]);

    async function handleSubmit() {
      if (limitReached) {
        alert("You have reached the maximum limit of messages for today.");
        return;
      } else {
        setLoading(true);
        const answer = await GenerateText(text);
        setResponse(answer);
        setChatHistory(prev => [...prev, { question: text, answer }]);
        setText("");
        setMessageCount((prevCount) => {
          const newCount = prevCount + 1;
          if (newCount >= MAX_LIMIT) {
            setLimitReached(true);
          }
          return newCount;
        });
        setLoading(false);
      }
    }
    return {
        text,
        setText,
        response,
        loading,
        messageCount,
        limitReached,
        chatHistory,
        handleSubmit,
        MAX_LIMIT
    };
};