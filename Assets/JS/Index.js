$(document).ready(function() {
    $.ajax({
        url: "/Assets/PHP/Index.php?lang="+lang, success: function (result) {
            $("#content").html(result);
        }
    });
}