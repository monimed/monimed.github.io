var vistas = {

    global : function(){

        /*Funciones generales del sitio*/

        console.log(checkout.getSoluciones(checkout.getNegocios()[0],checkout.getUbicaciones(checkout.getNegocios()[0])[0]));
        loadSection("home.html");
        checkout.refreshCart();

        $('html').on("click",".change-section",function(e){

            e.preventDefault();
            var section = $(this).attr('section');
            var params = $('.section-param').val();
            loadSection(section, params);

        });

        $('.add-to-cart').click(function(){
            var cart = checkout.addToCart($(this).attr('item'),1);
        });
        
    },
    home : function(){

        /*Función default*/

    }

};