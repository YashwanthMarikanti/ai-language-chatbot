async function sendMessage() {

let input = document.getElementById("userInput").value;
let lang = document.getElementById("language").value;

document.getElementById("chat").innerHTML +=
"<p><b>You:</b> " + input + "</p>";

try {

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

console.log("API response:", data);   // DEBUG LINE

document.getElementById("chat").innerHTML +=
"<p><b>Bot:</b> " + data.translatedText + "</p>";

} catch (error) {

console.log("Error:", error);   // DEBUG ERROR

document.getElementById("chat").innerHTML +=
"<p><b>Bot:</b> Translation error</p>";

}

}
