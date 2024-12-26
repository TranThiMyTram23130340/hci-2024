// Lấy tham số URL để xác định ngôn ngữ và ID bài tập
const urlParams = new URLSearchParams(window.location.search);
const language = urlParams.get('lang');
const exerciseId = urlParams.get('id');

// Khai báo các bài tập theo ngôn ngữ và ID
let title = '';
let description = '';

if (language === 'C' && exerciseId === '1') {
    title = 'Exercise 1: Examining Prime Numbers';
    description = 'Write a program to check if a number is a prime number.';
} else if (language === 'C' && exerciseId === '2') {
    title = 'Exercise 2: Factorial calculation';
    description = 'Write a program to calculate the factorials of a positive integer.';
} else if (language === 'Python' && exerciseId === '1') {
    title = 'Exercise 1: Syntax Basics';
    description = 'Writing a program that displays a simple greeting in Python.';
} else if (language === 'Python' && exerciseId === '2') {
    title = 'Exercise 2: Counting the number of words in a sequence';
    description = 'Write a program that counts words in a keypad word input sequence.';
} else if (language === 'Java' && exerciseId === '1') {
    title = 'Exercise 1: Sequence calculation';
    description = 'Write a program that calculates the length of a string.';
} else if (language === 'Java' && exerciseId === '2') {
    title = 'Exercise 2: Check for symmetrical numbers';
    description = 'Write a program to check if a number is a symmetrical number.';
}

// Hiển thị tiêu đề và mô tả bài tập lên giao diện
document.getElementById('exerciseTitle').innerText = title;
document.getElementById('exerciseDescription').innerText = description;

// Giả lập chức năng chạy mã
function runCode() {
    document.getElementById('status').innerText = 'Đang chạy...';
    // Mô phỏng việc chạy mã và hiển thị kết quả
    setTimeout(() => {
        document.getElementById('status').innerText = 'Thành công';
        document.getElementById('testCases').innerHTML = `
            <p>Test Case 1: Passed</p>
            <p>Test Case 2: Passed</p>
        `;
    }, 1000);
}

// Đáp án mẫu cho từng bài tập
const correctAnswers = {
'C_1': `
int primeCheck(int n) {
if (n <= 1) return 0;
for (int i = 2; i < n; i++) {
    if (n % i == 0) return 0;
}
return 1;
}`,
'C_2': `
int factorial(int n) {
if (n == 0 || n == 1) return 1;
return n * factorial(n - 1);
}`,
'Python_1': `
print("Hello, World!")`,
'Python_2': `
def count_words(s):
words = s.split()
return len(words)`,
'Java_1': `
public class Main {
public static void main(String[] args) {
    String str = "Hello";
    System.out.println(str.length());
}
}`,
'Java_2': `
public class Main {
public static boolean isPalindrome(int num) {
    int original = num, reversed = 0;
    while (num != 0) {
        int digit = num % 10;
        reversed = reversed * 10 + digit;
        num /= 10;
    }
    return original == reversed;
}
}`
};

function submitCode() {
const code = document.getElementById('codeEditor').value.trim(); // Lấy mã người dùng nhập
let score = 0; // Điểm ban đầu

// Lấy mã bài tập hiện tại dựa trên ngôn ngữ và ID
const answerKey = `${language}_${exerciseId}`;
const correctAnswer = correctAnswers[answerKey].trim();

// So sánh mã người dùng với đáp án mẫu
if (code === correctAnswer) {
score = 100; // Điểm tối đa nếu khớp hoàn toàn
} else {
// So sánh dựa trên độ tương đồng (ví dụ: kiểm tra xem mã có chứa phần chính xác hay không)
const similarityScore = compareCodeSimilarity(code, correctAnswer);
score = Math.floor(similarityScore * 100); // Tính điểm dựa trên độ tương đồng
}

window.location.href= `score.html?score=${score}&correctAnswer=${encodeURIComponent(correctAnswers)}`;
}

// Hàm so sánh độ tương đồng giữa hai đoạn mã (dựa trên phần khớp)
function compareCodeSimilarity(userCode, correctCode) {
let matches = 0;
const userLines = userCode.split('\n').map(line => line.trim());
const correctLines = correctCode.split('\n').map(line => line.trim());

// Tính phần trăm số dòng khớp nhau
userLines.forEach((line, index) => {
if (correctLines[index] && line === correctLines[index]) {
    matches++;
}
});

return matches / correctLines.length; // Độ tương đồng tính bằng số dòng khớp
}




// Xóa nội dung mã trong editor
function clearCode() {
    document.getElementById('codeEditor').value = '';
}

function  goBack(){
    window.history.back();
}
