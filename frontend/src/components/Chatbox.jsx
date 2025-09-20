import { useEffect, useState } from "react";
import { sendChatMessage } from "../services/chatService";
import { useSpeech } from "../hooks/useSpeech";
import MicButton from "./MicButton";

export default function Chatbox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const { supported, speak } = useSpeech();

  const handleSend = async () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
    setTyping(true);
    const reply = await sendChatMessage(input);
    setTyping(false);
    setMessages(prev => [...prev, { text: reply, sender: "ai" }]);
    if (supported.tts) speak(reply);
  };

  return (
    <div className="border p-4 rounded-md max-w-md mx-auto mt-6">
      <div className="h-64 overflow-y-auto mb-4 border-b pb-2">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
            <span className={`inline-block p-2 rounded-md ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}>
              {msg.text}
            </span>
          </div>
        ))}
        {typing && (
          <div className="text-left">
            <span className="inline-block p-2 rounded-md bg-gray-200 text-gray-700">Assistant is typing...</span>
          </div>
        )}
      </div>
      <div className="flex items-center gap-2">
        <MicButton />
        <input
          className="flex-1 border rounded-l-md p-2"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about your report..."
        />
        <button className="bg-blue-600 text-white p-2 rounded-r-md" onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}
