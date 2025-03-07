const body = document.body
const buton = document.querySelector("button")
buton.addEventListener("click", e => {
    const div = document.createElement("div")
    div.classList.add("patrat")
body.appendChild(div)
})