$(document).ready(function(){
    $(".col4").text("3");
    $("#single-course-select").on("click", function(){
        $("[.row1'][.col1]").text("1");
        $(".col2, .col3").text("2");
    });
});
