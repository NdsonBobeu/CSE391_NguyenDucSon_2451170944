## PHẦN A — KIỂM TRA ĐỌC HIỂU (25 điểm)

### Câu A1 (5đ) — Input Types

    1.type="text": Ô nhập thông thường / Tự động validate bằng minlength, maxlength, pattern / Dùng để nhập tên khách hàng.
    2.type="email": Giao diện ô nhập bình thường / Tự kiểm tra định dạng phải có @ / Dùng để nhập email nhận hóa đơn.
    3.type="password": Ẩn ký tự đã nhập (dấu chấm tròn) / Tự validate qua minlength, pattern / Dùng để nhập mật khẩu đăng nhập.
    4.type="number": Có nút tăng/giảm (±) bên cạnh / Tự validate qua min, max, step / Dùng để nhập số lượng sản phẩm mua.
    5.type="tel": Hiện bàn phím số khi dùng trên thiết bị di động / Tự validate qua pattern / Dùng để nhập số điện thoại giao hàng.
    6.type="date": Hiển thị bộ chọn ngày (Date picker) / Tự validate qua min, max / Dùng để chọn ngày mong muốn nhận hàng.
    7.type="checkbox": Ô vuông chọn có/không / Tự validate bằng required / Dùng để tick chọn "Đồng ý với điều khoản dịch vụ".
    8.type="radio": Hình tròn chọn một trong nhiều lựa chọn / Tự validate bằng required / Dùng để chọn phương thức thanh toán (COD/Chuyển khoản).
    9.type="file": Nút bấm để mở hộp thoại chọn file / Tự validate qua accept (loại file), multiple / Dùng để khách hàng tải lên ảnh biên lai thanh toán.
    10.type="search": Ô tìm kiếm có thêm nút "X" để xóa nhanh / Không tự động validate / Dùng cho thanh tìm kiếm sản phẩm.

### Câu A2 (5đ) — Validation Attributes 

    Trường hợp 1: input có required nhưng để trống: Trình duyệt sẽ chặn submit và hiện tooltip yêu cầu người dùng phải điền vào trường này.
    Trường hợp 2: type="email" nhưng nhập thiếu @: Trình duyệt báo lỗi "Please include an '@' in the email address" và chặn submit.
    Trường hợp 3: input có minlength="8" nhưng nhập 3 ký tự: Trình duyệt chặn submit báo lỗi độ dài tối thiểu chưa đạt.
    Trường hợp 4: type="date" có max (vd max là hôm nay) nhưng chọn ngày mai: Trình duyệt báo lỗi ngày được chọn vượt quá mốc cho phép.
    Trường hợp 5: input có pattern nhưng nhập không khớp: Trình duyệt chặn submit và yêu cầu nhập đúng định dạng.

### Câu A3 (5đ) — Accessibility

    Thẻ <label for="email"> rất quan trọng vì khi for khớp với id của input, screen reader sẽ biết nhãn này thuộc về ô nhập nào để đọc to cho người khiếm thị. Hơn nữa, nó giúp cải thiện UX vì người dùng bấm vào chữ label thì con trỏ sẽ tự focus vào ô nhập.
    <fieldset> + <legend> dùng để nhóm các nút radio hoặc checkbox có liên quan chặt chẽ với nhau. Ví dụ cụ thể: Nhóm các input <input type="radio"> cho việc chọn giới tính (Nam/Nữ/Khác).
    aria-label dùng cho các biểu mẫu hoặc phần tử điều hướng không có nhãn văn bản hiển thị trên màn hình (như thanh nav nhiều menu, nút button chỉ có icon). KHÔNG nên dùng khi đã có <label> vì nó sẽ ghi đè lên thông tin của <label>, gây dư thừa hoặc xung đột cho screen reader.

