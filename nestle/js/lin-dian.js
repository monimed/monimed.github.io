var execute = new function(){

    this.run = function(){

        var seccion = "home";

        if(utils.getParameterByName("s")){
            seccion = utils.getParameterByName("s");
        }

        vistas.global();

        try{

            eval("vistas." + seccion + "()");

        }catch(err){

            console.log(err);
        }


    };

};

var validator = {

    startValidations : function(){

        $('.validation-form').submit(function(e){

            e.preventDefault();

            var validated = true;

            $(this).find('input').each(function(){
                try{
                    if(!validator.validateInput($(this).attr('class'),$(this).val(),$(this))){
                        validated = false;
                    }
                }catch(err){
                    console.log(err);
                }
            });

            if(validated){
                $(this).unbind().submit();
            }else{
                $("<div class='message-validation'>Valida todos los datos requeridos</div>").dialog({"modal" : true});
            }


        });

    },


    validateInput : function(type, val, selector){

        type = type.split(" ");
        var valid = true;
        for(var i = 0; i < type.length; i++){

            var tmp = type[i];
            tmp = tmp.split('validation-');

            if(tmp.length > 1){

                if(!validator.validator(tmp[1],val, selector)){
                    valid = false;

                }
            }
        }

        return valid;

    },

    validator : function(type, val, selector){

        var validated = true;

        switch(type){

            case "tel":
                var patt = new RegExp("^[1-9]{10}$");
                var telefono = val;
                if (!patt.test(telefono)){
                    validated = false;
                }
                break;

            default:
                if(typeof val === "undefined" || val == "" ){
                    validated = false;
                }

                break;
        }

        if(!validated){
            validator.changeColor(selector,"error");
        }else{
            validator.changeColor(selector,"regular");
        }

        return validated;

    },

    changeColor : function(selector, type){


        switch(type){

            case "error":
                $(selector).css({"color":"#cc0000"});
                $(selector).parent().parent().find('.input').find('.form-control').css({"border":"1px solid #cc0000"});
                break;
            case "regular":
                $(selector).css({"color":"inherit"});
                $(selector).parent().parent().find('.input').css({"color":"inherit"});

                break;

        }


    }

};


var checkout = {

    addToCart: function(id, qty){
        
        //$.removeCookie('cart');
        var content = $('#' +  id).html();
        var cart = checkout.getCart();

        try{
            cart.cartitems["item-" + id].qty = parseInt(cart.cartitems["item-" + id].qty) + 1;
        }catch(err){
            console.log(err);
            cart.cartitems["item-" + id] = {qty:1,html:"<div>ITEM HTML</div>"};
        }

        checkout.setCart(cart);

        console.log(cart);
    },

    getCart: function(){

        if($.cookie('cart')){
            return JSON.parse($.cookie('cart'));
        }else{
            $.cookie('cart', JSON.stringify({cartitems:{}}));
            return JSON.parse($.cookie('cart'));
        }

    },

    setCart: function(cart){
        var newCart = JSON.stringify(cart);
        $.cookie('cart', newCart);
    }

}

var utils = {

    getParameterByName: function(name){

        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));

    },

    createTable: function(selector, objects, data, column){


        try{
            var table = "<table id='rand'>";

            var headFoot = "";

            for(var i = 0; i < column.length; i++){

                headFoot+="<th>" + column[i] + "</th>";

            }

            table+= "<thead><tr>" + headFoot + "</tr></thead>";
            table+= "<tfoot><tr>" + headFoot + "</tr></tfoot>";

            var body = "";

            for(var i = 0; i < data.length; i++){

                body+= "<tr>";

                for(var j = 0; j < objects.length; j++){


                    body+= "<td>" + data[i][j][objects[j]] + "</td>";

                }

                body+= "</tr>";
            }

            table += body;
            table += "</table>";
            $(selector).append(table);


            $("#rand").DataTable();
            return true;

        }catch(err){

            console.log(err);

        }



    }

}

function loadSection(seccion){

    ajaxData('secciones/' + seccion,'GET',{},false,function(e){
        $('#main-section-placeholder').html(e);
    })
    
}


function catalogoInit(){


    /*SCRIPT DE DIANA*/
    $("#tabs").tabs();
    $("#accordion").accordion();
    $("#accordionRes").accordion();
    // SLIDE NUM DE HABITACIONES
    $("#slider").slider();
    var handle = $("#custom-handle");
    $("#slider").slider({
        create: function () {
            handle.text($(this).slider("value"));
        },
        slide: function (event, ui) {
            handle.text(ui.value);
        }
    });
    // SLIDE NUM DE RESTAURANTE
    $("#sliderRes").slider();
    var handle = $("#custom-handle-res");
    $("#sliderRes").slider({
        create: function () {
            handle.text($(this).slider("value"));
        },
        slide: function (event, ui) {
            handle.text(ui.value);
        }
    });
    // SELECT NUM DE PRODUCTOS
    var spinner = $(".spinner").spinner();

    $("#disable").on("click", function () {
        if (spinner.spinner("option", "disabled")) {
            spinner.spinner("enable");
        } else {
            spinner.spinner("disable");
        }
    });
    $("#destroy").on("click", function () {
        if (spinner.spinner("instance")) {
            spinner.spinner("destroy");
        } else {
            spinner.spinner();
        }
    });

// SOLUCION
    $('#cap').mouseover(function () {
        $('#variedades').css('display', 'block');
    });
    $('#cap').mouseout(function () {
        $('#variedades').css('display', 'none');
    });
    $('#selectProd').click(function () {
        $('#solucionSelected').addClass('overlay');
    });
    $('#selectProdMilano').click(function () {
        $('#solucionSelectedMilano').addClass('overlay');

    });

}


