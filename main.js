$(document).ready(function(){
    $(".col4").text("3");
    $("#single-course-select").on("click", function(){
        $(".col1.row1").text("1");
        $(".col2, .col3").text("2");
        $(".row9, .row10").hide();
    });
});

window.onload = function() {
    var select = document.getElementById("course-select");
    var options = ["AENGI - Bachelor of Engineering (Honours)", "2", "3", "4", "5"];
    for (var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
}
