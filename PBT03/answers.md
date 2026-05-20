## PHẦN A — KIỂM TRA ĐỌC HIỂU (25 điểm)

### Câu A1 (5đ) — 3 Cách nhúng CSS 3 cách thêm CSS vào HTML được sắp xếp bao gồm:

    Inline CSS (trong attribute style)
        Ví dụ: <h1 style="color: red;">.
        Ưu/Nhược điểm: Specificity cực kỳ cao (chỉ thua !important), nhưng không thể cache được nên trang tải lại mỗi lần load page, đồng thời rất khó maintain khi dự án lớn vì phải sửa trên từng dòng HTML.
        Khi nào dùng: Rất ít dùng, nên tránh trong production thực tế.
    Internal CSS (trong thẻ <style> của <head>)
        Ví dụ: <style> h1 { color: red; } </style>.
        Ưu/Nhược điểm: Phù hợp nếu chỉ muốn định dạng gọn cho duy nhất một trang. Nhược điểm là không tái sử dụng được đoạn code này cho các trang HTML khác.
        Khi nào dùng: Khi 1 trang cần style riêng biệt (ví dụ làm prototype nhanh).
    External CSS (trong file riêng, nhúng qua thẻ <link>)
        Ví dụ: <link rel="stylesheet" href="styles.css">.
        Ưu/Nhược điểm: Trình duyệt có thể cache file CSS sau lần đầu tải nên tốc độ load ở các trang tiếp theo cực nhanh, code gọn gàng (tách biệt HTML và CSS), dễ tái sử dụng và maintain. Khi cần sửa, chỉ cần đổi ở 1 file là toàn bộ website cập nhật.
        Khi nào dùng: Đây là ưu tiên cao nhất, được sử dụng làm tiêu chuẩn trong môi trường production.

    **Câu hỏi thêm:** Nếu cùng 1 element có cả 3 cách áp dụng đồng thời, Inline CSS sẽ "thắng" vì nó có mức độ Specificity cao nhất (điểm vô hạn/1000+) so với cách nhúng Internal và External, trừ khi có luật chứa !important.

### Câu A2 (8đ) — CSS Selectors — Dự đoán kết quả 

```css
    *: Chọn tất cả các element.
    h1, p: Tag selector, nhắm đúng vào loại thẻ.
    .class_name: Class selector, nhắm vào các thẻ có thuộc tính class="class_name". Đây là selector được khuyên dùng 90% thời gian.
    #id_name: ID selector, nhắm vào duy nhất thẻ có id="id_name".
    Sử dụng Combinator: Khoảng trắng là descendant (con cháu bất kỳ đâu), > là con trực tiếp, + là anh em liền kề, ~ là anh em cùng cấp.
```

### Câu A3 (7đ) — Box Model — Tính toán kích thước

    Theo nguyên lý Box Model, khi thiết lập hộp dưới định dạng content-box (mặc định), Kích thước thực tế = width + padding (trái, phải) + border (trái, phải). Nếu dùng border-box, kích thước thực tế sẽ đúng bằng giá trị width bạn khai báo, padding và border sẽ bị ép thu vào bên trong.

   **Nâng cao:** Khoảng cách giữa .box-a có margin-bottom: -10px và .box-b có margin-top: 40px. Khi 2 block margin dọc gặp nhau, hiện tượng Margin collapse xảy ra. Quy tắc gộp lúc này là lấy giá trị LỚN HƠN (không cộng). Vậy khoảng cách thực tế giữa hai hộp sẽ là 40px.

### Câu A4 (5đ) — Specificity (Độ ưu tiên)

Cho <p class="price" id="main-price">:

    Tính Specificity: Bạn đếm theo 3 cột (ID - Class/Pseudo-class - Tag). Ví dụ, selector #main-price có điểm là 1-0-0, selector .price là 0-1-0, và thẻ p là 0-0-1.

    Quyết định màu: Rule nào có tổng Specificity cao nhất sẽ thắng. Nếu hai rule có điểm specificity bằng nhau, rule nào viết sau cùng ở trong file CSS sẽ ghi đè rule trước đó.

    Nếu thêm style inline <p style="color: orange;">: Element sẽ có màu orange. Specificity của inline style (trên 1000) luôn đánh bại Class và ID selector.
    Nếu Rule A thêm !important: Element sẽ theo màu của Rule A vì !important có specificity vô hạn, đánh bại cả inline style.
---

## PHẦN C — DEBUG & SUY LUẬN (20 điểm)

### Câu C1 (10đ) — Debug CSS Layout

    1. Tính chiều rộng thực tế: Với box-sizing: content-box mặc định, chiều rộng thật = phần content (width) + padding + border.

    2. Giải thích tại sao vỡ layout: Trình duyệt mặc định sử dụng content-box. Khi bạn đặt width cho sidebar và content (ví dụ tổng width đúng bằng 960px), nhưng nếu các element này có thêm padding hoặc border, chúng sẽ bị "phình ra ngoài". Lúc này, tổng chiều rộng thực tế vượt quá 960px của container, khiến không đủ chỗ chứa trên một hàng ngang nên cột thứ hai (content) sẽ tự động bị đẩy xuống dòng mới.
    3. Đưa ra **2 cách sửa**
        Cách sửa 1 (Khuyên dùng): Áp dụng * { box-sizing: border-box; } ở đầu file. Lúc này padding và border sẽ lấy không gian lấn vào bên trong (content area bị thu nhỏ), đảm bảo tổng width của sidebar và content giữ nguyên tổng chính xác bằng container.
        Cách sửa 2 (Không dùng border-box): Phải tính toán bằng tay bằng cách lấy kích thước width lý tưởng dự định trừ đi các giá trị padding và border trái phải của từng cột. Sau đó, viết CSS width bằng con số nhỏ hơn vừa thu được để tổng (width mới + padding + border) không vượt quá 960px.

### Câu C2 (10đ) — Cascade Puzzle 

    Inheritance (Kế thừa): Chữ (typography) mang tính kế thừa. Các thuộc tính liên quan đến text như color, font-size, font-family... sẽ được truyền từ thẻ cha trực tiếp xuống cho thẻ con. Do đó, những đoạn mô tả sản phẩm (<p>) nếu không tự khai báo màu, nó sẽ mang màu của phần tử chứa nó (ví dụ .card).
    Cascade: Browser quyết định style qua 4 bước: Nguồn gốc (Origin) → Độ đặc hiệu (Specificity) → Thứ tự viết (Source Order) → Tầm quan trọng (Importance).
        Với sản phẩm có class riêng hoặc trạng thái highlight, bạn phải so sánh độ ưu tiên của bộ chọn. VD: selector p.highlight (điểm 0-1-1) sẽ ưu tiên hiển thị màu hơn selector thẻ p đơn thuần (điểm 0-0-1).
        Nếu 2 rule bằng điểm Specificity, màu cuối cùng sẽ thuộc về rule viết sau trong mã nguồn do quá trình "thác nước" (Cascade).