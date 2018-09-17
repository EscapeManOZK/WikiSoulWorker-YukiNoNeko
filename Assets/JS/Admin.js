$("#loading").css("display","block");
/*$.ajax({
    url: "/Assets/PHP/IP.php", success: function (result) {
        if(result!=""){
            $("#content").html(result);
            GestionHauteur();
        }
    }
});*/
$.ajax({
    url: "/Assets/PHP/Admin/IsLogin.php", success: function (result) {
        if (result=="true"){
            $(".login").css("display","none");
            $.ajax({
                url: "/Assets/PHP/Admin/TableauMail.php",
                success: function(result) {
                    $(".main").append(result);
                    $(".step.main").append("<p><a class=\"button hvr-icon-spin\" id='load' onclick=\"reload()\" href='#deco'>Rechargé le tableau <i class='fa fa-refresh hvr-icon'></i></a><a class=\"button\" id='deco' onclick=\"deconnexion()\" href='#deco'>Déconnexion</a></p>");
                    GestionHauteur();
                    $("#loading").css("display","none");
                    display=true;
                }
            });
        }else {
            $(".main").css("display","none");
        }
    }
});
function login() {
    var login="true";
    var id=$("#ID").val();
    var mdp=$("#MDP").val();
    $("#MDPIDError").slideUp(300);
    if (id==""){
        login="false";
        $("#IDError").slideDown(300);
        $("#ID").addClass("Error");
    }else {
        $("#IDError").slideUp(300);
        $("#ID").removeClass("Error");
    }
    if (mdp==""){
        login="false";
        $("#MDPError").slideDown(300);
        $("#MDP").addClass("Error");
    }else {
        $("#MDPError").slideUp(300);
        $("#MDP").removeClass("Error");
    }
    if (login=="true"){
        $("#loading").css("display","block");
        var donne="ID="+id+"&mdp="+mdp;
        $.ajax({
            type : "POST",
            url: "/Assets/PHP/Admin/GestionLogin.php",
            data: donne,
            success: function (result) {
                if (result=="success"){
                    $.ajax({
                        url: "/Assets/PHP/Admin/TableauMail.php",
                        success: function(result) {
                            $(".step.main").append(result);
                            $(".step.main").append("<p><a class=\"button hvr-icon-spin\" id='load' onclick=\"reload()\" href='#deco'>Rechargé le tableau <i class='fa fa-refresh hvr-icon'></i></a><a class=\"button\" id='deco' onclick=\"deconnexion()\" href='#deco'>Déconnexion</a></p>");
                            $(".step.main").css("display","block");
                            $(".step.login").css("display", "none");
                            $("#loading").css("display", "none");
                            GestionHauteur();
                        }
                    });
                }else{
                    $("#loading").css("display","none");
                    switch (result){
                        case "error1":
                            $("#ID").addClass("Error");
                            $("#MDP").addClass("Error");
                            $("#MDPIDError").slideDown(300);
                            break;
                        case "error2":
                            $("#ID").addClass("Error");
                            $("#MDP").addClass("Error");
                            $("#MDPIDError").slideDown(300);
                            break;
                        case "error3":
                            $("#IDError").slideDown(300);
                            $("#ID").addClass("Error");
                            break;
                        case "error4":
                            $("#MDPError").slideDown(300);
                            $("#MDP").addClass("Error");
                            break;
                        default:
                            break;
                    }
                }
            }
        });
    }
    GestionHauteur();
}

function deconnexion() {
    $("#loading").css("display","block");
    $.ajax({
        url: "/Assets/PHP/Admin/Deconnexion.php",
        success: function() {
            $(".step.main table").remove();
            $(".step.main p").remove();
            $(".step.main").css("display","none");
            $(".step.login").css("display","block");
            $("#loading").css("display", "none");
            GestionHauteur();
        }
    });
}

function deleteHim(id){
    $("#loading").css("display","block");
    $.ajax({
        type : "GET",
        url: "/Assets/PHP/Admin/Delete.php",
        data : "id="+id,
        success: function (result) {
            reload();
        }
    });
}

function infos(id){
    $("#loading").css("display","block");
    $.ajax({
        type : "GET",
        url: "/Assets/PHP/Admin/mail.php",
        data : "id="+id,
        success: function (result) {
            if (result!="") {
                $(".step.main table").remove();
                $(".step.main p").remove();
                $(".step.main").append(result);
                $(".step.main").css("display", "block");
                GestionHauteur();
            }
            $("#loading").css("display", "none");
        }
    });
}

$(document).ready(function() {
    $("#sendIt").on("click", login);

});

function reload() {
    $("#loading").css("display","block");
    $.ajax({
        url: "/Assets/PHP/Admin/TableauMail.php",
        success: function (result) {
            $(".step.main table").remove();
            $(".step.main p").remove();
            $(".step.main").append(result);
            $(".step.main").append("<p><a class=\"button hvr-icon-spin\" id='load' onclick=\"reload()\" href='#deco'>Rechargé le tableau <i class='fa fa-refresh hvr-icon'></i></a><a class=\"button\" id='deco' onclick=\"deconnexion()\" href='#deco'>Déconnexion</a></p>");
            $(".step.main").css("display", "block");
            GestionHauteur();
            $("#loading").css("display","none");
        }

    });
}