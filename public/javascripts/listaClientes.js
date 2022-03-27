let lista = document.querySelector('#lista')
var listaHtml = ""

function findById (ID, array){

    array.map(e => e.id == ID ? result = e.nome : "Sem cliente associado")

    return result
} 
   
axios.get("http://localhost:3000/listacliente").then(cliente => {
    let clientes = cliente.data        

    clientes.map((e,i) => listaHtml += `<div id="agenda-${i}">  nome: ${e.nome} telefone: ${e.telefone} email: ${e.email}</div>`)

    lista.innerHTML = listaHtml
})    

