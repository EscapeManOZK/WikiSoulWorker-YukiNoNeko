$(document).ready(function() {
    var tail=$("#content").height()/2-$("#Wait").height();
    $("#Wait").css("margin-top",tail);
    $.ajax({
        url: "/Assets/PHP/Index.php", success: function (result) {
            setTimeout(function(){
                $("#content").html(result);
                GestionHauteur();
                for(var i=0;i<$(".NoBanner").length();i++){
                    if ($(".NoBanner")[i].width()>600)$(".NoBanner")[i].css("width","600px");
                }
            },1500);
        }
    });

});