function dashInit(){
alert();

    /*SCRIPT DE DIANA*/
    $("#tabs3").tabs();

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
function dashInit(){
        $("#tabsDash").tabs();
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
}