function click() {
    var id=parseInt(this.id.split("article")[1]);
    $("#content"+id).slideToggle("ease-in-out");
    $("#ArticleTitle"+id+" p.fleche span").toggleClass("flip");
}

function clickImage() {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById("ImgMax");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

$(document).ready(function() {
    var tail=$("#content").height()/2-$("#Wait").height();
    $("#Wait").css("margin-top",tail);
    var taille = $("#content").width()-22;
    $.ajax({
        url: "/Assets/PHP/Index/Index.php?mobile="+taille, success: function (result) {
            setTimeout(function(){
                $("#content").html(result);
                GestionHauteur();
                affiche();
                if (!mobile){
                    $(".fa-sith").addClass("rotating");
                    for(var i=0;i<$(".NoBanner").length;i++){
                        $("#img"+i).on("click",clickImage)
                    }
                    var span = document.getElementsByClassName("close")[0];
                    span.onclick = function() {
                        var modal = document.getElementById('myModal');
                        modal.style.display = "none";
                    }
                    $('#myModal').on("click",function () {
                        var modal = document.getElementById('myModal');
                        modal.style.display = "none";
                    });
                }else{
                    $(".content").css("display","none");
                    $(".ArticleTitle").append("<p class='fleche'><span class=\"fas fa-angle-down\"></span></p>");
                    var nbArticle = $(".ContentArticle").length;
                    for (var i=1;i<=nbArticle;i++){
                        $("#article"+i).on("click", click);
                    }
                }
            },1500);
        }
    });

});