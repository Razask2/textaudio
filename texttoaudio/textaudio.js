var text=document.querySelector("textarea")
var btn=document.querySelector("button")

btn.addEventListener("click",()=>{
    var store=text.value
    var ta=new SpeechSynthesisUtterance(store)//use for whe we type text in textarea it will convert into audio
    speechSynthesis.speak(ta)
})