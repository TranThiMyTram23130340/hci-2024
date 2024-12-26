function startExercise(language, exerciseId) {
    window.location.href = `coding.html?lang=${language}&id=${exerciseId}`; // Chuyển đến trang coding
}

function filterExercises() {
    const filter = document.getElementById('languageFilter').value;
    const exercises = document.querySelectorAll('.exercise');
    exercises.forEach(exercise => {
        if (filter === 'all' || exercise.getAttribute('data-language') === filter) {
            exercise.style.display = 'block'; // Hiện bài tập
        } else {
            exercise.style.display = 'none'; // Ẩn bài tập
        }
    });
}

function goBack() {
    window.history.back(); // Quay lại trang trước
}
