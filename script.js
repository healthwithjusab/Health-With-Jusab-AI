document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generateBtn');
  const topicInput = document.getElementById('topicInput');
  const contentType = document.getElementById('contentType');
  const outputDiv = document.getElementById('output');

  if (generateBtn) {
    generateBtn.addEventListener('click', async () => {
      const topic = topicInput.value.trim();
      const type = contentType.value;

      if (!topic) {
        alert('Kripya koi topic ya keyword likhiye!');
        return;
      }

      outputDiv.innerHTML = '🔄 Detailed content generate ho raha hai, kripya thoda intezaar karein...';
      outputDiv.style.display = 'block';

      try {
        const response = await fetch('/api/generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: topic, type: type }),
        });

        const data = await response.json();

        if (response.ok) {
          outputDiv.innerHTML = `<h3>✨ Generated Content:</h3><div style="white-space: pre-wrap; text-align: left; margin-top: 10px;">${data.result}</div>`;
        } else {
          outputDiv.innerHTML = `❌ Error: ${data.error || 'Kuch gadbad ho gayi.'}`;
        }
      } catch (err) {
        outputDiv.innerHTML = `❌ Connection Error: ${err.message}`;
      }
    });
  }
});
