const express = require("express");
const app = express();

const cosmetics = [
  {
    id: 1,
    title: "Mặt Nạ Innisfree Capsule Recipe Pack 10ml",
    serviceTime: "45-60min",
    category: "place",
    cuisine: "american",
    rating: 5,
    price: 36000,
    coverSrc:
      "https://www.kosmebox.com/image/cache/data/ReplaceImages/INSC56-500x500.jpg",
  },
  {
    id: 2,
    title: "Che Khuyết Điểm Innisfree Mineral Stick Concealer 2g [HSD 12/2022]",
    serviceTime: "15-20min",
    category: "place",
    cuisine: "hanoi",
    rating: 4,
    price: 90000,
    coverSrc:
      "https://www.kosmebox.com/image/cache/data/INNISFREE/Mineral-Stick-Concealer/but-che-khuyet-diem-innisfree-mineral-stick-concealer-jeju-cosmetics-1-500x500.jpg",
  },
  {
    id: 3,
    title: "Sữa Rửa Mặt Soonsiki Clean Sebum Clay Pack To Form 120ml",
    serviceTime: "30-22min",
    category: "place",
    cuisine: "chinese",
    rating: 3,
    price: 90900,
    coverSrc:
      "https://www.kosmebox.com/image/cache/data/SOONSIKI/sua-rua-mat-soonsiki-clean-sebum-clay-pack-to-form-120ml/Clean-Sebum-Clay-Pack-To-Form-4-320x320.jpg",
  },
  {
    id: 4,
    title:
      "Che Khuyết Điểm Siêu Đa Năng The Face Shop Concealer Dual Veil 8.1g [V201]",
    serviceTime: "10-18min",
    category: "place",
    cuisine: "american",
    rating: 1,
    price: 68000,
    coverSrc:
      "https://www.kosmebox.com/image/cache/data/THEFACESHOP/the-face-shop-concealer-dual-veil-trolls-8-1g/che-khuyet-diem-moi-mat-va-mat-the-face-shop-concealer-dual-veil-trolls-8-1g-5-500x500.jpg",
  },
  {
    id: 5,
    title: "Cọ Tô Màu Mày Etude House Color My Brows Cara 4.5g [HSD 6/2022]",
    serviceTime: "25-30min",
    category: "place",
    cuisine: "hanoi",
    rating: 5,
    price: 85000,
    coverSrc:
      "https://www.kosmebox.com/image/cache/data/ETUDEHOUSE/color-my-brows-cara/Etude-House-Color-My-Brows-Cara-320x320.jpg",
  },
  {
    id: 6,
    title:
      "Mặt Nạ Mắt Trị Thâm Quầng Mắt Tinh Chất Ngọc Trai JM Solution Marine Luminous Pearl Deep Moisture Eye Patch Mask ",
    serviceTime: "5-15min",
    category: "place",
    cuisine: "chinese",
    rating: 5,
    price: 35000,
    coverSrc:
      "https://www.kosmebox.com/image/cache/data/JM%20Solution/tinh-chat-ngoc-trai-jm-solution-marine-luminous-pearl-deep-moisture-mask/tinh-chat-ngoc-trai-jm-solution-marine-luminous-pearl-deep-moisture-mask-1-500x500.jpg",
  },
  {
    id: 7,
    title: "Nước Hoa Vùng Kín Tình Yêu Huyền Bí Dionel Secret Love",
    serviceTime: "50-65min",
    category: "dish",
    cuisine: "american",
    rating: 2,
    price: 10000,
    coverSrc:
      "https://www.kosmebox.com/image/cache/data/DIONEL/nuoc-hoa-vung-kin-dionel-secret-love/nuoc-hoa-vung-kin-dionel-secret-love-14-500x500.jpg",
  },
  {
    id: 8,
    title: "Son Thỏi Lì, Lên Màu Chuẩn, Mềm Mịn Môi ",
    serviceTime: "10-15min",
    category: "dish",
    cuisine: "hanoi",
    rating: 1,
    price: 19000,
    coverSrc:
      "https://www.kosmebox.com/image/cache/data/THEFACESHOP/Eyebrow%20Trimmer/Eyebrow%20Trimmer4-500x500.jpg",
  },
  {
    id: 9,
    title: "Dao Cạo Lông Mày The Face Shop Eyebrow Trimmer",
    serviceTime: "12-18min",
    category: "dish",
    cuisine: "chinese",
    rating: 4,
    price: 27000,
    coverSrc:
      "https://www.kosmebox.com/image/cache/data/THEFACESHOP/sua-rua-mat-bo-sung-am-the-face-shop-mango-seed-cleansing-foam/the-face-shop-mango-seed-cleansing-foam-1-500x500.jpg",
  },
  {
    id: 10,
    title: "Serum Sa-chi Phục Hồi Tóc Cocoon 70ML",
    serviceTime: "30-38min",
    category: "dish",
    cuisine: "american",
    rating: 2,
    price: 35000,
    coverSrc:
      "https://www.kosmebox.com/image/cache/data/13_Sa-chi%20serum%20phu%CC%A3c%20ho%CC%82%CC%80i%20to%CC%81c%20hu%CC%9B%20to%CC%82%CC%89n/1-500x500.png",
  },
  {
    id: 11,
    title:
      "Tinh Chất Dưỡng Mắt Chiết Xuất Hoa Oải Hương Laneige Perfect Renew Eye Serum 14ml",
    serviceTime: "16-20min",
    category: "dish",
    cuisine: "hanoi",
    rating: 3,
    price: 33000,
    coverSrc:
      "https://www.kosmebox.com/image/cache/data/Laneige/Laneige-Perfect-Renew-Eye-Serum/perfect-renew-eye-serum-01-500x500.jpg",
  },
  {
    id: 12,
    title: "Xịt Khoáng Trà Xanh Innisfree Green Tea Mist 50ml",
    serviceTime: "24-30min",
    category: "dish",
    cuisine: "chinese",
    rating: 2,
    price: 41000,
    coverSrc:
      "https://www.kosmebox.com/image/cache/data/INNISFREE/greenteamineralmist/green-tea-mist-4-500x500.jpg",
  },
  {
    id: 13,
    title:
      "Nước Hoa Hồng Sáng Da Gạo The Face Shop Rice & Ceramide Moisture Toner - 150ml (Phiên bản mới 2016)",
    serviceTime: "45-60min",
    category: "place",
    cuisine: "american",
    rating: 5,
    price: 25000,
    coverSrc:
      "https://www.kosmebox.com/image/cache/data/THEFACESHOP/smim/ceramide%20toner-500x500.jpg",
  },
  {
    id: 14,
    title: "Nước Tẩy Trang Dành Cho Da Dầu Mụn Bioderma Sebium H2O 500ml",
    serviceTime: "15-20min",
    category: "place",
    cuisine: "hanoi",
    rating: 4,
    price: 99000,
    coverSrc:
      "https://www.kosmebox.com/image/cache/data/BIODERMA/nuoc-tay-trang-danh-cho-da-dau-mun-bioderma-sebium-h2o-500ml/bioderma-sebium-h2o-phap-500ml-7-500x500.jpg",
  },
  {
    id: 15,
    title:
      "Kem Chống Nắng Chống Thấm Nước Innisfree Intensive Long – Lasting Sunscreen SPF 50+ PA++++ 50ml",
    serviceTime: "30-22min",
    category: "place",
    cuisine: "chinese",
    rating: 3,
    price: 20000,
    coverSrc:
      "https://www.kosmebox.com/image/cache/data/INNISFREE/kem-chong-nang-chong-tham-nuoc-innisfree-intensive-long-lasting-sunscreen/Innisfree-Intensive-Long%E2%80%93Lasting-Sunscreen-SPF50-1-500x500.jpg",
  },
  {
    id: 16,
    title:
      "Gel Dưỡng Ẩm, Trắng Da Some By Mi Yuja Niacin Brightening Moisture Gel Cream 100ml",
    serviceTime: "10-18min",
    category: "place",
    cuisine: "american",
    rating: 1,
    price: 18000,
    coverSrc:
      "https://www.kosmebox.com/image/cache/data/Somebymi/gel-duong-am-trang-da-some-by-mi-yuja-niacin-brightening-moisture-gel-cream-100ml/Some-By-Mi-Yuja-Niacin-Brightening-Moisture-Gel-Cream-11-500x500.jpg",
  },
  {
    id: 17,
    title:
      "[BIG SALES] Tinh Chất Tái Tạo Và Phục Hồi Da So Natural Red Peel Tingle Serum 35ml",
    serviceTime: "25-30min",
    category: "place",
    cuisine: "hanoi",
    rating: 5,
    price: 20000,
    coverSrc:
      "https://www.kosmebox.com/image/cache/data/So-Natural/so-natural-red-peel-tingle-serum/so-natural-red-peel-tingle-serum-12-500x500.jpg",
  },
  {
    id: 18,
    title:
      "Nước Hoa Hồng Dưỡng Trắng Da The Face Shop Chia Seed Advanced Hydro Toner 145ml",
    serviceTime: "5-15min",
    category: "place",
    cuisine: "chinese",
    rating: 5,
    price: 35000,
    coverSrc:
      "https://www.kosmebox.com/image/cache/data/THEFACESHOP/nuoc-hoa-hong-duong-trang-da-the-face-shop-chia-seed-advanced-hydro-toner-145ml/The-Face-shop-Chia-Seed-Advanced-Toner-145ml-500x500.jpg",
  },
  {
    id: 19,
    title:
      "Kem BB Chống Rửa Trôi The Face Shop Waterproof BB Cream SPF50/PA+++ 50ml",
    serviceTime: "50-65min",
    category: "dish",
    cuisine: "american",
    rating: 2,
    price: 22000,
    coverSrc:
      "https://www.kosmebox.com/image/cache/data/ReplaceImages/FSCC79-500x500.jpg",
  },
  {
    id: 20,
    title:
      "Son Thỏi Lì Mềm Mịn Môi Innisfree Real Fit Matte Lipstick (New 2019) [HSD 8/2022]",
    serviceTime: "10-15min",
    category: "dish",
    cuisine: "hanoi",
    rating: 1,
    price: 19000,
    coverSrc:
      "https://www.kosmebox.com/image/cache/data/INNISFREE/real-fit-matte-new-2019/real-fit-matte-new-2019-1-500x500.JPG",
  },
  {
    id: 21,
    title:
      "Mặt Nạ Chăm Sóc Da Sáng Mịn Chiết Xuất Từ Ngọc Trai Đen Hàn Quốc JM Solution Marine Luminous Black Pearl Balancing Mask",
    serviceTime: "12-18min",
    category: "dish",
    cuisine: "chinese",
    rating: 4,
    price: 27000,
    coverSrc:
      "https://www.kosmebox.com/image/cache/data/JM%20Solution/jm-solution-marine-luminous-black-pearl-balancing-mask/jm-solution-marine-luminous-black-pearl-balancing-mask-5-500x500.jpg",
  },
  {
    id: 22,
    title: "Son Thỏi Có Dưỡng I'm Meme I'm Bare Lips Color Balm 3.2g",
    serviceTime: "30-38min",
    category: "dish",
    cuisine: "american",
    rating: 2,
    price: 43000,
    coverSrc:
      "https://www.kosmebox.com/image/cache/data/I-M-Meme/son-thoi-co-duong-i-m-meme-i-m-bare-lips-color-balm-3-2g/i-m-meme-i-m-bare-lips-color-balm-3-2g-2-500x500.jpg",
  },
  {
    id: 23,
    title:
      "Tinh Chất Vàng 24k Chống Lão Hóa Da Lebelage Heeyul Premium Gold Essence (30ml x 2 Lọ)",
    serviceTime: "16-20min",
    category: "dish",
    cuisine: "hanoi",
    rating: 3,
    price: 33000,
    coverSrc:
      "https://www.kosmebox.com/image/cache/data/LEBELAGE/tinh-chat-vang-24k-chong-lao-hoa-da-lebelage-heeyul-premium-gold-essence-30ml-x-2-lo/tinh-chat-vang-24k-chong-lao-hoa-da-lebelage-heeyul-premium-gold-essence-30ml-x-2-lo-1-500x500.jpg",
  },
  {
    id: 24,
    title:
      "Sữa Tẩy Da Chết Đu Đủ The Face Shop Smart Peeling Mild Papaya Peeling 150ml",
    serviceTime: "24-30min",
    category: "dish",
    cuisine: "chinese",
    rating: 2,
    price: 41000,
    coverSrc:
      "https://www.kosmebox.com/image/cache/data/THEFACESHOP/smart-peeling-mild-papaya-peeling/smart-peeling-mild-papaya-peeling-18-500x500.jpg",
  },
];

app.get("/v1/cosmetics", (req, res) => {
  res.status(200).json(cosmetics);
});

app.listen("8080", () => {
  console.log("sever is running...");
});
