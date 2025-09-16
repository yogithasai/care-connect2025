import { useState } from "react";

export default function Chatbox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
    // Here you can call backend GPT API to get response
    setMessages(prev => [...prev, { text: "AI response placeholder", sender: "ai" }]);
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
      </div>
      <div className="flex">
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
