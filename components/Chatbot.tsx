// components/Chatbot.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import knowledge from '@/components/knowledge.json';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface KnowledgeEntry {
  keywords: string[];
  reply: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Typing effect for bot messages
  const typeMessage = async (text: string, messageId: number) => {
    setIsTyping(true);
    let displayedText = '';
    
    for (let i = 0; i <= text.length; i++) {
      displayedText = text.slice(0, i);
      setMessages(prev => 
        prev.map(msg => 
          msg.id === messageId 
            ? { ...msg, text: displayedText } 
            : msg
        )
      );
      await new Promise(resolve => setTimeout(resolve, 25)); // typing speed
    }
    setIsTyping(false);
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMsg = userMessage.toLowerCase().trim();
    
    // Find best match
    let bestMatch: KnowledgeEntry | null = null;
    let highestScore = 0;

    (knowledge as KnowledgeEntry[]).forEach(entry => {
      let score = 0;
      entry.keywords.forEach(keyword => {
        if (lowerMsg.includes(keyword.toLowerCase())) {
          score += 1;
        }
      });
      
      if (score > highestScore) {
        highestScore = score;
        bestMatch = entry;
      }
    });

    if (bestMatch && highestScore > 0) {
      return bestMatch.reply;
    }

    return "I'm not sure about that. Could you rephrase or ask something about our models, services, or Pakistan's fashion industry?";
  };

  const sendMessage = async () => {
    if (!input.trim() || isTyping) return;

    const userText = input.trim();
    const userMessage: Message = {
      id: Date.now(),
      text: userText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate thinking delay
    setTimeout(() => {
      const botReplyText = getBotResponse(userText);
      const botMessageId = Date.now() + 1;
      
      const botMessage: Message = {
        id: botMessageId,
        text: '',
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      
      // Start typing effect
      typeMessage(botReplyText, botMessageId);
    }, 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  // Open modal and show greeting
  const openChat = () => {
    setIsOpen(true);
    
    if (messages.length === 0) {
      setTimeout(() => {
        const greetingId = Date.now();
        const greetingMessage: Message = {
          id: greetingId,
          text: '',
          isUser: false,
          timestamp: new Date(),
        };
        
        setMessages([greetingMessage]);
        typeMessage(
          "Hello! 👋 Welcome to Pakistan Models Hub. How can I help you today? Ask me anything about our models, bookings, or services.",
          greetingId
        );
      }, 400);
    }
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={openChat}
        className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-black shadow-xl hover:bg-yellow-300 transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Open Chat"
      >
        <span className="text-3xl">💬</span>
      </button>

      {/* Fullscreen Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between bg-white px-6 py-4 border-b border-yellow-400">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-yellow-400 flex items-center justify-center text-2xl">
                🇵🇰
              </div>
              <div>
                <h2 className="font-semibold text-black text-lg">Pakistan Models Hub</h2>
                <p className="text-xs text-green-600">● Online</p>
              </div>
            </div>
            
            <button
              onClick={closeChat}
              className="text-black hover:bg-gray-100 p-3 rounded-full transition-colors"
              aria-label="Close Chat"
            >
              ✕
            </button>
          </div>

          {/* Chat Messages */}
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
                  className={`max-w-[75%] rounded-2xl px-4 py-3 text-[15px] leading-relaxed ${
                    msg.isUser
                      ? 'bg-white text-black border border-gray-200 rounded-br-none'
                      : 'bg-yellow-100 text-black rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-yellow-100 text-black rounded-2xl rounded-bl-none px-4 py-3">
                  <span className="animate-pulse">typing...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="bg-white border-t border-gray-200 p-4">
            <div className="flex gap-2 max-w-3xl mx-auto">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1 bg-gray-100 text-black rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-[15px]"
                disabled={isTyping}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isTyping}
                className="bg-yellow-400 hover:bg-yellow-300 disabled:bg-gray-300 text-black px-8 rounded-full font-medium transition-colors"
              >
                Send
              </button>
            </div>
            <p className="text-center text-[10px] text-gray-400 mt-2">
              Pakistan Models Hub Assistant
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;