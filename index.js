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
