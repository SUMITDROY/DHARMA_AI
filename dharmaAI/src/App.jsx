import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
  const MAX_LIMIT = 5;

  async function handleSubmit() {
    if (limitReached) {
      alert("You have reached the maximum limit of messages for today.");
      return;
    } else {
      setLoading(true);
      await GenerateText(text, setResponse);
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
        {loading ? <p>🙏 Awaiting Krishna’s wisdom...</p> : <p>{response}</p>}
      </div>
    </div>
  );
}

async function GenerateText(text, setResponse) {
  apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  const res = await axios({
    url: `{apiKey}`,
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
  setResponse(res["data"]["candidates"][0]["content"]["parts"][0]["text"]);
}



export default App;
