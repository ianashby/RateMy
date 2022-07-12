// JSON File
const requestURL = "https://raw.githubusercontent.com/ianashby/RateMy/main/rate_my_course/BYUData.json";

// Get items from local storage.
var universityName = localStorage.getItem("universityName");
var courseCode = localStorage.getItem("courseCode");
var courseName = localStorage.getItem("courseName");

// Fill DOM with right data from local storage.
document.querySelector('#university-name').textContent = universityName;
document.querySelector('#course-code').textContent = courseCode;
document.querySelector('#course-name').textContent = courseName;

// Get the data from the JSON file.
async function getData(requestURL) {
  const response = await fetch(requestURL);
  if (response.ok) {
    const data = await response.json();

    const university = data["University"];

    // Loop through each university. 
    university.forEach((university) => {

        // If the university name matches the search query, then loop through all courses.
        if (university.name === universityName) {
            university.courses.forEach((course) => {

            // If the course code matches the search query, then loop through all ratings.
            if (course.code == courseCode) {
                course.rating.forEach((rating) => {
                    displayCards(rating);
                    // get average of all ratings
                    let average = 0;
                    for (let i = 0; i < course.rating.length; i++) {
                        average += parseFloat(course.rating[i].overall);
                    }
                    average = average / course.rating.length;
                    document.querySelector('#average-rating').textContent = `Average Rating: ${average.toFixed(1)} / 5`;
            });
          }
        });
      }
    });
  }
}

getData(requestURL);

function displayCards(rating) {
  // Create the Card div.
  let card = document.createElement("div");
  card.className = "card";

  // Overall rating.
  let overallRating = document.createElement("h3");
  overallRating.textContent = `Overall Rating: ${rating.overall} / 5`;
  card.appendChild(overallRating);

  // Workload
  let workload = document.createElement("h3");
  workload.textContent = `Workload: ${rating.workload} / 5`;
  card.appendChild(workload);

  // Tudor Avalibility
  let tudorAvailability = document.createElement("h3");
  tudorAvailability.textContent = `Tudor Availability: ${rating.tudorAvailability}`;
  card.appendChild(tudorAvailability);

  // Interest Level
  let interestLevel = document.createElement("h3");
  interestLevel.textContent = `Interest Level: ${rating.interesting}`;
  card.appendChild(interestLevel);

  // Comments
  let comments = document.createElement("p");
  comments.textContent = rating.comment;
  card.appendChild(comments);

  // Append card to the DOM.
  document.querySelector(".ratings-cards").appendChild(card);
}
