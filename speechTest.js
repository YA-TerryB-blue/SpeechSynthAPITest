export function speechTest(element) {
  let textInput = document.querySelector('#textToSpeechInput');
  let msg = new SpeechSynthesisUtterance();
  let voices = window.speechSynthesis.getVoices();
  msg.voice = voices[10]; // Note: some voices don't support altering params
  msg.voiceURI = 'native';
  msg.volume = 1; // 0 to 1
  msg.rate = 1; // 0.1 to 10
  msg.pitch = 1; //0 to 2
  // msg.text = "Hello"
  // console.log(msg.text)
  msg.lang = 'en-US';

  msg.onend = function (e) {
    console.log('Finished in ' + event.elapsedTime + ' seconds.');
  };
  element.innerHTML = `Speech`;
  // const speak = () => {
  //   window.speechSynthesis.speak(msg);
  // };
  element.addEventListener('click', () => {
    // console.log(textInput.value)
    // console.log(msg.text)
    msg.text = textInput.value;
    speechSynthesis.speak(msg);
  });
}
