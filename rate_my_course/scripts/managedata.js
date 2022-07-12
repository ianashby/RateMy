// take universityName, courseName, and courseCode from local storage and make them variables
var universityName = localStorage.getItem("universityName");
var courseName = localStorage.getItem("courseName");
var courseCode = localStorage.getItem("courseCode");

// make every word in the courseName and University name start with a capital letter
var words = courseName.split(" ");
for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}
courseName = words.join(" ");
words = universityName.split(" ");
for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}
universityName = words.join(" ");

// make the course code uppercase
courseCode = courseCode.toUpperCase();
// restore variables into local storage
localStorage.setItem("universityName", universityName);
localStorage.setItem("courseName", courseName);
localStorage.setItem("courseCode", courseCode);
