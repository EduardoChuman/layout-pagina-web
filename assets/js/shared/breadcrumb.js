function Breadcrumb( $container ){

	var itens =[];

    function add(text, link){		
		itens.push({ text: text, link: link});
    }

    function write(){
		
		var texto = "<ul class='page-breadcrumb'>";

			$.each(itens, function(idx, valor){
				
				texto += "<li>";
				
					if( valor.link ) texto += "<a href='" + valor.link + "'> " + valor.text + " </a>" ;						
					else texto += "<span>" + valor.text + "</span>";
					
					if( idx < itens.length - 1 ) texto += "<i class='fa fa-circle'></i>";					
					
				texto += "</li>";

			});
			
		texto += "</ul>";
		$( ".page-bar" ).html(texto);
		
    }

    return {

        add: function(text, link){
            add(text, link);
        },

        write: write

    }

}