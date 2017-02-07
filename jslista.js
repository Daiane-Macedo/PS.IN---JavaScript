var botao = document.getElementById("botao");
var lista = document.getElementById("lista");


botao.addEventListener("click", function inserir(){
    var tarefa = document.formTexto.texto.value;
    var item = document.createElement('item');
	item.innerHTML = "<li>" + tarefa +'<input type="checkbox" value= "done"/>' + '<button id="editar">Editar</button>' + '<button id="excluir">x</button>' + " " + "</li>";
	lista.appendChild(item);  
        
        
     $("#editar").click(function editar(){
            var nova = prompt("Entre com a nova tarefa:");
            item.innerHTML = "<li>" + nova +'<input type="checkbox" value= "done"/>' + '<button id="editar">Editar</button>' + '<button id="excluir()">x</button>' + " " + "</li>" ;
            lista.appendChild(item); 
     });
});