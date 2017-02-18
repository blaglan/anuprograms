/*$(document).ready(function(){
    
});*/

/*function getProgram(courseText) {
    var programCode = "";
    var i = 0;
    
    while (courseText.charAt(i) != " ") {
      programCode += courseText.charAt(i);
      i++;
    }
    return programCode;
}*/

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
    
    var cellArray = [[".row1.col1", ".row1.col2", ".row1.col3", ".row1.col4"], [".row2.col1", ".row2.col2", ".row2.col3", ".row2.col4"]];
    $(".col4").text("3");
    $("#single-course-select").on("click", function(){
        var courseText = document.getElementByID("course-select").text;
        //var programCode = getProgram(courseText);
        //var programCode = "ASD";
        //$(".row1.col0").text(programCode);
        $(".row1.col0").text(courseText);
        
        //$(".row1.col1").text("1");
        //$(".col2, .col3").text("2");
        $(".row9, .row10").hide();
        var i, j = 0;
        for (i = 0; i < cellArray.length; i++) { 
            for (j = 0; j < cellArray[i].length; j++) { 
                $(cellArray[i][j]).text(cellArray[i][j]);
            }
        }
    });
}
