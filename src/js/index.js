let listaDeCampos = document.querySelectorAll(".campo")
let botao = document.querySelector(".btn")

validarAlteracao()
validarFormulario()

function validarFormulario() {
    botao.addEventListener("click", () => {
        listaDeCampos.forEach((campos) => {
            if (campos.classList.contains("preenchido")) {
                return
            } else {
                campos.classList.add("vazio")
            }
        })
    })
}

function validarAlteracao() {
    listaDeCampos.forEach((elemento) => {
        elemento.addEventListener("change", (alteraçao) => {
            if (alteraçao.target.value !== "") {
                elemento.classList.add("preenchido")
                elemento.classList.remove("vazio")
            } else {
                elemento.classList.remove("preenchido")
            }
        })
    })
}

