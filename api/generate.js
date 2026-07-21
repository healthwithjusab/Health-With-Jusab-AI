import { GoogleGenAI } from '@google/genai';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { prompt, type } = req.body;
    
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    let systemInstruction = "Aap ek professional content creator aur digital wellness expert hain. Jo bhi topic user de, us par ekdam detailed, lamba, engaging aur professional content **Hinglish language** (Hindi words likhe hue English letters me) me likhiye. Content me proper headings, bullet points aur valuable information honi chahiye.";

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [prompt],
      config: {
        systemInstruction: systemInstruction,
        maxOutputTokens: 2000,
        temperature: 0.7,
      }
    });

    const resultText = response.text();
    return res.status(200).json({ result: resultText });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Failed to generate content: ' + error.message });
  }
}

