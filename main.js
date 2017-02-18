$(document).ready(function(){
    $(".col4").text("3");
    $("#single-course-select").on("click", function(){
        $("~='col1 row1'").text("1");
        $(".col2, .col3").text("2");
    });
});
