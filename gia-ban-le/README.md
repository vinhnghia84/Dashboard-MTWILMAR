# Calofic · Kiểm soát giá bán lẻ

Trang theo dõi giá bán lẻ và khuyến mãi các thương hiệu Calofic (Simply, Neptune, Meizan, Cái Lân, Kiddy, Olivoilà, Orchid…) tại Co.op, WinMart, Lotte, Emart, Kingfood, Bách Hóa Xanh, so với đối thủ.

Trang là một file HTML tĩnh, đọc dữ liệu trực tiếp từ Google Sheet đã **xuất bản lên web dạng CSV**. n8n ghi giá vào sheet → trang tự cập nhật (Google làm mới CSV khoảng 5 phút/lần, trang tự tải lại mỗi 15 phút).

## Cài đặt (làm 1 lần)

### 1. Xuất bản các tab cần thiết thành CSV

Với mỗi tab dưới đây: mở sheet → **Tệp → Chia sẻ → Xuất bản lên web** → chọn đúng tab → chọn **Giá trị được phân tách bằng dấu phẩy (.csv)** → **Xuất bản** → sao chép link.

| Khóa trong `config.js` | Sheet | Tab | Bắt buộc |
|---|---|---|---|
| `recent` | PRICE ALERT_AUTOMATION | `PAGE_RECENT` | Có |
| `master` | PRICE ALERT_AUTOMATION | `Price Input ` | Nên có (ngành hàng) |
| `total` | RAW DATA URL DẦU ĂN VÀ BƠ THỰC VẬT | `Total link ` | Nên có (đối thủ) |
| `cur` | RAW DATA URL DẦU ĂN VÀ BƠ THỰC VẬT | `Giá hiện tại` | Nên có (đối thủ, Lotte, BHX) |

> ⚠️ **Không xuất bản tab `Note`** (chứa RSP) hay toàn bộ tài liệu. Chỉ chọn từng tab ở trên.
> Link CSV xuất bản là công khai: ai có link đều xem được dữ liệu của tab đó.

### 2. Dán link vào `config.js`

```js
window.PC_CONFIG = {
  mode: 'csv',
  csv: {
    recent: 'https://docs.google.com/spreadsheets/d/e/.../pub?gid=910001&single=true&output=csv',
    master: '...',
    total: '...',
    cur: '...'
  },
  industryLabels: { 'Rice': 'Gạo' }
};
```

### 3. Bật GitHub Pages

Repo → **Settings → Pages** → Source: **Deploy from a branch** → Branch `main`, thư mục `/ (root)` → Save. Sau 1–2 phút trang có ở `https://<tên-tài-khoản>.github.io/<tên-repo>/`.

## Thêm ngành hàng mới

Thêm sản phẩm vào workflow n8n và thêm dòng vào tab `Price Input ` (cột *Ngành hàng*). Trang tự hiện nút ngành mới và thương hiệu mới, không cần sửa code. Đặt tên hiển thị tiếng Việt cho ngành trong `industryLabels`.

## Ngưỡng cảnh báo

Mặc định: bán thấp hơn giá tham chiếu > 8%, chênh giữa các chuỗi > 10%, khuyến mãi sâu ≥ 15%. Mỗi người xem có thể chỉnh bằng nút ⚙ trên trang (lưu trên trình duyệt của họ).
