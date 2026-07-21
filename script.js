document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generateBtn');
  const promptInput = document.getElementById('promptInput');
  const resultArea = document.getElementById('resultArea');

  if (generateBtn) {
    generateBtn.addEventListener('click', async () => {
      const promptText = promptInput.value.trim();
      if (!promptText) {
        alert('Kripya koi topic ya prompt likhiye!');
        return;
      }

      resultArea.innerHTML = 'Content generate ho raha hai, kripya intezar karein...';

      try {
        // Direct browser-based generation
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY || ''}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{
              parts: [{ text: `Aap ek professional content creator aur digital wellness expert hain. Is topic par ekdam detailed, lamba, engaging aur professional content Hinglish language me likhiye, jisme proper headings aur bullet points hon: ${promptText}` }]
            }]
          })
        });

        const data = await response.json();
        if (data.candidates && data.candidates[0].content.parts[0].text) {
          resultArea.innerHTML = data.candidates[0].content.parts[0].text;
        } else {
          resultArea.innerHTML = 'Error: Content generate nahi ho paya. Dobara koshish karein.';
        }
      } catch (err) {
        resultArea.innerHTML = 'Connection Error: ' + err.message;
      }
    });
  }
});
