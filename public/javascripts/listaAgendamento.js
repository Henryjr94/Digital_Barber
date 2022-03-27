let lista = document.querySelector('#lista')
var listaHtml = ""

function findById (ID, array){

    array.map(e => e.id == ID ? result = e.nome : "Sem cliente associado")

    return result
}

axios.get("http://localhost:3000/listaAgendamentos").then(agenda => {

    var agendamento = agenda.data
    
    axios.get("http://localhost:3000/listacliente").then(cliente => {

        let clientes = cliente.data        

        agendamento.map((e,i) => listaHtml += `<div id="agenda-${i}">  descricao: ${e.descricao} cliente: ${findById(e.cliente_id, clientes)} horario: ${e.horario}</div>`)

        lista.innerHTML = listaHtml

    })    
})



