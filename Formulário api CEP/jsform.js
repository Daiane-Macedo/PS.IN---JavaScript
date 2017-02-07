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
    });
});