let inputname =prompt("Adinizi Giriniz... ")
let username = document.querySelector("#myName")
username.innerHTML=`${inputname}`

function time(){
let dateData = new Date()
let hours = (dateData.getHours()<10?"0":"") + dateData.getHours();
let minutes= (dateData.getMinutes()<10?"0":"") + dateData.getMinutes();
let seconds= (dateData.getSeconds()<10?"0":"") + dateData.getSeconds();

let days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar']
let dayName = days[dateData.getDay()]

let info =document.querySelector("#myClock")
info.innerHTML = `${hours}:${minutes}:${seconds} ${dayName}`

}
setInterval(time,1000);