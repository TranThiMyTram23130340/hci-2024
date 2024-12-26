function showNotification(message, color) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.color = color;
    notification.style.display = 'block';

    // Ẩn thông báo sau 3 giây
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

document.getElementById('saveBtn').addEventListener('click', function () {
    // Hiển thị thông báo dưới dạng hộp thoại xác nhận (giống khi xóa khóa học)
    alert('Course has been saved successfully!');

    // Xóa dữ liệu trong form
    const form = document.getElementById('courseForm');
    form.reset();
});


document.getElementById('deleteBtn').addEventListener('click', function () {
    if (confirm('Are you sure you want to delete this course?')) {
        // Xóa toàn bộ dữ liệu trong form
        const form = document.getElementById('courseForm');
        form.reset();

        // Hiển thị thông báo đã xóa khóa học
        showNotification('All course data has been deleted!', 'red');
    }
});

function goBack() {
    window.history.back(); // Quay lại trang trước
}
