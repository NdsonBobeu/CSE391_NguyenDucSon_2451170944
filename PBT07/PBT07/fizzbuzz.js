
console.log("===== VERSION 1: FIZZBUZZ CLASSIC (1-100) =====");

for (let i = 1; i <= 100; i++) {
    // Kiểm tra chia hết cho cả 3 và 5 TRƯỚC
    if (i % 15 === 0) {
        console.log(i + " → FizzBuzz");
    } else if (i % 3 === 0) {
        console.log(i + " → Fizz");
    } else if (i % 5 === 0) {
        console.log(i + " → Buzz");
    } else {
        console.log(i);
    }
}

// ─────────────────────────────────────
// VERSION 2: Custom FizzBuzz
// ─────────────────────────────────────

// Hàm nhận n (giới hạn) và rules (mảng các luật)
// rules là mảng các object: { divisor: số_chia, word: "từ_in_ra" }
function customFizzBuzz(n, rules) {
    console.log(`\n===== CUSTOM FIZZBUZZ (1 đến ${n}) =====`);
    console.log("Luật áp dụng:", rules.map(r => `chia hết ${r.divisor} → "${r.word}"`).join(", "));
    console.log("---");

    for (let i = 1; i <= n; i++) {
        let ketQua = ""; // Chuỗi kết quả ban đầu rỗng

        // Duyệt qua TỪNG luật, nếu chia hết thì nối thêm từ
        for (let j = 0; j < rules.length; j++) {
            if (i % rules[j].divisor === 0) {
                ketQua += rules[j].word;
            }
        }

        // Nếu không khớp luật nào → in số bình thường
        if (ketQua === "") {
            ketQua = String(i);
        }

        // Chỉ in những số có từ đặc biệt (để màn hình gọn hơn)
        if (ketQua !== String(i)) {
            console.log(`${i} → ${ketQua}`);
        }
    }
}

// ── Test với 3 luật: Fizz/Buzz/Jazz ──
customFizzBuzz(105, [
    { divisor: 3, word: "Fizz" },
    { divisor: 5, word: "Buzz" },
    { divisor: 7, word: "Jazz" }
]);

// ── Test kiểm chứng các số quan trọng ──
console.log("\n===== KIỂM CHỨNG CÁC SỐ ĐẶC BIỆT =====");
const testRules = [
    { divisor: 3, word: "Fizz" },
    { divisor: 5, word: "Buzz" },
    { divisor: 7, word: "Jazz" }
];

// Test thủ công một số
function kiemTraMot(so, rules) {
    let ketQua = "";
    for (let j = 0; j < rules.length; j++) {
        if (so % rules[j].divisor === 0) {
            ketQua += rules[j].word;
        }
    }
    return ketQua || String(so);
}

console.log(`21  → ${kiemTraMot(21, testRules)}`);   // Fizz (3×7) + Jazz (7×3) = FizzJazz
console.log(`15  → ${kiemTraMot(15, testRules)}`);   // FizzBuzz
console.log(`35  → ${kiemTraMot(35, testRules)}`);   // BuzzJazz
console.log(`105 → ${kiemTraMot(105, testRules)}`);  // FizzBuzzJazz (3×5×7)
