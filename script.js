function load(){

let msg = document.querySelector("#msg")
let img = document.querySelector("#img")
let data = new Date()
let hour = data.getHours()

msg.innerHTML = `Agora são ${hour} horas`


if (hour >= 0 && hour < 12) {
  //Bom dia!
  img.src = '/ex14/imagem/manha.jpg'
  document.body.style.backgroundColor = "#D2B47A"
  document.body.style.color = "#D2B47A"

} else if (hour >= 12 && hour < 18){
  //Boa Tarde!

  img.src = '/ex14/imagem/tarde.jpg'
  document.body.style.backgroundColor = "#AD7754"
  document.body.style.color = "#AD7754"
} else {
  //BOa noite

  img.src = '/ex14/imagem/noite.jpg'
  document.body.style.backgroundColor = "#183239"
  document.body.style.color = "#183239"
}

}