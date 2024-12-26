const urlParams = new URLSearchParams(window.location.search);
const score = urlParams.get('score');
const correctAnswer = decodeURIComponent(urlParams.get('correctAnswer'));

// Hiển thị điểm và đáp án mẫu
document.getElementById('score').innerText = `Your Score: ${score}`;

function goBack() {
    window.history.back();
}