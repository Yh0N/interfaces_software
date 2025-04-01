"use client";
import { useState } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Nuevo estado para controlar visibilidad

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: input }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    const botMessage: Message = { role: "assistant", content: data.message };
    setMessages((prev) => [...prev, botMessage]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50"> {/* Contenedor flotante */}
      {isOpen ? (
        <div className="w-80 bg-[#e8fff9] rounded-lg shadow-xl border border-gray-200">
          <div className="flex justify-between items-center p-4 bg-[#42af92] rounded-t-lg">
            <h1 className="text-lg font-bold text-white">Chat with AI</h1>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              ×
            </button>
          </div>
          <div className="h-64 overflow-y-auto bg-white p-4 text-black">
            {messages.length > 0 ? (
              messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`mb-2 ${msg.role === "user" ? "text-right" : "text-left"}`}
                >
                  <strong className={msg.role === "user" ? "text-blue-600" : "text-green-600"}>
                    {msg.role}:
                  </strong> 
                  <p className="mt-1">{msg.content}</p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">Start a conversation...</p>
            )}
          </div>
          <div className="flex p-4 bg-white border-t">
            <input
              type="text"
              placeholder="Ask something..."
              className="flex-1 p-2 border border-gray-300 rounded-md text-black"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <button 
              className="ml-2 p-2 bg-[#42af92] text-white rounded-md hover:bg-[#368f77]"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="p-4 bg-[#42af92] text-white rounded-full shadow-lg hover:bg-[#368f77] transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      )}
    </div>
  );
}