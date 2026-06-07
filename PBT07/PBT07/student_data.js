
const students = [
    { name: "An",    math: 8,  physics: 7, cs: 9, gender: "M" },
    { name: "Bình",  math: 6,  physics: 9, cs: 7, gender: "F" },
    { name: "Chi",   math: 9,  physics: 6, cs: 8, gender: "F" },
    { name: "Dũng",  math: 5,  physics: 5, cs: 6, gender: "M" },
    { name: "Em",    math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3,  physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7,  physics: 7, cs: 7, gender: "F" },
    { name: "Huy",   math: 4,  physics: 6, cs: 3, gender: "M" },
];

// ================================================
// BƯỚC 1: Tính điểm trung bình và xếp loại
// ================================================

// Hàm tính điểm TB theo công thức: math×0.4 + physics×0.3 + cs×0.3
function tinhTB(sv) {
    return sv.math * 0.4 + sv.physics * 0.3 + sv.cs * 0.3;
}

// Hàm xếp loại dựa vào điểm TB
function xepLoai(tb) {
    if (tb >= 8.0) return "Giỏi";
    if (tb >= 6.5) return "Khá";
    if (tb >= 5.0) return "Trung bình";
    return "Yếu";
}

// Gán điểm TB và xếp loại cho từng sinh viên
for (let i = 0; i < students.length; i++) {
    let tb = tinhTB(students[i]);
    students[i].tb = Math.round(tb * 10) / 10; // Làm tròn 1 chữ số thập phân
    students[i].loai = xepLoai(students[i].tb);
}

// ================================================
// BƯỚC 2: In bảng kết quả
// ================================================

console.log("===== BÀI B2: BẢNG KẾT QUẢ SINH VIÊN =====\n");
console.log("| STT | Tên    | TB   | Xếp loại    |");
console.log("|-----|--------|------|-------------|");

for (let i = 0; i < students.length; i++) {
    let sv = students[i];
    // Dùng padEnd để căn chỉnh cột cho đẹp
    let stt  = String(i + 1).padEnd(3);
    let ten  = sv.name.padEnd(6);
    let tb   = String(sv.tb).padEnd(4);
    let loai = sv.loai.padEnd(11);
    console.log(`| ${stt} | ${ten} | ${tb} | ${loai} |`);
}

// ================================================
// BƯỚC 3: Đếm số sinh viên mỗi xếp loại
// ================================================

let demGioi = 0, demKha = 0, demTB = 0, demYeu = 0;

for (let i = 0; i < students.length; i++) {
    if (students[i].loai === "Giỏi")        demGioi++;
    else if (students[i].loai === "Khá")     demKha++;
    else if (students[i].loai === "Trung bình") demTB++;
    else                                      demYeu++;
}

console.log("\n===== THỐNG KÊ XẾP LOẠI =====");
console.log(`Giỏi:       ${demGioi} sinh viên`);
console.log(`Khá:        ${demKha} sinh viên`);
console.log(`Trung bình: ${demTB} sinh viên`);
console.log(`Yếu:        ${demYeu} sinh viên`);

// ================================================
// BƯỚC 4: Tìm điểm TB cao nhất và thấp nhất
// ================================================

let svCaoNhat = students[0];
let svThapNhat = students[0];

for (let i = 1; i < students.length; i++) {
    if (students[i].tb > svCaoNhat.tb) {
        svCaoNhat = students[i];
    }
    if (students[i].tb < svThapNhat.tb) {
        svThapNhat = students[i];
    }
}

console.log("\n===== ĐIỂM CAO NHẤT / THẤP NHẤT =====");
console.log(`Cao nhất: ${svCaoNhat.name} — ${svCaoNhat.tb} điểm (${svCaoNhat.loai})`);
console.log(`Thấp nhất: ${svThapNhat.name} — ${svThapNhat.tb} điểm (${svThapNhat.loai})`);

// ================================================
// BƯỚC 5: Điểm TB toàn lớp từng môn
// ================================================

let tongMath = 0, tongPhysics = 0, tongCS = 0;

for (let i = 0; i < students.length; i++) {
    tongMath    += students[i].math;
    tongPhysics += students[i].physics;
    tongCS      += students[i].cs;
}

let n = students.length;
console.log("\n===== ĐIỂM TRUNG BÌNH TOÀN LỚP TỪNG MÔN =====");
console.log(`Toán:      ${(tongMath / n).toFixed(2)}`);
console.log(`Vật lý:    ${(tongPhysics / n).toFixed(2)}`);
console.log(`Tin học:   ${(tongCS / n).toFixed(2)}`);

// ================================================
// BONUS: Điểm TB theo giới tính
// ================================================

let tongTB_M = 0, demM = 0;
let tongTB_F = 0, demF = 0;

for (let i = 0; i < students.length; i++) {
    if (students[i].gender === "M") {
        tongTB_M += students[i].tb;
        demM++;
    } else {
        tongTB_F += students[i].tb;
        demF++;
    }
}

console.log("\n===== BONUS: ĐIỂM TB THEO GIỚI TÍNH =====");
console.log(`Nam (M): TB = ${(tongTB_M / demM).toFixed(2)} (${demM} sv)`);
console.log(`Nữ  (F): TB = ${(tongTB_F / demF).toFixed(2)} (${demF} sv)`);