### Câu A4 (5đ) — Media

    loading="lazy" trên thẻ <img> giúp trì hoãn việc tải ảnh cho đến khi người dùng scroll gần đến vị trí ảnh đó, giúp trang web load ban đầu nhanh và nhẹ hơn. KHÔNG nên dùng cho ảnh "above the fold" (ảnh người dùng thấy ngay khi mở trang như ảnh hero, logo) vì nó làm chậm LCP (Largest Contentful Paint).
    Cần nhiều <source> trong thẻ <video> vì mỗi trình duyệt hỗ trợ định dạng khác nhau, giúp trình duyệt tự chọn định dạng tương thích nhất. 3 format web phổ biến: WebM, MP4, AVIF/WebP (video thường chuộng WebM + MP4 bao phủ được 99% trình duyệt).
    Thuộc tính alt mô tả nội dung ảnh cho screen reader và hiển thị thay thế khi ảnh bị lỗi không tải được.
        Ảnh sản phẩm iPhone 16: alt="Điện thoại iPhone 16 màu Titan Tự Nhiên nhìn từ mặt trước".
        Ảnh trang trí: alt="" (chuỗi rỗng).
        Ảnh biểu đồ: alt="Biểu đồ cột hiển thị doanh thu tăng trưởng Quý 1 năm 2026".

### Câu A5 (5đ) — So sánh `<figure>` vs `<img>`

    Cách 1 (<img> đơn thuần): Dùng cho ảnh độc lập, không cần chú thích giải nghĩa hoặc ảnh trang trí. Ví dụ: Logo trang web ở phần header, icon của các nút bấm.
    Cách 2 (<figure> + <figcaption>): Dùng khi nội dung media cần có chú thích đi kèm để giải thích cho nội dung đó. Ví dụ: Ảnh sản phẩm kèm tên/giá tiền bên dưới, đoạn code minh họa hoặc biểu đồ kèm một dòng giải thích.

## PHẦN C — PHÂN TÍCH & SUY LUẬN (20 điểm)

### Câu C1 (10đ) — Debug Form

    Lỗi: Dùng placeholder thay thế hoàn toàn thẻ <label>. Sửa: Luôn dùng <label> vì placeholder biến mất khi gõ và kém Accessibility.
    Lỗi: Không có thuộc tính for trong <label>, hoặc for không khớp với id của input. Sửa: Cặp <label for="uid"> và <input id="uid"> phải luôn khớp nhau.
    Lỗi: Dùng method="GET" cho form đăng nhập/password. Sửa: Đổi thành method="POST" để bảo mật.
    Lỗi: Nút Submit để type="button". Sửa: Đổi thành type="submit".
    Lỗi: Nhóm <input type="radio"> mà không bao bọc bởi <fieldset> và <legend>. Sửa: Thêm các thẻ này vào để chuẩn Accessibility.
    Lỗi: Không tận dụng thuộc tính HTML5 (như thiếu required, minlength). Sửa: Thêm thuộc tính validation tự động của HTML5.
    Lỗi: Bỏ qua kiểu dữ liệu chuẩn (type="email", type="tel"). Sửa: Dùng đúng Input types.
    Lỗi: Nút không có label hoặc aria-label nếu chỉ dùng icon. Sửa: Bổ sung nhãn chuẩn.

### Câu C2 (10đ) — Thiết kế chiến lược Validation

    Viết pattern regex:
        CMND/CCCD: pattern="\d{12}"
        Số tài khoản: pattern="\d{10,15}"
    HTML5 validation là CHƯA ĐỦ AN TOÀN cho ngân hàng. Vì HTML5 chỉ cung cấp trải nghiệm người dùng (UX) thuận tiện trên Frontend, kẻ gian rất dễ dàng bypass (vượt mặt) bằng cách sửa HTML qua công cụ DevTools trên trình duyệt.
    3 Loại validation mà HTML5 KHÔNG THỂ làm được (cần JS/Backend):
        Kiểm tra hai trường có giống nhau không (như Xác nhận password).
        Kiểm tra tính duy nhất (như kiểm tra tài khoản, CMND đã tồn tại trong database chưa).
        Xác thực logic nghiệp vụ phức tạp (ví dụ: ngày hết hạn thẻ tín dụng phải lớn hơn hiện tại).
    2 rủi ro bảo mật nếu không validate Backend:
        Form bị tấn công Injection (SQL Injection, XSS) có thể phá hủy Database.
        Dữ liệu rác/độc hại được lưu vào hệ thống làm ứng dụng bị lỗi hỏng (crash).
