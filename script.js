async function generateContent() {
  const topicInput = document.getElementById('topic');
  const outputDiv = document.getElementById('output');

  const topic = topicInput ? topicInput.value.trim() : '';
  
  if (!topic) {
    alert('Kripya koi topic likhiye!');
    return;
  }

  outputDiv.innerHTML = 'Content generate ho raha hai, kripya intezar karein...';

  const apiKey = "AIzaSyAMDpGZMB8HFH-HAXIck6qFMgpPMRRv-HA";

  const promptText = `Aap ek professional content creator aur digital wellness expert hain. Is topic par ekdam detailed, engaging aur professional content Hinglish me likhiye: ${topic}. Proper headings aur bullet points ka use karein.`;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: promptText }] }]
      })
    });

    const data = await response.json();

    if (data.candidates && data.candidates[0].content.parts[0].text) {
      outputDiv.innerHTML = data.candidates[0].content.parts[0].text;
    } else {
      outputDiv.innerHTML = 'Error: Content generate nahi ho paya. Dobara koshish karein.';
    }
  } catch (err) {
    outputDiv.innerHTML = 'Connection Error: ' + err.message;
  }
        }

