/**
 * BẢNG SO SÁNH KỸ THUẬT (TRADE-OFF MATRIX):
 * ---------------------------------------------------------------------------------------------------------
 * Tiêu chuẩn             | Monolithic Switch-Case               | Modular Function Architecture
 * -----------------------|--------------------------------------|-----------------------------------------
 * Độ dài khối switch     | Hàng trăm dòng, cực kỳ khó đọc       | Rất ngắn (chỉ 1 dòng gọi hàm mỗi case)
 * Khả năng tái sử dụng   | Bằng 0 (dính chặt vào menu CLI)      | Rất cao (có thể dùng cho cả API/Web)
 * Khả năng viết Test     | Không thể test từng chức năng độc lập| Rất dễ dàng kiểm thử từng hàm riêng biệt
 * Khả năng mở rộng       | Khó quản lý khi tăng lên 20+ chức năng| Dễ dàng chia module, bảo trì và phát triển
 * ---------------------------------------------------------------------------------------------------------
 * 
 * Nguyên lý cốt lõi: Nguyên lý Đơn nhiệm (SRP - Single Responsibility Principle)
 */

const subscriptions = [
  { subscriptionId: 'SUB-001', customerName: 'Nguyen Van An', planTier: 'PERSONAL', deviceLimit: 2, status: 'ACTIVE' }
];

function addSubscription(list) {
  const customerName = prompt("Nhập tên khách hàng: ");
  const newId = `SUB-00${list.length + 1}`;
  
  list.push({
    subscriptionId: newId,
    customerName: customerName,
    status: 'ACTIVE'
  });
  
  console.log(`=> Đã thêm thành công thuê bao ${newId}!`);
}

function main() {
  let choice = prompt("Nhập lựa chọn (1: Thêm, 5: Thoát): ");
  
  switch (choice) {
    case '1':
      addSubscription(subscriptions); // Chỉ 1 dòng gọi hàm
      break;
    case '5':
      console.log("Thoát chương trình!");
      break;
    default:
      console.log("Lựa chọn không hợp lệ!");
  }
}

// Khởi chạy ứng dụng
main();