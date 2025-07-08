import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  return (
    <div>
      <Text />
    </div>
  );
}

function Text() {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const [limitReached, setLimitReached] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const MAX_LIMIT = 5;




  useEffect((() =>{
    const storedHistory = JSON.parse(localStorage.getItem("dharmachatHistory")) || [];
    setChatHistory(storedHistory);
  }), []);

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

  return (
    <div>
      <div>dharma AI</div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        cols="30"
        rows="10"
        placeholder="ask to KrSna"
      ></textarea>
      <p>{MAX_LIMIT - messageCount} messages remaining</p>
      <button onClick={handleSubmit}>res</button>

    <div>
      {chatHistory.map((eM, index) => {
        return (
          <div key={index}>
            <p>you: {eM.question}</p>
            <p>Krishna: {eM.answer}</p>
          </div>
        )
      })}
      </div>

      <div>
        {loading ? <p>🙏 Awaiting Krishna’s wisdom...</p> : <p>{response}</p>}
      </div>
    </div>
  );
}

async function GenerateText(text) {
 const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  const res = await axios({
    url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${apiKey}`,
    method: "POST",
    data: {
      contents: [
        {
          parts: [
            {
              text:
                text +
                " give answer only according to bhagwat geegta and what krishna said about this strictly",
            },
          ],
        },
      ],
    },
  });
  // console.log(res['data']['candidates'][0]['content']['parts'][0]['text']);
  return (res["data"]["candidates"][0]["content"]["parts"][0]["text"]);
}



export default App;
