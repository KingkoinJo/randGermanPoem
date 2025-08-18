let poemElement = document.querySelector("#poems"); 

function generatePoem(data) {
  let reply = data.answer;
  new Typewriter(poemElement, {
  strings: reply,
  autoStart: true,
  cursor:null,
  delay:50,
});
}

function apiCall(event) {
  event.preventDefault();
  poemElement.classList.remove('hidden')
  new Typewriter(poemElement, {
  strings: " ",
  autoStart: true,
  cursor:"Generating poem...",
  pauseFor:2500,
  delay:200,
});
  let poemBox = document.querySelector(".poem-title");
  let poemTitle = poemBox.value;
  let apiKey = "eo8b09c8c6a0484f543ct3b837fb6a19";
  let prompt = `Generate a German poem about ${poemTitle}`;
  let context = "You are an AI assistant who generate just four line poems in German with HTML format without including any title just go straight to the poem,you seperate each lines with a <br /> and sign the poem with 'SheCode AI API' in a <strong> element at the end of the poem always and not the beginning.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  fetch(apiUrl).then(res => res.json()).then(generatePoem)
};

  let poemBox = document.querySelector(".poem-form");
  poemBox.addEventListener("submit",apiCall);
