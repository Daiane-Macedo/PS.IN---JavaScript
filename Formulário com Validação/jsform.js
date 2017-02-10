$('#cep').blur(function() {
    var requisicaoCep = $.ajax({
        url: "http://api.postmon.com.br/v1/cep/" + $(this).val(),
        method: "GET"
    });
	requisicaoCep.done(function(dados){
		console.log(dados);
		$('#endereco').attr('disabled', 'true').val(dados.logradouro);
		$('#bairro').attr('disabled', 'true').val(dados.bairro);
		$('#cidade').attr('disabled', 'true').val(dados.cidade);
		$('#estado').attr('disabled', 'true').val(dados.estado);
	});
	requisicaoCep.fail(function(dados){

	})	
})

function Validacao() {
    
    var email = $('#email').val(); //pega o e-mail inserido
    var posArroba = email.indexOf("@");   //pega o índice do "@" dentro do e-mail
    var posPonto = email.lastIndexOf(".");    //pega o índice do "." dentro do e-mail
    var tamanho = email.length;           //pega o tamanho do endereço de e-mail digitado
        

     if(tamanho<6 || posArroba <1 || posPonto < posArroba+2 || posPonto+2>=tamanho){    /*  O menor tamanho é de 6 caracteres: x@y.zz, deve ter no mínimo 1 caracter antes do "@", 1 caracter depois do "@" e antes do ".", e 2 caracteres depois do "." antes do fim*/
        alert("Insira um e-mail válido!");
     } 
        
    var nome = $('#nome').val();
    var permitidos = /^([ \u00c0-\u01ffa-zA-Z'\-])+$/; //regex de caracteres permitidos no campo nome
    
    if (nome[0]==" " || (!(nome.match (permitidos)))) {
        alert("Nome inválido!");
    }

    var senha = $('#senha').val();
    if (senha[0] == " " || senha.length < 4){
        alert("Insira uma senha de no mínimo 4 dígitos!");
    } 
    
    var confirmacao = $('#confirma_senha').val();
    if (confirmacao !=senha ){
        alert("Erro na confirmação da senha!");
    }

    var cpf = $('#cpf').val();
    var cpfval = true; // variável de validade de e-mail

    if (cpf.length != 14) { 
        cpfval = false; 
    }
    for (var i = 0; i < cpf.length - 1; i++) {  //Verificca se todos os dígitos do cpf são iguais
        if (cpf[i] != cpf[i + 1]){
            cpfval= false;
        }
    }
    if (!(cpfval)){
        alert("Insira um CPF inválido");
    }
    
    var data = $('#data_nasc').val();
    if (data == "") {
    	alert("Insira uma data");
    }
    
    var telefone = $('#telefone').val();  //apenas aceita números de 10 dígitos (fixo) ou 11 (celular)
        if (telefone.length < 10 || telefone.length > 11){
            alert("Insira um telefone correto!");
    }
    return false;    
};