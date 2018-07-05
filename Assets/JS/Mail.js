/*$.ajax({
    url: "/Assets/PHP/IP.php", success: function (result) {
        if(result!=""){
            $("#content").html(result);
            GestionHauteur();
        }
    }
});*/
$(document).ready(function() {
    $("#sendIt").on("click", mail);
    $.each($('textarea'), function() {
        var offset = this.offsetHeight - this.clientHeight;

        var resizeTextarea = function (e) {
            $(e).css('height', 'auto').css('height', e.scrollHeight + offset);
        };
        $(this).on('keyup input', function () {
            resizeTextarea(this);
        });
        resizeTextarea(this);
    });
});


function mail() {
    var select = document.getElementById("Langue");
    var lang=select.options[select.selectedIndex].value;
    var inser = true;
    var m_mail = $("#mail").val();
    var titre =$("#title").val();
    var corp =$("#corp").val();
    var img="false";
    var expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

    if (m_mail==""||!expressionReguliere.test(m_mail)) {
            $("#mail").addClass("Error");
            $("#mailError").slideDown(300);
            inser = false;
    }else {
        $("#mail").removeClass("Error");
        $("#mailError").slideUp(300);
    }
    if(titre==""){
        $("#title").addClass("Error");
        $("#TitreError").slideDown(300);
        inser=false;
    }else {
        $("#title").removeClass("Error");
        $("#TitreError").slideUp(300);
    }
    if(corp==""){
        $("#corp").addClass("Error");
        $("#CorpError").slideDown(300);
        inser=false;
    }else {
        $("#corp").removeClass("Error");
        $("#CorpError").slideUp(300);
    }
    if(corp.includes("img=\"")||corp.includes("jpg")||corp.includes("png")||corp.includes("gif")||corp.includes("image")){
        img="true";
        if (lang=="FR"){
            if (confirm("Avez vous les droits d'auteurs sur les images ?\nLes éditeurs du site ne serons tenu responsable si l'une de vos images porte atteint au droit d'auteur de celle-ci.")){
                $("#corp").removeClass("Error");
                $("#ImageError").slideUp(300);
            }else {
                $("#corp").addClass("Error");
                $("#ImageError").slideDown(300);
                inser=false;
            }
        }else {
            if (confirm("Do you have copyright on the images?\nThe editors of the site will not be held responsible if one of your images bears the copyright of this one.")){
                $("#corp").removeClass("Error");
                $("#ImageError").slideUp(300);
            }else {
                $("#corp").addClass("Error");
                $("#ImageError").slideDown(300);
                inser=false;

            }
        }
    }
    $("#content").css("height", "auto");
    if (inser){
        $("#loading").css("display","block");
        var donne="mail="+m_mail+"&titre="+titre+"&corp="+corp+"&lang="+lang+"&img="+img;
        $.ajax({
            type: "POST",
            url: '/Assets/PHP/Mail/EnvoieMailpersonne.php',
            data: donne,
            success: function (result) {
                if(result)
                    $.ajax({
                        type: "POST",
                        url:'/Assets/PHP/Mail/StockageMailBD.php',
                        data: donne,
                        success: function () {
                            $.ajax({
                                type: "POST",
                                url: '/Assets/PHP/Mail/EnvoieMailperso.php',
                                data: donne,
                                success: function () {
                                    $("#retour").slideDown(300).delay(4000).slideUp(300);
                                    var i=0;
                                    document.getElementById("mail").value="";
                                    document.getElementById("title").value="";
                                    document.getElementById("corp").value="";
                                    /*while ( document.getElementById("mail").value!=""||document.getElementById("title").value!=""||document.getElementById("corp").value!=""){
                                        i++;
                                        if( document.getElementById("mail").value!=""){
                                            document.getElementById("mail").value=document.getElementById("mail").value.substr(i).delay(1000);
                                        }
                                        if( document.getElementById("title").value!=""){
                                            document.getElementById("title").value=document.getElementById("title").value.substr(i);
                                        }
                                        if(document.getElementById("corp").value!=""){
                                            document.getElementById("corp").value=document.getElementById("corp").value.substr(i);
                                        }
                                    }*/
                                    $("#loading").css("display","none");
                                }
                            });
                        }
                    });
            }
        });

        GestionHauteur();
    }
}