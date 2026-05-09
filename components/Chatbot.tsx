// components/Chatbot.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import knowledgeData from './knowledge.json';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

// Use any to bypass strict JSON typing issues
const knowledge = knowledgeData as any[];

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatContainerRef.current?.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const typeMessage = async (text: string, messageId: number) => {
    setIsTyping(true);
    let displayedText = '';

    for (let i = 0; i <= text.length; i++) {
      displayedText = text.slice(0, i);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === messageId ? { ...msg, text: displayedText } : msg
        )
      );
      await new Promise((resolve) => setTimeout(resolve, 30));
    }
    setIsTyping(false);
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMsg = userMessage.toLowerCase().trim();

    let bestReply = "";
    let highestScore = 0;

    knowledge.forEach((entry: any) => {
      if (!entry?.keywords || !entry?.reply) return;

      let score = 0;
      entry.keywords.forEach((keyword: string) => {
        if (lowerMsg.includes(keyword.toLowerCase())) {
          score += 1;
        }
      });

      if (score > highestScore) {
        highestScore = score;
        bestReply = entry.reply;
      }
    });

    return bestReply || 
      "I'm not sure about that. Could you rephrase or ask something about our models, services, or bookings?";
  };

  const sendMessage = () => {
    if (!input.trim() || isTyping) return;

    const userText = input.trim();
    const userMsg: Message = {
      id: Date.now(),
      text: userText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      const botText = getBotResponse(userText);
      const botMsgId = Date.now() + 1;

      const botMsg: Message = {
        id: botMsgId,
        text: '',
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMsg]);
      typeMessage(botText, botMsgId);
    }, 700);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendMessage();
  };

  const openChat = () => {
    setIsOpen(true);

    if (messages.length === 0) {
      setTimeout(() => {
        const greetingId = Date.now();
        setMessages([
          { id: greetingId, text: '', isUser: false, timestamp: new Date() },
        ]);
        typeMessage(
          "Hello! 👋 Welcome to Pakistan Models Hub. How can I help you today?",
          greetingId
        );
      }, 400);
    }
  };

  const closeChat = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={openChat}
        className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-black shadow-2xl hover:bg-yellow-300 hover:scale-110 active:scale-95 transition-all"
        aria-label="Open Chatbot"
      >
        💬
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex flex-col">
          <div className="bg-white px-6 py-4 flex items-center justify-between border-b border-yellow-400">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-2xl">
                🇵🇰
              </div>
              <div>
                <h2 className="text-black font-semibold">Pakistan Models Hub</h2>
                <p className="text-green-600 text-sm">● Online</p>
              </div>
            </div>
            <button
              onClick={closeChat}
              className="text-3xl text-black hover:bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center"
            >
              ✕
            </button>
          </div>

          <div
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto bg-white p-4 space-y-4"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[75%] px-4 py-3 rounded-2xl text-[15px] leading-relaxed ${
                    msg.isUser
                      ? 'bg-white border border-gray-200 rounded-br-none'
                      : 'bg-yellow-100 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-yellow-100 px-4 py-3 rounded-2xl rounded-bl-none">
                  typing...
                </div>
              </div>
            )}
          </div>

          <div className="bg-white p-4 border-t">
            <div className="flex gap-2 max-w-3xl mx-auto">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1 bg-gray-100 rounded-full px-6 py-3 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
                disabled={isTyping}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isTyping}
                className="bg-yellow-400 hover:bg-yellow-300 disabled:bg-gray-300 px-8 rounded-full font-medium text-black"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;