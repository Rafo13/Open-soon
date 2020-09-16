// 5.Գրել ծրագիր որ  դինամիկ ցույց կտա թե քանի օր, ժամ, րոպե  և վարկյան է մնացել մինչև տրված որևէ ամսաթիվ (Օրինակ նման դեպք պետք է լինում երբ գրում եք ՞՞բացումը շուտով՞՞ ու երևում է քանի օր, ժամ, րոպե, վարկյան է մնացել ու դինամիկ ժամանակը նվազում է):



let time = document.querySelector('.time')
let info = document.querySelector('.info')
info.innerHTML = 'Բացումը Շուտով'
info.style.textAlign = 'center'
info.style.fontSize = '50px'
info.style.lineHeight = '200px'

time.style.textAlign = 'center'
time.style.fontSize = '50px'
time.style.lineHeight = '200px'


let promYear = +prompt('Ներմուծել տարին')
let promMonth = +prompt('Ներմուծել ամիսը') - 1
let promDay = +prompt('Ներմուծել օրը')

function dinamicHour() {

   let datNow = new Date()
   let datNowUnix = datNow.getTime()


   let promDat = new Date(promYear, promMonth, promDay)
   let promDatUnix = promDat.getTime()
   let delt = Math.floor((promDatUnix - datNowUnix) / 1000)
   let day = delt / 60 / 60 / 24
   let subDay = Math.floor(day) * 60 * 60 * 24
   let hour = (delt - subDay) / 60 / 60
   let subHour = Math.floor(hour) * 60 * 60
   let minut = (delt - subDay - subHour) / 60
   let subMinut = Math.floor(minut) * 60
   let secund = (delt - subDay - subHour - subMinut)


   time.innerHTML = `${Math.floor(day)} օր  ${Math.floor(hour)} ժամ    ${Math.floor(minut)} րոպե    ${secund} վարկիան`

   if (datNowUnix > promDat) {
      info.innerHTML = 'Արդեն բացվել ենք!!!!!!'
      time.innerHTML = ''
   }

}
dinamicHour()
setInterval(dinamicHour, 1000)