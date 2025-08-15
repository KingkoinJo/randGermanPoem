
function generatePoem(event) {
 event.preventDefault();
 let poemElement = document.querySelector(".poems")
new Typewriter(poemElement, {
  strings: "Dieses Baumes Blatt, der von Osten",
  autoStart: true,
  cursor:null,
  delay:50
});
 
}
let poemBox = document.querySelector(".poem-form")
poemBox.addEventListener("submit",generatePoem)
