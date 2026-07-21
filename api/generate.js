export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { prompt, type } = req.body;
    
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'API key not configured' });
    }

    const apiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: `Aap ek professional content creator aur digital wellness expert hain. Is topic par ekdam detailed, lamba, engaging aur professional content Hinglish language (Hindi words likhe hue English letters me) me likhiye, jisme proper headings, bullet points aur valuable information ho: ${prompt}` }]
        }]
      })
    });

    const data = await apiResponse.json();

    if (data.candidates && data.candidates[0].content.parts[0].text) {
      const resultText = data.candidates[0].content.parts[0].text;
      return res.status(200).json({ result: resultText });
    } else {
      return res.status(500).json({ error: 'AI Error: ' + JSON.stringify(data) });
    }

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Failed: ' + error.message });
  }
}
