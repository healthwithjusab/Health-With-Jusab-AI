const generateBtn = document.getElementById('generateBtn');
  const promptInput = document.getElementById('promptInput');
  const resultArea = document.getElementById('resultArea');

  if (generateBtn) {
    generateBtn.addEventListener('click', async () => {
      const promptText = promptInput.value ? promptInput.value.trim() : '';
      if (!promptText) {
        alert('Kripya koi topic ya prompt likhiye!');
        return;
      }

      resultArea.innerHTML = 'Content generate ho raha hai, kripya intezar karein...';

      
      
      const apiKey = "AIzaSy... (AIzaSyAMDpGZMB8HFH-HAXIck6qFMgpPMRRv-HA)";

      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{
              parts: [{ text: `Aap ek professional content creator aur digital wellness expert hain. Is topic par ekdam detailed, lamba, engaging aur professional content Hinglish language (Hindi words likhe hue English letters me) me likhiye, jisme proper headings, bullet points aur valuable information ho: ${promptText}` }]
            }]
          })
        });

        const data = await response.json();
        
        if (data.candidates && data.candidates[0].content.parts[0].text) {
          resultArea.innerHTML = data.candidates[0].content.parts[0].text;
        } else if (data.error) {
          resultArea.innerHTML = 'API Error: ' + (data.error.message || JSON.stringify(data.error));
        } else {
          resultArea.innerHTML = 'Error: Content generate nahi ho paya. Dobara koshish karein.';
        }
      } catch (err) {
        resultArea.innerHTML = 'Connection Error: ' + err.message;
      }
    });
  }
});

  
