// ===================================
// BÀI B3 — Mini Game: Đoán số
// guess.js — Logic game
// ===================================

// Biến lưu trạng thái game
let secretNumber = 0;       // Số bí mật cần đoán
let soLanDoan = 0;          // Đếm số lần đã đoán
const MAX_LUOT = 7;         // Giới hạn 7 lần đoán
let daDoanRoi = [];         // Lưu các số đã đoán để cảnh báo trùng
let gameOver = false;       // Trạng thái game

// Tạo số ngẫu nhiên 1-100
function batDauGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    soLanDoan = 0;
    daDoanRoi = [];
    gameOver = false;

    // Reset giao diện
    document.getElementById("result").textContent = "";
    document.getElementById("hint").textContent = "";
    document.getElementById("attempts").textContent = "Số lần đã đoán: 0 / 7";
    document.getElementById("input-area").style.display = "block";
    document.getElementById("inputSo").value = "";
    document.getElementById("inputSo").focus();

    // Ẩn nút chơi lại, hiện khu vực nhập
    document.getElementById("btn-choi-lai").style.display = "none";

    console.log("DEBUG — Số bí mật:", secretNumber); // Xoá dòng này trước khi nộp!
}

// Xử lý lần đoán của người chơi
function doanSo() {
    if (gameOver) return;

    const inputEl = document.getElementById("inputSo");
    const inputRaw = inputEl.value.trim();

    // Validate: phải là số
    const soNhap = Number(inputRaw);
    if (inputRaw === "" || isNaN(soNhap) || !Number.isInteger(soNhap)) {
        document.getElementById("hint").textContent = "⚠️ Vui lòng nhập một số nguyên!";
        document.getElementById("hint").style.color = "#f59e0b";
        return;
    }

    // Validate: phải trong khoảng 1-100
    if (soNhap < 1 || soNhap > 100) {
        document.getElementById("hint").textContent = "⚠️ Số phải nằm trong khoảng 1 đến 100!";
        document.getElementById("hint").style.color = "#f59e0b";
        return;
    }

    // Kiểm tra đã đoán số này chưa
    if (daDoanRoi.includes(soNhap)) {
        document.getElementById("hint").textContent = `⚠️ Bạn đã đoán số ${soNhap} rồi! Thử số khác đi.`;
        document.getElementById("hint").style.color = "#f59e0b";
        return;
    }

    // Lưu số vừa đoán
    daDoanRoi.push(soNhap);
    soLanDoan++;
    document.getElementById("attempts").textContent = `Số lần đã đoán: ${soLanDoan} / ${MAX_LUOT}`;
    inputEl.value = "";

    const resultEl = document.getElementById("result");
    const hintEl = document.getElementById("hint");

    // So sánh kết quả
    if (soNhap === secretNumber) {
        // THẮNG!
        resultEl.textContent = `🎉 Đúng rồi! Số bí mật là ${secretNumber}`;
        resultEl.style.color = "#10b981";
        hintEl.textContent = `Bạn đoán đúng sau ${soLanDoan} lần! Xuất sắc!`;
        hintEl.style.color = "#10b981";
        ketThucGame();
    } else if (soLanDoan >= MAX_LUOT) {
        // HẾT LƯỢT — THUA
        resultEl.textContent = `😢 Hết lượt! Số bí mật là ${secretNumber}`;
        resultEl.style.color = "#ef4444";
        hintEl.textContent = "Chúc may mắn lần sau!";
        hintEl.style.color = "#ef4444";
        ketThucGame();
    } else {
        // Gợi ý cao hơn / thấp hơn
        const luotConLai = MAX_LUOT - soLanDoan;
        if (soNhap < secretNumber) {
            hintEl.textContent = `📈 Cao hơn! Còn ${luotConLai} lượt.`;
            hintEl.style.color = "#3b82f6";
        } else {
            hintEl.textContent = `📉 Thấp hơn! Còn ${luotConLai} lượt.`;
            hintEl.style.color = "#3b82f6";
        }
        resultEl.textContent = `Các số đã đoán: ${daDoanRoi.join(", ")}`;
        resultEl.style.color = "#6b7280";
    }
}

function ketThucGame() {
    gameOver = true;
    document.getElementById("input-area").style.display = "none";
    document.getElementById("btn-choi-lai").style.display = "inline-block";
}

// Bấm Enter cũng đoán được
function xuLyEnter(event) {
    if (event.key === "Enter") {
        doanSo();
    }
}
