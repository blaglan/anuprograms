function getProgram(courseText) {
    var programCode = "";
    var i = 0;
    
    while (courseText.charAt(i) != " ") {
      programCode += courseText.charAt(i);
      i++;
    }
    return programCode;
}

function readProgramCourses(programCode, numYears, numMajors, courseList) {
    var allText = "hi";
    var lines = [];
    
    var txtFile = new XMLHttpRequest();
    txtFile.onreadystatechange = function() {
        
        if (txtFile.readyState == 4) {  // document is ready to parse.
            if (txtFile.status == 200 || txtFile.status == 0) {  // file is found
                
                allText = txtFile.responseText; 
                lines = allText.split("\n");
                
            }
        }
    }
    txtFile.open("GET", "data/programs/" + programCode.toLowerCase() + ".txt", false);
    txtFile.send(null);
    
    numYears = lines[0]; // okay so this stuff won't actually change because it's byval lol
    numMajors = lines[1];
    lines.splice(0, 2);
    //return allText;
    courseList = lines;
}

window.onload = function() {
    var select = document.getElementById("course-select");
    var options = ["AENGI - Bachelor of Engineering (Honours)", "2", "3", "4", "5"];
    for (var i = 0; i < options.length; i++) {
        var opt = options[i];
        var element1 = document.createElement("option");
        element1.textContent = opt;
        element1.value = opt;
        select.appendChild(element1);
    }
    
    var cellArray = [[".row1.col1", ".row1.col2", ".row1.col3", ".row1.col4"], [".row2.col1", ".row2.col2", ".row2.col3", ".row2.col4"], [".row3.col1", ".row3.col2", ".row3.col3", ".row3.col4"], 
                     [".row4.col1", ".row4.col2", ".row4.col3", ".row4.col4"], [".row5.col1", ".row5.col2", ".row5.col3", ".row5.col4"], [".row6.col1", ".row6.col2", ".row6.col3", ".row6.col4"], 
                    [".row7.col1", ".row7.col2", ".row7.col3", ".row7.col4"], [".row8.col1", ".row8.col2", ".row8.col3", ".row8.col4"], [".row9.col1", ".row9.col2", ".row9.col3", ".row9.col4"], 
                    [".row10.col1", ".row10.col2", ".row10.col3", ".row10.col4"]];
    $(".col4").text("3");
    $("#single-course-select").on("click", function(){
        var courseText = document.getElementById("course-select").value;
        var programCode = getProgram(courseText);
        //$(".row1.col0").text(programCode);
        
        var numYears = 0;
        var numMajors = 0;
        var courseList = [];
        readProgramCourses(programCode, numYears, numMajors, courseList);
        //$(".row3.col0").text(courseList[0]);
        $(".row1.col0").text(numYears);
        $(".row3.col0").text(numMajors);
        
        if (numYears == 4) {
            $(".row9, .row10").hide();
        }
        var i, j = 0;
        for (i = 0; i < cellArray.length; i++) { 
            for (j = 0; j < cellArray[i].length; j++) { 
                $(cellArray[i][j]).text(courseList[i*4+j]);
            }
        }
    });
}
