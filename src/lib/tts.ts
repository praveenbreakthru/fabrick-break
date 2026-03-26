export const speak = (text: string, onEnd?: () => void) => {
  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  
  // Try to find a high-quality female or robotic voice
  const voices = window.speechSynthesis.getVoices();
  const preferredVoice = voices.find(v => v.name.includes("Google") || v.name.includes("Female")) || voices[0];
  
  if (preferredVoice) {
    utterance.voice = preferredVoice;
  }

  utterance.pitch = 1.1; // Slightly more futuristic pitch
  utterance.rate = 1.0;

  utterance.onend = () => {
    if (onEnd) onEnd();
  };

  window.speechSynthesis.speak(utterance);
};

export const stopSpeaking = () => {
  window.speechSynthesis.cancel();
};
