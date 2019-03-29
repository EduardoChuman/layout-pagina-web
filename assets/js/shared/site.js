
function Site(){

    numeral.locale('pt-br');

    $(window).ready(function(){
        
        atribuirFuncionalidadeFilterMenuKeyup();
        atribuirFuncionalidadeToggler();
        atribuirFuncionalidadeToggleMenuClick();
        atribuirFuncionalidadeSubMenu();
        atribuirFuncionalidadePainelConsolidado();
        atribuirFuncionalidadeEstruturaSufug();
        atribuirFuncionalidadeIndicadores();

    });

    function atribuirFuncionalidadeFilterMenuKeyup() {

        $('#menuFilter').on('keyup', function () {
            var input = $('#menuFilter').val().toString().toUpperCase();
            var ulTag = document.getElementById("lateral-menu");
            var liTag = ulTag.getElementsByTagName("li");
            for (var i = 0; i < liTag.length; ++i) {
                liTag[i].style.display = 'block';
                var smenu = liTag[i].textContent.toString().toUpperCase();
                if (smenu.indexOf(input) < 0) {
                    liTag[i].style.display = 'none';
                }
            }
        });

    }

    function atribuirFuncionalidadeToggler(){

        $('#toggler').on('click', function(){
            
            if( !$('body').hasClass('toggle-menu-toggled') ){
                $('body').addClass('toggle-menu-toggled');
            } else {
                $('body').removeClass('toggle-menu-toggled');
            }

        });

    }

    function atribuirFuncionalidadeToggleMenuClick(){

        $('.toggle-menu').on('click', function(){
            $('body').removeClass('toggle-menu-toggled');
        });

    }

    function atribuirFuncionalidadeSubMenu(){

        $('.toggle-menu .toggle-item').on('click', function(event){
            
            if($(this).find("i.pull-right").hasClass("fa-angle-left")){
                
                $(this).find("i.pull-right").removeClass("fa-angle-left").addClass("fa-angle-down");
                $(this).parent().find('ul').slideDown("fast",function(){});

            } else {
                
                $(this).find("i.pull-right").removeClass("fa-angle-down").addClass("fa-angle-left");
                $(this).parent().find('ul').slideUp("fast",function(){});

            }

            event.stopPropagation();
            
        });

    }

    function atribuirFuncionalidadePainelConsolidado(){

        $('.painel-consolidado').on('click',function(){
            $('html, body').animate({
                scrollTop: 0
            }, 500);
        });   

    }

    function atribuirFuncionalidadeEstruturaSufug(){

        $('.estrutura-sufug').on('click',function(){
            $('html, body').animate({
                scrollTop: $('.estrutura-sufug-anchor').offset().top - 70
            }, 500);
        });

    }

    function atribuirFuncionalidadeIndicadores(){

        $('.indicadores').on('click',function(){
            $('html, body').animate({
                scrollTop: $('.indicadores-anchor').offset().top - 70
            }, 500);
        });

    }

}