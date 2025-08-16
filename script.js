let generatedPoem = document.querySelector("#poem");
let loader = document.querySelector("#loader");
let poemElement = document.querySelector(".poems");

function generatePoem(data) {
loader.style.display = "none";
generatedPoem.style.display = "block";
let reply = data.answer
new Typewriter(poemElement, {
  strings: reply,
  autoStart: true,
  cursor:null,
  delay:50,
});
}


function apiCall(event) {
 event.preventDefault();
 loader.style.display = "block";

 new Typewriter(loader, {
  strings: "Generating",
  autoStart: true,
  cursor:"_",
  delay:50,
});
 let poemBox = document.querySelector(".poem-title")
 let poemTitle = poemBox.value
 console.log(poemTitle)
 let apiKey = "eo8b09c8c6a0484f543ct3b837fb6a19"
 let prompt = `Generate a German poem about ${poemTitle}`
 let context = "You are an AI assistant who generate just four line poems in German with HTML format without including any title just go straight to the poem,you seperate each lines with a <br /> and sign the poem with 'SheCode AI API' in a <strong> element at the end of the poem always and not the beginning."
 let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`
 fetch(apiUrl).then(res => res.json()).then(generatePoem)
}
let poemBox = document.querySelector(".poem-form")
poemBox.addEventListener("submit",apiCall)
