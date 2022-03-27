let lista = document.querySelector('#lista')
var listaHtml = ''

function findById (ID, array){

    array.map(e => e.id == ID ? result = e.nome : "Sem cliente associado")

    return result
}

axios.get("http://localhost:3000/listaAgendamentos").then(agenda => {

    var agendamento = agenda.data
    
    axios.get("http://localhost:3000/listacliente").then(cliente => {

        let clientes = cliente.data        

        agendamento.map((e,i) => {
            listaHtml +=
            `<div class="category">
            <div class="category-child">${e.descricao} </div>
            <div class="category-child">${findById(e.cliente_id, clientes)} </div>
            <div class="category-child">${e.horario} </div>
            </div>`
        }) 

        lista.innerHTML = listaHtml

    })    
})





