let mode = document.querySelector("#modeBtn")
let body = document.querySelector("body")
let currMode = "light"
mode.addEventListener("click", () => {
  if (currMode == "light") {
    body.classList.add("dark")
    currMode = "dark"
    body.classList.remove("light")
  }
  else {
    currMode = "light"
    body.classList.add("light")
    body.classList.remove("dark")
  }

}

)