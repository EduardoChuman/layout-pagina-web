function PainelIndex( cardFactory ){

    const regexNumerosCard = /^(-?[\d,.]+) *([\w]+)?$/;    
    
    var cards = [];
    var spinner = new Spinner();

    $(window).ready(function(){
        
        criarBreadcrumb();
        iniciarPreloader();
        cards = cardFactory.getCards();
        var deferreds = carregarDadosDosCards();
        
        $.when.apply($, deferreds)
            .then(function(){
                inicializar();
            });
        
    });

    $(window).on('resize',function(){
        //chart.setNewContainerSize( $('#detalhesPrimeiraLinha .container-grafico').width() );        
    });

    function iniciarPreloader(){
        spinner.show();
    }

    function criarBreadcrumb(){

        var breadcrumb = new Breadcrumb();
        breadcrumb.add("Página Inicial", "http://www.defus.caixa/painel/");
        breadcrumb.add("Painel Consolidado");
        breadcrumb.write();

    }

    function carregarDadosDosCards() {
        
        var deferreds = [];
        
        $.each(cards, function(idx, card){
            deferreds.push(card.carregarDadosDoServico());
        });

        return deferreds;

    }

    function inicializar() {
        
        desenharCards();
        animarCards();
        ocultarPreloader();
        abrirDetalhesDoCardPadrao();

    }

    function desenharCards() {

        var contador = 0;

        $.each(cards, function(idx, card){
            
            var $pai = $('.cards-primeira-linha');
            var $detalhes = $('#detalhesPrimeiraLinha');

            if(contador > 3) {
                $pai = $('.cards-terceira-linha');
                $detalhes = $('#detalhesTerceiraLinha');
            } 
            
            card.toHtml( $pai, $detalhes, cardClickCallback );
            
            contador++;

        });

    }

    function cardClickCallback(callback){
        
        var abriu = false;

        $.each(cards, function(idx, card) { 
            if( !card.estaAberto ) return;
            if( card.estaAberto() ) card.fecharDetalhe(function(){
                abriu = true;
                callback();
            });
        });

        if(!abriu) callback();

    }

    function ocultarPreloader(){

        spinner.remove();
        $('.conteudo-dados').css('display','block');

    }

    function abrirDetalhesDoCardPadrao() {

        if( $(window).width() > 980 ){
            cards[Object.keys(cards)[0]].abrirDetalhe('slide');
        }

    }

    function animarCards() {

        $.each(cards, function(idx, card){            
            card.animarNumero();
        });
        
    }    

    function atribuirFuncionalidadeAtivoTotalClick(){
        
        $(".detalhe:eq(3)").parent().on('click',function(){
            
            var arrecadacaoLiquidaTableModel = new TableModel(
                $("#detalhesPrimeiraLinha .painel-detalhes:eq(3)").find('span.tabelaPrimeiraLinha'), 
                dadosAjax.ativoTotal
            );

            $("#detalhesPrimeiraLinha .painel-detalhes:eq(" + painelDetalheAtivoLinha1 + ")").fadeOut('fast', function(){
                
                painelDetalheAtivoLinha1 = 3;

                $("#detalhesPrimeiraLinha .painel-detalhes:eq(" + painelDetalheAtivoLinha1 + ")").fadeIn('fast', function(){

                    

                });

            });

        });
        
    }

}