// managedata.js - manage data
// 1. searchClass: search for a class in the json file no input
//     - takes in a class code, name, and school from page
//     - if you have a match, it brings user to secondpage.html
//     - if you don't have a match, datapush
//     - then it brings user to add_course.html
// 2. addcourse: create a class in the json file
//     - datapush
//     - brings you to rate_course.html
// 3. rateClass: rate an existing class in the json file
//     - puts overall,workload,tudoravailability, and interesting data into the json file
//     - takes in a class code, name, and school from local storage and puts it into the json file
//     - clears local storage
//     - brings you to secondpage.html
// 4. datapush
//     - className schoolName, classCode, overall, workload, tudorAvailability, and interesting will be stored in local storage if available

function searchClass(){
    // clear the local storage
    localStorage.clear();
    // get the class code, name, and school from the page
    var classCode = document.getElementById("classCode").value;
    var className = document.getElementById("className").value;
    var school = document.getElementById("school").value;
    // search for the class
    for (var i = 0; i < jsonFile.length; i++) {
        if (jsonFile[i].classCode == classCode && jsonFile[i].className == className && jsonFile[i].school == school) {
            // store the class code, name, and school in local storage
            datapush()
            // if the class is found, bring user to secondpage.html
            window.location.href = "secondpage.html";
            
            break;
        // if the class is not found, bring user to add_course.html
        } else if (i == jsonFile.length - 1) {
            datapush()
            window.location.href = "add_course.html";
        }
    }
}


function addCourse(){
    datapush();
    // take user to rate_course.html
    window.location.href = "rate_course.html";
}

// rateCourse: rate an existing class in the json file
//    - takes in a class code, name, and school from createClass
//    - takes in overall,workload,tudoravailability, and interesting data from the user
//    - puts overall,workload,tudoravailability, and interesting data into the json file
//    - takes user to thankyou.html
rateClass = function (classCode, className, school) {
    // get the json file
    var jsonFile = JSON.parse(localStorage.getItem("jsonFile"));
    // search for the class
    for (var i = 0; i < jsonFile.length; i++) {
        if (jsonFile[i].classCode == classCode && jsonFile[i].className == className && jsonFile[i].school == school) {
            // if the class is found, get the user's ratings
            var overall = document.getElementById("overall").value;
            var workload = document.getElementById("workload").value;
            var tudorAvailability = document.getElementById("tudorAvailability").value;
            var interesting = document.getElementById("interesting").value;
            // put the user's ratings into the json file
            jsonFile[i].overall = overall;
            jsonFile[i].workload = workload;
            jsonFile[i].tudorAvailability = tudorAvailability;
            jsonFile[i].interesting = interesting;
            // put the user's ratings into the database
            localStorage.setItem("jsonFile", JSON.stringify(jsonFile));
            // take user to thankyou.html
            window.location.href = "thankyou.html";
            // break out of the loop
            break;
            // if the class is not found take user to create_class.html
        } else if (i == jsonFile.length - 1) {
            window.location.href = "add_course.html";
        }
    }
}












