## PHẦN A — KIỂM TRA ĐỌC HIỂU (20 điểm)

### Câu A1 — HTTP & Browser

**Nguồn tham chiếu: `01_introduction_html_universe.md` - Phần 0 (Opening Hook) & Phần 8 (Checkpoint).**

1. 5 bước xảy ra khi gõ https://shopee.vn và nhấn Enter:
   - Request xuất phát từ máy tính của người dùng đi qua router và nhà mạng (Internet) để đến server.
   - Server tiếp nhận, xử lý và phản hồi lại cho trình duyệt các file HTML, CSS, JS.
   - Trình duyệt nhận các file này và tiến hành Parse HTML.
   - Tiếp tục Parse CSS và Execute JS.
   - Cuối cùng là quá trình Layout và Paint để render hiển thị giao diện lên màn hình.
2. Tab Network trong DevTools hiển thị các file (tài nguyên) được tải về cùng với Status Code, thời gian load và dung lượng file. 

### Câu A2 (5đ) — Semantic HTML

**Nguồn tham chiếu: `00_design_thinking_layout.md` - Phần 3 (Semantic Tags) & Phần 7, `04_visible_part_html.md` - Phần 1.**

- Trang web lạm dụng `<div>` (Div Soup) bị Google đánh giá thấp vì thẻ `<div>` không có ngữ nghĩa (semantic meaning) [6]. Điều này khiến Google Bot không hiểu được cấu trúc trang, dẫn đến SEO kém, đồng thời làm mất đi tính trợ năng (Accessibility) vì Screen Reader không thể dùng nó để điều hướng cho người khiếm thị.
- Cách sửa 4 lỗi semantic phổ biến:
  1. Thay `<div class="header">` thành `<header>` .
  2. Thay `<div class="nav">` thành `<nav>`.
  3. Thay `<div class="content">` thành `<main>` .
  4. Thay `<div class="footer">` thành `<footer>`.

  ```html (sửa lại)
<header>
    <div class="logo">ShopTLU</div>
    <div class="menu">
        <div><a href="/">Trang chủ</a></div>
        <div><a href="/products">Sản phẩm</a></div>
    </div>
</div>
<main>
    <div class="product">
        <div class="title">iPhone 16 Pro</div>
        <div class="price">25.990.000đ</div>
        <div class="image"><img src="iphone.jpg"></div>
    </div>
</div>
<footer>© 2026 ShopTLU</footer>
```

### Câu A3 (5đ) — Block vs Inline

**Nguồn tham chiếu: `00_design_thinking_layout.md` - Phần 3.**

- **Block Element** (như `<div>`, `<p>`): Chiếm toàn bộ chiều rộng của dòng, tự động đẩy nội dung tiếp theo xuống dòng mới và có thể thiết lập được chiều rộng (width) và chiều cao (height).
- **Inline Element** (như `<span>`, `<a>`): Chỉ chiếm phần diện tích vừa bằng nội dung của nó, nằm cùng dòng với các phần tử khác và không thể trực tiếp thiết lập width/height.

### Câu A4 (5đ) — Table

**Nguồn tham chiếu: `05_tables_hyperlinks.md` - Phần 3, 7 & 8.**

- Khác biệt:
*`<thead>` chứa tiêu đề các cột, 
*`<tbody>` chứa dữ liệu chính, 
*`<tfoot>` dùng để tổng kết hoặc tính tổng.
- 3 lý do KHÔNG NÊN dùng table để layout:
  1. Đây là Anti-pattern lỗi thời từ bản HTML 4 . Bảng sinh ra chỉ để chứa dữ liệu tabular có hàng và cột mang ý nghĩa.
  2. Phá hỏng Accessibility vì Screen Reader sẽ đọc layout như một bảng dữ liệu, khiến người dùng bị bối rối.
  3. Sẽ bị lỗi hoặc vỡ layout nếu người dùng cố resize hoặc sort các cột dữ liệu (nên dùng Flexbox hoặc CSS Grid để thay thế).

### PHẦN C — SUY LUẬN (20 điểm)

### Câu C1 (10đ) — Thiết kế cấu trúc 

**Nguồn tham chiếu: `04_visible_part_html.md` - Phần 3, `05_tables_hyperlinks.md` - Phần 3.**

```html
<header> <!-- Bọc phần trên cùng (logo, search) của toàn trang --> </header>
<nav aria-label="breadcrumb"> <!-- Điều hướng dạng chuỗi Trang chủ > Sản phẩm --> </nav>
<main> <!-- Vùng nội dung duy nhất của trang -->
    <article> <!-- Đóng gói toàn bộ sản phẩm vì nó là nội dung độc lập -->
        <section id="gallery">
            <!-- Chứa 5 ảnh sản phẩm. Dùng <figure> bao quanh <img> -->
        </section>
        <section id="info">
            <!-- Tiêu đề <h1>, mô tả và giá -->
        </section>
        <section id="specs">
            <!-- Bảng thông số dùng <table>, <thead>, <tbody> -->
        </section>
        <section id="reviews">
            <!-- Chứa các bình luận, mỗi bình luận có thể là 1 <article> nhỏ -->
        </section>
    </article>
</main>
<aside> <!-- Sản phẩm tương tự là phần phụ, nằm bên cạnh hỗ trợ main --> </aside>
<footer> <!-- Chứa chính sách, liên hệ cuối trang --> </footer>
```

#### Câu C2 (10đ) — So sánh & Tranh luận

**Nguồn tham chiếu: 00_design_thinking_layout.md - Phần 3 & 7, 04_visible_part_html.md - Phần 2.**
     
     * Phản biện: Việc lạm dụng thẻ <div> cho mọi thứ đi ngược lại nguyên lý của HTML5. Về mặt kỹ thuật, thẻ <div> chỉ là container trung tính, không giúp ích gì cho SEO vì Google không phân biệt được đâu là nội dung quan trọng. Về mặt Accessibility, trình đọc màn hình phụ thuộc vào semantic tags để điều hướng, nếu thiếu chúng, người khiếm thị không thể dùng form hay nhảy qua các vùng trang.
    * Ví dụ chứng minh: Khi bao bọc thẻ sản phẩm bằng <article>, bạn cho Google Bot biết đây là một thực thể thông tin độc lập, có thể lấy ra để chia sẻ, từ đó index tốt hơn.
    * Trường hợp <div> phù hợp: Bạn chỉ nên dùng <div> làm thẻ bao bọc (wrapper) khi cần nhóm nhiều thành phần lại với nhau nhằm mục đích chia layout bằng CSS (như thiết lập Flexbox hoặc Grid) mà không có thẻ semantic nào như <section> hay <aside> thích hợp hơn.
