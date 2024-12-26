
const courseCards = document.querySelectorAll('.course-card');
const courseDescription = document.getElementById('courseDescription');
const infoContainer = document.querySelector('.info');

courseCards.forEach(card => {
card.addEventListener('click', (e) => {
// Get the description text from the data-description attribute
let descriptionText = card.getAttribute('data-description');

// Check if descriptionText is null or empty, and replace it with a default message if needed
if (!descriptionText || descriptionText.toLowerCase() === 'null') {
 descriptionText = "No description available for this course.";
}

// Show the description
courseDescription.style.display = 'block';
courseDescription.style.left = `${e.pageX}px`;
courseDescription.style.top = `${e.pageY}px`;

// Update the infoContainer with the description and other course details
infoContainer.innerHTML = `
 
 <p>Updated 12-4-2024</p>
 <p>Totals all levels subtitles</p>
 <p>10 Hours of React just added. Become a Developer With ONE course - HTML, CSS,....</p>
 <p>✔️ The ins and outs of HTML5, CSS3, and Modern JS for 2021</p>
 <p>✔️ Make REAL web applications using cutting-edge technologies</p>
 <p>✔️ Create responsive, accessible, and beautiful layouts</p>
 <div class="button">Add to cart</div>
`;
});
});

document.addEventListener("DOMContentLoaded", function () {
// Loop through all .course-author and .course-price elements
document.querySelectorAll(".course-author, .course-price").forEach(function (element) {
if (!element.textContent.trim() || element.textContent.trim().toLowerCase() === "null") {
 element.style.display = "none"; // Hide element if content is empty or 'null'
}
});
});

function goBack() {
    window.history.back(); // Quay lại trang trước
}

