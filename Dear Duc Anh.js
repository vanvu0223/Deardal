$(document).ready(function () {
    $(".neumayes").hide();

    $(".neumano").hide();
    $(".nut1").click(function (e) { 
        e.preventDefault();
        $(".neumayes").show();
    });
    $(".nut2").click(function (e) { 
        e.preventDefault();
        $(".neumano").show();
    });
});