async function sendMessage() {

let input = document.getElementById("userInput").value;
let lang = document.getElementById("language").value;

document.getElementById("chat").innerHTML +=
"<p><b>You:</b> " + input + "</p>";

const response = await fetch("https://translate.argosopentech.com/translate", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
q: input,
source: "auto",
target: lang,
format: "text"
})
});

const data = await response.json();

document.getElementById("chat").innerHTML +=
"<p><b>Bot:</b> " + data.translatedText + "</p>";

document.getElementById("userInput").value = "";
}
