function affiche() {
    var select = document.getElementById("Langue");
    if (select.options[select.selectedIndex].value === "FR"){
        $(".textFR").removeClass("NotLangue");
        $(".textEN").addClass("NotLangue");
    }else {
        $(".textEN").removeClass("NotLangue");
        $(".textFR").addClass("NotLangue");
    }
}
function formatState (state) {
    if (!state.id) {
        return state.text;
    }
    var baseUrl = "../images";
    var $state = $(
        '<span><img src="' + baseUrl + '/' + state.element.value + 'Logo.png" class="img-flag" /> ' + state.text + '</span>'
    );
    return $state;
};

$("#Langue").select2({
    templateSelection: formatState,
    theme: "classic"
});

