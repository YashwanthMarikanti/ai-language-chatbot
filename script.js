async function sendMessage(){

let input = document.getElementById("userInput").value;
let lang = document.getElementById("language").value;

document.getElementById("chat").innerHTML +=
"<p><b>You:</b> "+input+"</p>";

const res = await fetch(
"https://libretranslate.de/translate",
{
method:"POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({
q: input,
source: "auto",
target: lang,
format: "text"
})
});

const data = await res.json();

document.getElementById("chat").innerHTML +=
"<p><b>Bot:</b> "+data.translatedText+"</p>";

}
