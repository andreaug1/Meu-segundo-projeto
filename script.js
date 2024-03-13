function toggleMode() {
  /*fundo ligar e desligar*/
  const html = document.documentElement
  html.classList.toggle("light")

  //função que vai pegar a imagem
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/andre.png")
  }

  const img = document.querySelector("#profile img")


}
