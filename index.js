const btn = document.getElementById("change")

const temaOscuro = () => {
    document.querySelector('body').setAttribute('data-bs-theme', 'dark')
    document.querySelector("#icono").setAttribute("class", "bi bi-sun-fill")
}

const temaClaro = () => {
    document.querySelector('body').setAttribute('data-bs-theme', "light")
    document.querySelector("#icono").setAttribute("class", "bi bi-moon-fill")
}

btn.addEventListener("click", () => {
    document.querySelector('body').getAttribute('data-bs-theme') === "light" ? temaOscuro() : temaClaro()
})