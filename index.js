document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.querySelector('#text');
    const speakButton = document.querySelector('#speak');

    speakButton.addEventListener('click', () => {
        // Stop any ongoing speech synthesis
        window.speechSynthesis.cancel();

        const textToSpeak = textInput.value.trim();
        if (textToSpeak) {
            const utterance = new SpeechSynthesisUtterance(textToSpeak);
            window.speechSynthesis.speak(utterance);
        } else {
            console.warn('No text provided to speak.');
        }
    });
});
const fileInput = document.getElementById('fileInput');
const textArea = document.getElementById('text');

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  if (file && file.type === "text/plain") {
    const reader = new FileReader();
    reader.onload = () => {
      textArea.value = reader.result;
    };
    reader.readAsText(file);
  } else {
    alert("Please upload a valid .txt file.");
  }
});

