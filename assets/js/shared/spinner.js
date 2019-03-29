function Spinner(){

    function show(){
        $('body').prepend('<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>');
    }

    function remove(){
        $('div.spinner').remove();
    }

    return {        
        show: show,
        remove: remove        
    }

}