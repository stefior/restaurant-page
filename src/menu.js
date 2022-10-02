const MAX_UNICODE = 30000
const menuContent = document.createElement("div")
menuContent.style.cssText = `
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(auto-fit, 200px);
`

function getRandomCharacter() {
  return String.fromCharCode(Math.random() * MAX_UNICODE)
}

for (let i = 0; i < 18; i++) {
  const menuItem = document.createElement("div")
  menuItem.style.width = "200px"

  const menuItemImg = document.createElement("div")
  menuItemImg.textContent = getRandomCharacter()
  menuItemImg.style.fontSize = "5rem"

  const menuItemPara = document.createElement("p")
  menuItemPara.style.width = "200px"
  menuItemPara.style.overflow = "hidden"
  menuItemPara.textContent = `yummy ${menuItemImg.textContent.repeat(8)}'s`

  menuItem.appendChild(menuItemImg)
  menuItem.appendChild(menuItemPara)
  menuContent.appendChild(menuItem)
}

export default menuContent
