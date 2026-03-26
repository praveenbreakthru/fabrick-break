const GEMINI_API_KEY = "AIzaSyCOLC_4_jH_m0l4igfx-2l31Jm7o6aSfkE";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

export const askAI = async (message: string): Promise<string> => {
  const systemPrompt = "You are Antigravity, a high-end AI architect assistant for the Digital Fabric platform. Your tone is professional, futuristic, and helpful. Keep responses concise and insightful.";
  
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: `${systemPrompt}\n\nUser: ${message}` }
            ]
          }
        ]
      }),
    });

    if (!response.ok) {
      throw new Error(`Gemini API Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "I'm sorry, I'm having trouble connecting to my neural network right now. Please try again later.";
  }
};
