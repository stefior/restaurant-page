const homeContent = document.createElement("div")
const description = document.createElement("p")

description.textContent =
  "A place to go when you're hungry for some random chars."
description.style.fontSize = "10rem"
description.style.fontStyle = 'italic'
homeContent.appendChild(description)

export default homeContent
