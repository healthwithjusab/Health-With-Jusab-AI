async function generateContent() {
  const apiKeyInput = document.getElementById('apiKey');
  const topicInput = document.getElementById('topic');
  const outputDiv = document.getElementById('output');

  const apiKey = apiKeyInput ? apiKeyInput.value.trim() : '';
  const topic = topicInput ? topicInput.value.trim() : '';
  
  if (!apiKey) {
    alert('Kripya apni Gemini API Key daaliye!');
    return;
  }

  if (!topic) {
    alert('Kripya koi topic likhiye!');
    return;
  }

  outputDiv.innerHTML = 'Content generate ho raha hai, kripya intezar karein...';

  const promptText = `Aap ek professional content creator aur digital wellness expert hain. Is topic par ekdam detailed, engaging aur professional content Hinglish me likhiye: ${topic}. Proper headings aur bullet points ka use karein.`;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: promptText }] }]
      })
    });

    const data = await response.json();

    if (data.error) {
      outputDiv.innerHTML = 'Google Error: ' + data.error.message;
      return;
    }

    if (data.candidates && data.candidates[0].content.parts[0].text) {
      outputDiv.innerHTML = data.candidates[0].content.parts[0].text;
    } else {
      outputDiv.innerHTML = 'Error: Response format match nahi hua.';
    }
  } catch (err) {
    outputDiv.innerHTML = 'Connection Error: ' + err.message;
  }
}
