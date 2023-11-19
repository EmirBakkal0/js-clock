let inputName = prompt("İsminizi girer misiniz?");

let myName = document.querySelector("#myName")

myName.innerHTML=inputName;

function getTime(){
    
    let clock= document.querySelector("#myClock") 
    
    const date= new Date();

    let hour=date.getHours();
    let minute= date.getMinutes()
    let seconds= date.getSeconds()

    const days= ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let day=days[date.getDay()]

    let time= `${hour}:${minute}:${seconds}  Day:${day}`
    clock.innerHTML=time;

    requestAnimationFrame(getTime)

}


document.addEventListener("DOMContentLoaded", getTime)