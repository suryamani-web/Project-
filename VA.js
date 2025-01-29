let btn=document.querySelector("#btn");
let content=document.querySelector("#content");
let voice=document.querySelector("#voice");

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-G8"
// window ka use hm apne perform karvane ke liye karte hai 
    window.speechSynthesis.speak(text_speak)
}
// make a function name wishMe 
function wishMe(){
    let day=new Date()
  let hours=day.getHours()
  // console.log(hours)
// 12 baje ke pahle good morning sir and 12 baje ke bad good afternoon sir  
  if(hours>=0 && hours<12){
      speak("Good Morning sir")
      
    }
    else if(hours>=12 && hours<16){
        speak("Good afternoon sir")
    }
    else{
      speak("Good Evening sir")

  }
}
window.addEventListener('load',()=>{
     wishMe()
})
// // hmari voice ko sunne ke liye hm SpeechRecognition ka use karte hai 
let SpeechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition= new SpeechRecognition()

recognition.onresult=(event)=>{
   let currentIndex= event.resultIndex
  //  current Index ko hm console me jakar pta kar sakte hai eska use hm jo hm bolenge vah button me print karvane ke liye karte hai  
   let transcript= event.results[currentIndex][0].transcript
   content.innerText=transcript
      // console.log(event)
      takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
 function takeCommand(message){
  btn.style.display="flex"
  voice.style.display="none"
  
  
  if(message.includes("hello")||message.includes("hey")){
    speak("hello sir,what can i help you?")
  }
  else if(message.includes("what is your name")){
    speak("my name is shifra,i am your virtual assistent created by suryamani")
  }
  else if(message.includes("open youtube")){
    speak("opening youtube...")
    window.open("https://www.youtube.com/","_blank")
  }
  else if(message.includes("open google")){
    speak("opening google...")
    window.open("https://www.google.com/","_blank")
  }
  else if(message.includes("open facebook")){
    speak("opening facebook...")
    window.open("https://www.facebook.com/","_blank")
  }
  else if(message.includes("open instagram")){
    speak("opening instagram...")
    window.open("https://www.instagram.com/","_blank")
  }
  else if(message.includes("open calculetor")){
    speak("opening calculetor...")
    window.open("","_blank")
  }
  else if(message.includes("open microsoft")){
    speak("opening microsoft...")
    window.open("https://www.microsoft.com/","_blank")
  }
  else if(message.includes("open whatsapp")){
    speak("opening whatsapp...")
    window.open("","_blank")
  }
  else{
    speak('This is what i found on internet ragarding ${message')
    window.open(`https://www.google.com/search?q=${message}`)

  }
}
