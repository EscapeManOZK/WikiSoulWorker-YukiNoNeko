$(document).ready(function() {
    $("#sendIt").on("click", mail);
});
function mail() {
    var m_mail = $("#mail").val();
    var titre =$("#title").val();
    var corp =$("#corp").val();
    // FAUX  GÉRER LES CHAMPS
    if(corp.includes("img=\"")||corp.includes("jpg")||corp.includes("png")||corp.includes("gif")){
        if (lang=="FR"){
            if (confirm("Avez vous les droits d'auteurs sur les images ?\nLes éditeurs du site ne serons tenu responsable si l'une de vos images porte atteint au droit d'auteur de celle-ci.")){
                window.location="Mail.php?lang=FR&List=off&mail="+m_mail+"&titre="+titre+"&corp="+corp;
            }else {
                $("#Error").html("Veillez insérez des images correct");
            }
        }else {
            if (confirm("Avez vous les droits d'auteurs sur les images ?")){
                window.location="Mail.php?lang=FR&List=off&mail="+m_mail+"&titre="+titre+"&corp="+corp;
            }else {
                $("#Error").html("Veillez insérez des images correct");
            }
        }
    }else {
        window.location="Mail.php?lang=FR&List=off&mail="+m_mail+"&titre="+titre+"&corp="+corp;
    }

}