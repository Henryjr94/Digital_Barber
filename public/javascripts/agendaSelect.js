let lista = document.querySelector('#lista')
var listaHtml = ""

function findById (ID, array){

    array.map(e => e.id == ID ? result = e.nome : "Sem cliente associado")

    return result
} 
   
axios.get("http://localhost:3000/listacliente").then(cliente => {
    let clientes = cliente.data        

    clientes.map((e,i) => {
        listaHtml += 
        `<a href="./?nome=${e.id}"><div class="category">
        <div class="category-child">${e.nome} </div>
        <div class="category-child">${e.telefone} </div>
        <div class="category-child">${e.email} </div>
        </div></a>`
    })

    lista.innerHTML = listaHtml
})    

