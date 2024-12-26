function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.querySelector(`#${tabId}`).classList.add('active');
    
    document.querySelectorAll('.tab-link').forEach(link => link.classList.remove('active'));
    document.querySelector(`a[onclick="showTab('${tabId}')"]`).classList.add('active');
}
function goBack() {
    window.history.back(); // Quay lại trang trước
}
