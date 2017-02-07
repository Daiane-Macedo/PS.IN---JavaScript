$('#cidade').blur(function() {
    var requisicaoCidade = $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + $(this).val()+ "&APPID=06364573f45c170fb7ab1d9b8f7abaf8&units=metric&lang=pt",
        method: "GET"
    });
    requisicaoCidade.done(function(dados){
        console.log(dados);
        $('#cidade_sel').val(dados.name);
        $('#temperatura').val(dados.main.temp);
        $('#humidade').val(dados.main.humidity);
        $('#descricao').val(dados.weather[0].description);
        $('#pais').val(dados.sys.country);
});
    requisicaoCidade.fail(function(erro){
        console.log(erro.message);
    });
});