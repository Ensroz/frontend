# 🎓 Campus Events Backend API

Bu dizin, Kampüs Etkinlikleri uygulamasının backend (arka yüz) servislerini içermektedir. Node.js ve Express.js kullanılarak geliştirilmiş RESTful bir API yapısına sahiptir.

---

## 🛠️ Teknolojiler ve Bağımlılıklar

Projede kullanılan temel teknoloji ve bileşenler:

* **Çalışma Zamanı (Runtime):** Node.js
* **Web Framework:** Express.js (`src/app.js`, `src/server.js`)[cite: 1]
* **Veri Depolama:** Yerel veri modülleri (`src/data/events.js`)[cite: 1]
* **API Test Aracları:** REST Client / Postman koleksiyonları (`requests/kampus-api.json`)[cite: 1]

---

## 📁 Proje Dizin Yapısı

```text
backend/
├── requests/
│   └── kampus-api.json      # API istek ve test şablonları
├── src/
│   ├── controllers/
│   │   └── event-controller.js  # Etkinlik iş mantığı ve yönlendirmeleri
│   ├── data/
│   │   └── events.js            # Etkinlik mock/veri katmanı
│   ├── routes/
│   │   └── event-routes.js      # Etkinlik API rotaları
│   ├── app.js                   # Express uygulama yapılandırması
│   └── server.js                # Sunucu başlatma noktası
├── .env.example                 # Örnek çevre değişkenleri
├── .gitignore                   # Git tarafından izlenmeyen dosyalar
└── package.json                 # Bağımlılıklar ve npm betikleri
🚀 Kurulum ve ÇalıştırmaUygulamayı yerel ortamınızda çalıştırmak için aşağıdaki adımları takip edin:1. Backend Klasörüne GeçinBashcd backend
2. Bağımlılıkları YükleyinBashnpm install
3. Çevre Değişkenlerini Ayarlayın.env.example dosyasının bir kopyasını oluşturarak .env ismiyle kaydedin ve gerekli port ayarlarını düzenleyin[cite: 1]:Kod snippet'iPORT=3000
4. Sunucuyu BaşlatınBash# Geliştirme (Development) modunda çalıştırma:
npm run dev
📌 API Uç Noktaları (Endpoints)Etkinlik işlemleri için sunulan temel API rotaları:   GET /api/events — Tüm etkinliklerin listesini getirir[cite: 1]GET /api/events/:id — Belirli bir etkinliğin detayını getirir[cite: 1]POST /api/events — Yeni bir etkinlik oluşturur[cite: 1]PUT /api/events/:id — Var olan bir etkinliği günceller[cite: 1]DELETE /api/events/:id — Bir etkinliği siler[cite: 1]
# Standart çalıştırma:
npm start
Sunucu varsayılan olarak http://localhost:3000 adresinde çalışmaya başlayacaktır.güncellerDELETE/api/events/:idBir etkinliği siler
