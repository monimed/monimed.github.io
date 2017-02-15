var vistas = {

    global : function(){

        /*Funciones generales del sitio*/

        loadSection("home.html");

        $('html').on("click",".change-section",function(e){

            e.preventDefault();
            var section = $(this).attr('section');
            loadSection(section);

        });

        $('.add-to-cart').click(function(){

            var cart = checkout.addToCart($(this).attr('item'),1);
        });

    },
    home : function(){

        /*Función default*/

    }

};