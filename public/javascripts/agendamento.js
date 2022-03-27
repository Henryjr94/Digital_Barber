let nome = document.querySelector('#cliente')
let id = parseInt(document.querySelector('#id').innerHTML)
let h2 = document.querySelector('h2')

function findById (ID, array){

    array.map(e => e.id == ID ? result = e.nome : "Sem cliente associado")

    return result
}

nome.value = id

axios.get("http://localhost:3000/listacliente").then(cliente => {
    let clientes = cliente.data

    h2.innerText = `Agendar horario para ${findById(id, clientes)}`

})
