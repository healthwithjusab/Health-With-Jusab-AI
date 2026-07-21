function generateContent() {
  const topic = document.getElementById('topic').value;
  const type = document.getElementById('type').value;
  const language = document.getElementById('language').value;
  const outputDiv = document.getElementById('output');

  if (topic.trim() === '') {
    outputDiv.innerHTML = "⚠️ Please koi topic enter karein (e.g., Aloe Vera Benefits).";
    return;
  }

  outputDiv.innerHTML = "⏳ Generating AI content, please wait...";

  // Dummy AI Generator Logic (Phase 1 Prototype)
  setTimeout(() => {
    let generatedText = `<h3>✨ Generated ${type} (${language})</h3>`;
    
    if (type === 'SEO Blog') {
      generatorBlog(topic, language, outputDiv, generatedText);
    } else if (type === 'YouTube Script') {
      generatorScript(topic, language, outputDiv, generatedText);
    } else if (type === 'Instagram Caption') {
      generatorInsta(topic, language, outputDiv, generatedText);
    } else {
      generatorForever(topic, language, outputDiv, generatedText);
    }
  }, 1000);
}

function generatorBlog(topic, lang, div, header) {
  div.innerHTML = `${header}
    <p><strong>Title:</strong> Ultimate Guide to ${topic} for Health & Wellness</p>
    <p><strong>Introduction:</strong> Aaj ki fast life me ${topic} ka use karke hum apni health ko behtar bana sakte hain...</p>
    <p><strong>Key Benefits:</strong> Natural ingredients aur proper lifestyle se aap lambe samay tak fit reh sakte hain.</p>
  `;
}

function generatorScript(topic, lang, div, header) {
  div.innerHTML = `${header}
    <p><strong>[0:00 - 0:10] Hook:</strong> Kya aap bhi ${topic} ke baare me sahi jaanna chahte hain? Video end tak dekhein!</p>
    <p><strong>[0:10 - 0:45] Main Content:</strong> Dosto, aaj hum baat karenge ki kaise ${topic} aapki daily routine me faydemand ho sakta hai.</p>
    <p><strong>[0:45 - 1:00] Call to Action:</strong> Channel ko subscribe karein aur description me diye link par click karein!</p>
  `;
}

function generatorInsta(topic, lang, div, header) {
  div.innerHTML = `${header}
    <p>🌿 Transform your lifestyle with the power of ${topic}! Health is true wealth. ✨</p>
    <p>👇 Drop a comment below if you want to know more!</p>
    <p><em>#HealthWithJusab #Wellness #ForeverLiving #${topic.replace(/\s+/g, '')} #HealthyLifestyle</em></p>
  `;
}

function generatorForever(topic, lang, div, header) {
  div.innerHTML = `${header}
    <p>🌟 <strong>Forever Business Product Spotlight:</strong> Experience the pure benefits of ${topic}. Premium quality natural ingredients designed for your wellness journey.</p>
    <p>📦 100% stable aloe vera & natural extracts to boost your daily energy and immunity.</p>
    <p>📞 Contact us today to order your pack!</p>
  `;
      }
