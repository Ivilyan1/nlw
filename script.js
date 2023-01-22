const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  //Coloca no console e vai entender! dia de hj com apenas 5 caracteres
  const dayExists = nlwSetup.dayExists(today)
  if (dayExists) {
    alert("Dia já incluso ❌")
    return
  }
  alert("Dia Adicionado com Sucesso ✅")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
