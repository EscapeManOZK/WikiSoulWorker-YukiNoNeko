$(document).ready(function() {
    $("#sendIt").on("click", mail);
    var retour = $_GET("return");
    if (retour!=null) if (retour=="1")$("#retour").slideDown(300).delay(3000).slideUp(1000);
});
function mail() {
    var select = document.getElementById("Langue");
    var lang=select.options[select.selectedIndex].value;
    var inser = true;
    var m_mail = $("#mail").val();
    var titre =$("#title").val();
    var corp =$("#corp").val();
    var img="false";
    if (m_mail==""||!m_mail.includes("@")){
        $("#mail").addClass("Error");
        $("#mailError").slideDown(300).delay(3000).slideUp(1000);
        inser=false;
    }else {
        $("#mail").removeClass("Error");
    }
    if(titre==""){
        $("#title").addClass("Error");
        $("#TitreError").slideDown(300).delay(3000).slideUp(1000);
        inser=false;
    }else {
        $("#title").removeClass("Error");
    }
    if(corp==""){
        $("#corp").addClass("Error");
        $("#CorpError").slideDown(300).delay(3000).slideUp(1000);
        inser=false;
    }else {
        $("#corp").removeClass("Error");
    }
    if(corp.includes("img=\"")||corp.includes("jpg")||corp.includes("png")||corp.includes("gif")||corp.includes("image")){
        img="true";
        if (lang=="FR"){
            if (confirm("Avez vous les droits d'auteurs sur les images ?\nLes éditeurs du site ne serons tenu responsable si l'une de vos images porte atteint au droit d'auteur de celle-ci.")){
                $("#corp").removeClass("Error");
            }else {
                $("#corp").addClass("Error");
                $("#ImageError").slideDown(300).delay(3000).slideUp(1000);
                inser=false;
            }
        }else {
            if (confirm("Do you have copyright on the images?\nThe editors of the site will not be held responsible if one of your images bears the copyright of this one.")){
                $("#corp").removeClass("Error");
            }else {
                $("#corp").addClass("Error");
                $("#ImageError").slideDown(300).delay(3000).slideUp(1000);
                inser=false;
            }
        }
    }
    if (inser){
        window.location="Mail.php?lang=FR&List=off&mail="+m_mail+"&titre="+titre+"&corp="+corp+"&img="+img;
    }

}