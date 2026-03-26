import React from 'react';
import { motion } from 'framer-motion';

interface AvatarProps {
  isSpeaking: boolean;
}

const Avatar = ({ isSpeaking }: AvatarProps) => {
  return (
    <div className="flex flex-col items-center gap-6 py-10">
      <motion.div 
        animate={{ 
          y: [0, -15, 0],
          rotateZ: [0, 2, -2, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative group"
      >
        {/* Floating Shadow */}
        <motion.div 
          animate={{ 
            scale: [1, 0.8, 1],
            opacity: [0.1, 0.05, 0.1]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-4 bg-brand-blue rounded-[100%] blur-xl"
        />

        {/* Main Body (3D effect) */}
        <div className="relative w-28 h-28">
          {/* Head Shape */}
          <div className="absolute inset-0 bg-white rounded-[40px] shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.05),10px_10px_30px_rgba(0,0,0,0.1)] overflow-hidden border-b-4 border-zinc-200">
            {/* Visor Area */}
            <div className="mt-6 mx-3 h-14 bg-gradient-to-b from-[#0f172a] to-[#1e293b] rounded-3xl relative overflow-hidden ring-2 ring-white/50">
              {/* Internal Glow */}
              <div className="absolute inset-0 bg-brand-blue/5 animate-pulse" />
              
              {/* Eyes (Smiling like the image) */}
              <div className="flex justify-center gap-6 mt-4">
                <motion.div 
                  animate={{ 
                    scaleY: isSpeaking ? [1, 1.2, 1] : 1,
                    opacity: isSpeaking ? [0.8, 1, 0.8] : 0.6
                  }}
                  transition={{ duration: 0.2, repeat: isSpeaking ? Infinity : 0 }}
                  className="relative"
                >
                  {/* Arc eye */}
                  <svg width="24" height="12" viewBox="0 0 24 12">
                    <path 
                      d="M2 10C2 10 6 2 12 2C18 2 22 10 22 10" 
                      fill="none" 
                      stroke="#00ffff" 
                      strokeWidth="3" 
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute -inset-1 bg-brand-blue/30 blur-sm rounded-full" />
                </motion.div>

                <motion.div 
                  animate={{ 
                    scaleY: isSpeaking ? [1, 1.2, 1] : 1,
                    opacity: isSpeaking ? [0.8, 1, 0.8] : 0.6
                  }}
                  transition={{ duration: 0.2, repeat: isSpeaking ? Infinity : 0 }}
                  className="relative"
                >
                  {/* Arc eye */}
                  <svg width="24" height="12" viewBox="0 0 24 12">
                    <path 
                      d="M2 10C2 10 6 2 12 2C18 2 22 10 22 10" 
                      fill="none" 
                      stroke="#00ffff" 
                      strokeWidth="3" 
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute -inset-1 bg-brand-blue/30 blur-sm rounded-full" />
                </motion.div>
              </div>

              {/* Talking Waveform in Visor */}
              {isSpeaking && (
                <div className="absolute bottom-1 w-full flex justify-center gap-[1px]">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [2, Math.random() * 8 + 4, 2] }}
                      transition={{ duration: 0.3, repeat: Infinity, delay: i * 0.05 }}
                      className="w-[2px] bg-brand-blue/50 rounded-full"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Ears/Antenna Parts (from image) */}
          <div className="absolute -left-3 top-8 w-6 h-12 bg-white rounded-l-2xl border-r-2 border-zinc-100 shadow-lg" />
          <div className="absolute -right-3 top-8 w-6 h-12 bg-white rounded-r-2xl border-l-2 border-zinc-100 shadow-lg" />
          
          {/* Blue Accent Parts on Ears */}
          <div className="absolute -left-2 top-10 w-3 h-8 bg-brand-blue/80 rounded-l-xl blur-[1px]" />
          <div className="absolute -right-2 top-10 w-3 h-8 bg-brand-blue/80 rounded-r-xl blur-[1px]" />
        </div>
      </motion.div>

      <div className="text-center z-10">
        <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
          <span className="text-[10px] text-zinc-400 font-black uppercase tracking-[0.3em]">
            Digital Engine v4.0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
