// Your script here.
window.addEventListener('DOMContentLoaded', (event) => {
  const startBtn = document.getElementById('start-btn');
  const stopBtn = document.getElementById('stop-btn');
  const voiceSelect = document.getElementById('voice-select');
  const rateInput = document.getElementById('rate-input');
  const pitchInput = document.getElementById('pitch-input');
  const textInput = document.getElementById('text-input');
  let voices = [];

  // Fetch the available voices and populate the voice select dropdown
  function loadVoices() {
    voices = speechSynthesis.getVoices();
    voices = voices.filter((voice) => voice.lang.startsWith('en')); // Filter English voices
    voiceSelect.innerHTML = voices
      .map((voice) => `<option value="${voice.name}">${voice.name}</option>`)
      .join('');
  }

  // Initialize the voices list
  loadVoices();

  // Reload the voices list in case it changes
  speechSynthesis.addEventListener('voiceschanged', loadVoices);

  // Start speaking when the start button is clicked
  startBtn.addEventListener('click', () => {
    const text = textInput.value
