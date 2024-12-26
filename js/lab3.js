function showContent(subject) {
    // Ẩn tất cả các môn học
    var sections = document.querySelectorAll('.content > .section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Hiện môn học được chọn
    var selectedSection = document.getElementById(subject);
    selectedSection.classList.add('active');
}

function openSection(evt, sectionName) {
    // Đóng tất cả các section hiện tại
    var currentSections = document.querySelectorAll('.content > .section.active .section');
    currentSections.forEach(section => {
        section.classList.remove('active');
    });

    // Hiện phần được chọn
    var selectedSection = document.getElementById(sectionName);
    selectedSection.classList.add('active');

    // Đánh dấu tab đang hoạt động
    var tablinks = document.querySelectorAll('.tabs button');
    tablinks.forEach(tab => tab.classList.remove('active'));
    evt.currentTarget.classList.add("active");
}

function showPDF(pdfUrl) {
    var viewer = document.getElementById('pdf-viewer');
    viewer.src = pdfUrl;
    viewer.style.display = "block"; // Hiện iframe khi có PDF được chọn
}

function goBack() {
    window.history.back(); // Quay lại trang trước
}
