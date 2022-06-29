// managedata.js will be loaded on every page.
// it has several functions:
// 1. searchClass: search for a class in the json file
//     - takes in a class code, name, and school
//     - brings user to secondpage.html
//     - returns and displays the class information and  ratings
// 2. createClass: create a class in the json file
//     - takes in a class code, name, and school
//     - creates a new class in the json file
//     - pushes class code, name, and school t0 rateClass function
//     - brings you to rate_course.html
// 3. rateClass: rate an existing class in the json file
//     - takes in a class code, name, and school from createClass
//     - puts overall,workload,tudoravailability, and interesting data into the database
// 4. indexpush
//     - className is taken from the input field
//     - user is taken to add_course.html
//     - className is put into the input field



// searchClass: search for a class in the json file
searchClass = function (classCode, className, school) {
    // get the json file
    var jsonFile = JSON.parse(localStorage.getItem("jsonFile"));
    // search for the class
    for (var i = 0; i < jsonFile.length; i++) {
        if (jsonFile[i].classCode == classCode && jsonFile[i].className == className && jsonFile[i].school == school) {
            // if the class is found, bring user to secondpage.html
            window.location.href = "secondpage.html";
            // display the class information and ratings
            document.getElementById("classCode").innerHTML = jsonFile[i].classCode;
            document.getElementById("className").innerHTML = jsonFile[i].className;
            document.getElementById("school").innerHTML = jsonFile[i].school;
            document.getElementById("overall").innerHTML = jsonFile[i].overall;
            document.getElementById("workload").innerHTML = jsonFile[i].workload;
            document.getElementById("tudorAvailability").innerHTML = jsonFile[i].tudorAvailability;
            document.getElementById("interesting").innerHTML = jsonFile[i].interesting;
            // display the ratings
            document.getElementById("overallRating").innerHTML = jsonFile[i].overallRating;
            document.getElementById("workloadRating").innerHTML = jsonFile[i].workloadRating;
            document.getElementById("tudorAvailabilityRating").innerHTML = jsonFile[i].tudorAvailabilityRating;
            document.getElementById("interestingRating").innerHTML = jsonFile[i].interestingRating;
            // break out of the loop
            break;
            // if the class is not found, create a new class with blank ratings
        } else if (i == jsonFile.length - 1) {
            // create a new class
            createClass(classCode, className, school);
            break;
        }
    }
}

// createClass:if class doesnt exist in json file, create a class in the json file with blank ratings
//    - takes in a class code, name, and school
//    - creates a new class in the json file if there isnt one already
//    - if there is one already, redirect user to rate_course.html
//    - pushes class code, name, and school t0 rateClass function

function createClass(classCode, className, school) {
    // get the json file
    var jsonFile = JSON.parse(localStorage.getItem("jsonFile"));
    // search for the class
    for (var i = 0; i < jsonFile.length; i++) {
        if (jsonFile[i].classCode == classCode && jsonFile[i].className == className && jsonFile[i].school == school) {
            // if the class is found, bring user to rate_course.html
            window.location.href = "rate_course.html";
            // push class code, name, and school to rateClass function
            rateClass(classCode, className, school);
            break;
            // if the class is not found, create a new class with blank ratings
        } else if (i == jsonFile.length - 1) {
            // create a new class
            var newClass = {
                classCode: classCode,
                className: className,
                school: school,
                overall: "",
                workload: "",
                tudorAvailability: "",
                interesting: "",
                overallRating: "",
                workloadRating: "",
                tudorAvailabilityRating: "",
                interestingRating: ""
            }
            // push new class to json file
            jsonFile.push(newClass);
            // push class code, name, and school to rateClass function
            rateClass(classCode, className, school);
            // bring user to rate_course.html
            window.location.href = "rate_course.html";
            // display classCode, className, and school
            document.getElementById("classCode").innerHTML = classCode;
            document.getElementById("className").innerHTML = className;
            document.getElementById("school").innerHTML = school;
            break;
        }
    }
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












