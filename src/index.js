import home from "./home"
import menu from "./menu"
import contact from "./contact"

const container = document.querySelector("#content > main")
const homeButton = document.querySelector(".home-button")
const menuButton = document.querySelector(".menu-button")
const contactButton = document.querySelector(".contact-button")

homeButton.addEventListener("click", () => {
  container.innerHTML = ""
  container.appendChild(home)
})
menuButton.addEventListener("click", () => {
  container.innerHTML = ""
  container.appendChild(menu)
})
contactButton.addEventListener('click', () => {
  container.innerHTML = ""
  container.appendChild(contact)
})
