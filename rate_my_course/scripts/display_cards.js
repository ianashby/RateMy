// JSON File
const requestURL =
  "https://raw.githubusercontent.com/ianashby/RateMy/main/rate_my_course/rateMyClassData.json";

// Query All Span ID's in the DOM
const universityName = document.getElementById("university-name");
const courseCode = document.getElementById("course-code");
const courseName = document.getElementById("course-name");
const cardSection = document.querySelector(".ratings-cards");

async function getData(requestURL) {
  const response = await fetch(requestURL);
  if (response.ok) {
    const data = await response.json();

    const university = data["university"];
    // console.log(university);

    // add an if statement that only matches the university name and course code
    // if the university name and course code match the JSON data, then display the data

    university.forEach((university) => {
      if (university.name === universityName) {
        university.courses.forEach((course) => {
          if (course.code == courseCode) {
            course.rating.forEach((rating) => {
              displayCards(rating);
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

  // Create overall rating h3.
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
