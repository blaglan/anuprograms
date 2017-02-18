$(".col3").text( "The DOM is now loaded and can be manipulated.");
$(document).ready(function(){
    $(".col4").text( "The DOM is now loaded and can be manipulated.");
    $("#single-course-select").on("click", function(){
        $("[id='row1'][class='col1']").text("1");
        $(".col2").text("2");
    });
});
