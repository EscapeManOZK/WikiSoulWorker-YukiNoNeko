$(document).ready(function() {
    $.ajax({
        url: "/Assets/PHP/Index.php", success: function (result) {
            $("#content").html(result);
            GestionHauteur();
        }
    });
});