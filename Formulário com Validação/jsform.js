$('#cep').blur(function() {
    var requisicaoCep = $.ajax({
        url: "http://api.postmon.com.br/v1/cep/" + $(this).val(),
        method: "GET"
    });
    requisicaoCep.done(function(dados){
        console.log(dados);
        $('#endereco').attr('disable','true').val(dados.endereco);
        $('#bairro').val(dados.bairro);
        $('#cidade').val(dados.cidade);
        $('#estado').val(dados.estado);    
    });
    requisicaoCep.fail(function(erro){
        console.log(erro.message);
        alert("CEP não encontrado");
    });
});

function Validacao() {
    
    var email = $('#email').val(); //pega o e-mail inserido
    var posArroba = email.indexOf("@");   //pega o índice do "@" dentro do e-mail
    var posPonto = email.lastIndexOf(".");    //pega o índice do "." dentro do e-mail
    var tamanho = email.length;           //pega o tamanho do endereço de e-mail digitado
    
     if(tamanho<6 || posArroba <1 || posPonto < posArroba+2 || posPonto+2>=tamanho){    /*  O menor tamanho é de 6 caracteres: x@y.zz, deve ter no mínimo 1 caracter antes do "@", 1 caracter depois do "@" e antes do ".", e 2 caracteres depois do "." antes do fim*/
        alert("E-mail Inválido!");
     } 
        
    var nome = $('#nome').val();
    var permitidos = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ'\-\ \s]+$/; //caracteres permitidos no campo nome
    if (nome[0]==" " || (!(nome.match (permitidos)))) {
        alert("Nome inválido!");
    }

    var senha = $('#senha').val();
    if (senha[0] == " " || senha ==""){
        alert("Insira uma senha!");
    } 
    
    var confirmacao = $('#confirma_senha').val();
    if (confirmacao !=senha ){
        alert("Erro na confirmação da senha!");
    }

    var cpf = $('#cpf').val();
    if (cpf.length != 11) {
    	alert("CPF inválido");
    }
    var tudoIgual = true;
        for (var i = 0; i < cpf.length - 1; i++) {
            if (cpf[i] != cpf[i + 1]){
                tudoIgual= false;
            }
        }
        if (tudoIgual){
            alert("CPF inválido");
        }
    
    var data = $('#data_nasc').val();
    if (data == "") {
    	alert("Insira uma data");
    }
    
    var telefone = $('#telefone').val();
        if (telefone.length < 10 || telefone.length > 11){
            alert("Insira um telefone correto!");
    }
};