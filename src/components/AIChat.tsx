import React, { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Avatar from './Avatar';
import ChatBox, { Message } from './ChatBox';
import { askAI } from '@/lib/ai';
import { speak } from '@/lib/tts';

const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'assistant', content: 'Greeting. I am Antigravity. How can I assist in your digital transformation today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    const responseText = await askAI(inputValue);
    
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: responseText
    };

    setMessages(prev => [...prev, assistantMessage]);
    setIsLoading(false);
    
    // Start speaking
    setIsSpeaking(true);
    speak(responseText, () => {
      setIsSpeaking(false);
    });
  };

  return (
    <div className="w-[320px] h-screen sticky top-0 bg-[#0a0a0a] border-r border-white/5 flex flex-col z-[100]">
      <motion.div 
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="flex-1 flex flex-col overflow-hidden"
      >
        {/* Header */}
        <Avatar isSpeaking={isSpeaking} />

        {/* Chat Area */}
        <ChatBox messages={messages} />

        {/* Input Area */}
        <div className="p-6 border-t border-white/5 space-y-4 bg-black/20">
          <div className="relative group">
            <input 
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask the fabric..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-brand-violet/50 transition-all shadow-inner"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-brand-violet/20 text-brand-violet hover:bg-brand-violet hover:text-white transition-all disabled:opacity-50"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 opacity-30">
            <Sparkles className="w-3 h-3 text-brand-violet" />
            <span className="text-[10px] text-white font-bold tracking-[0.2em] uppercase">Powered by Gemini Pro</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AIChat;
