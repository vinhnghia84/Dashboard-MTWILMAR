// Nguồn dữ liệu: các tab Google Sheet đã "Xuất bản lên web" dạng CSV (chỉ 4 tab dưới đây, không gồm RSP/giá nhập).
// Sheet tự xuất bản lại khi n8n ghi dữ liệu mới; trang tự tải lại mỗi 15 phút.
window.PC_CONFIG = {
  mode: 'csv',
  csv: {
    recent: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRaGKfvfSayIdIHD0X-jFnqZN5bhipCh6COqnlGK8z4XW6qZOvMHsKPHmBH1dv4HxxFDvCALtKH3zKI/pub?gid=910001&single=true&output=csv',
    master: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRaGKfvfSayIdIHD0X-jFnqZN5bhipCh6COqnlGK8z4XW6qZOvMHsKPHmBH1dv4HxxFDvCALtKH3zKI/pub?gid=1693780781&single=true&output=csv',
    total: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR8NZy38-ISkt9HmeOqE_EzpUR5Skt4FmbSWL4eb0tD-oZZUuHWGnWE8KD0dCq79XuzUWfGKRjD3fo2/pub?gid=1674493751&single=true&output=csv',
    cur: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR8NZy38-ISkt9HmeOqE_EzpUR5Skt4FmbSWL4eb0tD-oZZUuHWGnWE8KD0dCq79XuzUWfGKRjD3fo2/pub?gid=900002&single=true&output=csv'
  },
  // Tên hiển thị cho ngành hàng mới, ví dụ: { 'Rice': 'Gạo', 'Flour': 'Bột mì' }
  industryLabels: {},
  // Logo thương hiệu: đặt file PNG/SVG vào thư mục logos/ (xem logos/README.md). Thiếu file thì tự hiện chữ viết tắt.
  logoBase: 'logos/',
  brandLogos: {}
};
