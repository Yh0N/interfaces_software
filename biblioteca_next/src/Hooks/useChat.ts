import { useState } from "react";
import axios from "axios";

export const useChat = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);

  const sendMessage = async (content: string) => {
    const newMessages = [...messages, { role: "user", content }];
    setMessages(newMessages);

    const { data } = await axios.post("/api/chat", { message: content });
    setMessages([...newMessages, { role: "assistant", content: data.message }]);
  };

  return { messages, sendMessage };
};
