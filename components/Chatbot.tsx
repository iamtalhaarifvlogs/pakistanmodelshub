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
      {/* Floating Button */}
      <button
        onClick={openChat}
        className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-black shadow-2xl hover:bg-yellow-300 hover:scale-110 active:scale-95 transition-all"
        aria-label="Open Chatbot"
      >
        💬
      </button>

      {/* Fullscreen Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex flex-col">
          {/* Header */}
          <div className="bg-white px-6 py-4 flex items-center justify-between border-b border-yellow-400">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-2xl">
                🇵🇰
              </div>
              <div>
                <h2 className="text-black font-bold text-lg">Pakistan Models Hub</h2>
                <p className="text-green-600 text-sm">● Online</p>
              </div>
            </div>
            <button
              onClick={closeChat}
              className="text-3xl text-black hover:bg-gray-100 w-11 h-11 rounded-full flex items-center justify-center transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Messages Area */}
          <div
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto bg-white p-6 space-y-4 pb-24"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[78%] px-5 py-3.5 rounded-3xl text-[16px] leading-relaxed font-semibold ${
                    msg.isUser
                      ? 'bg-black text-white rounded-br-none'
                      : 'bg-yellow-400 text-black rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-yellow-400 text-black px-5 py-3.5 rounded-3xl rounded-bl-none font-semibold">
                  typing...
                </div>
              </div>
            )}
          </div>

          {/* Input Area - FIXED */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-10">
            <div className="max-w-4xl mx-auto flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1 bg-gray-100 text-black placeholder:text-gray-500 rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-[16px] font-medium"
                disabled={isTyping}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isTyping}
                className="bg-yellow-400 hover:bg-yellow-300 disabled:bg-gray-300 disabled:text-gray-600 px-8 py-4 rounded-full font-bold text-black text-[16px] transition-all active:scale-95 whitespace-nowrap flex-shrink-0"
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