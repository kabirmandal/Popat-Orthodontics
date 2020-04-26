$(document).ready(function(){
    var OutOfPI = $("#OutOfPI").val(2780);
    $("input").on("keyup blur change", function () {
        var casefee = $("#casefee").val();
        var Insurance = $("#Insurance").val();
        var OutOfPI = $("#OutOfPI").val(2780);

        var UB = $("#UB").val();
        var dd = 0;
        $.each($("input[name='optional']:checked"), function() {
            dd =parseFloat(dd)+parseFloat($(this).val());          
        });
        var oopi = parseFloat(OutOfPI);
        var dd = parseFloat(dd);
        var dds = dd+oopi;
        $("#OutOfPI").val(oopi);
        
    });
});