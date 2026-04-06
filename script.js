async function sendMessage(){

let input = document.getElementById("userInput").value;
let lang = document.getElementById("language").value;
let chat = document.getElementById("chat");

chat.innerHTML += "<p><b>You:</b> "+input+"</p>";

try {

const response = await fetch(
"https://libretranslate.de/translate",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body: JSON.stringify({
q: input,
source: "auto",
target: lang
})
});

const data = await response.json();

console.log(data);

chat.innerHTML += "<p><b>Bot:</b> "+data.translatedText+"</p>";

} catch(error){

console.log(error);
chat.innerHTML += "<p><b>Bot:</b> Error translating</p>";

}

}
