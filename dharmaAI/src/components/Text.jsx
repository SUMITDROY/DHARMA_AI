import { useChat } from "../hooks/useChat";

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
        MAX_LIMIT 
    } = useChat();

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
                {loading ? <p>🙏 Awaiting Krishna's wisdom...</p> : <p>{response}</p>}
            </div>
        </div>
    );
}