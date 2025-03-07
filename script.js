const body = document.body
const buton = document.querySelector("button")
buton.addEventListener("click", e => {
    const div = document.createElement("div")
    div.classList.add("patrat")
    const p = document.createElement("p")
    p.textContent = "salut din webstorm"
body.appendChild(div)
    body.appendChild(p)
})