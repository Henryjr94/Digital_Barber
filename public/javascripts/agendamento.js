let nome = document.querySelector('#cliente')
let id = parseInt(nome.value)
let h2 = document.querySelector('h2')

function findById (ID, array){  
    let result

    array.map(e => e.id == ID ? result = e.nome : "Sem cliente associado")

    return result
}

axios.get("http://localhost:3000/listacliente").then(cliente => {
    let clientes = cliente.data

    h2.innerText = `Agendar horario para ${findById(id, clientes)}`

})

console.log(nome.value);