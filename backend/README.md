# Backend API Service

Bu repository, uygulamanın veri tabanı mantığını, iş kurallarını (business logic) ve API uç noktalarını yöneten **backend** (arka yüz) servislerini içermektedir.

---

## 🛠️ Teknolojiler

Projede kullanılan temel teknoloji ve araçlar:

- **Runtime / Dil:** Node.js / Python / Java
- **Framework:** Express.js / FastAPI / Spring Boot
- **Veri Tabanı:** PostgreSQL / MongoDB / MySQL
- **ORM / Query Builder:** Prisma / TypeORM / SQLAlchemy / Mongoose
- **Kimlik Doğrulama:** JWT (JSON Web Tokens)

---

## 📁 Dizin Yapısı

```text
backend/
├── src/
│   ├── config/         # Veri tabanı ve çevre yapılandırmaları
│   ├── controllers/    # Request/Response süreçlerini yöneten kontrolcüler
│   ├── middlewares/    # Güvenlik, yetkilendirme ve hata yakalama katmanları
│   ├── models/         # Veri tabanı şemaları ve modelleri
│   ├── routes/         # API uç noktaları (endpoints)
│   ├── services/       # İş mantığı (Business logic) ve dış servisler
│   └── utils/          # Genel yardımcı fonksiyonlar
├── .env.example        # Örnek çevre değişkenleri şablonu
├── package.json        # Bağımlılıklar ve çalıştırma komutları
└── server.js           # Uygulama giriş noktası
🚀 Kurulum ve ÇalıştırmaProjeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları sırasıyla uygulayın.1. Repoyu Klonlayın ve Klasöre GeçinBashgit clone [https://github.com/Ensroz/frontend.git](https://github.com/Ensroz/frontend.git)
cd frontend/backend
2. Bağımlılıkları YükleyinBash# Node.js kullanıyorsanız:
npm install

# Python kullanıyorsanız:
pip install -r requirements.txt
3. Çevre Değişkenlerini AyarlayınRoot dizindeki .env.example dosyasının adını .env olarak değiştirin ve kendi değerlerinizi girin:Kod snippet'iPORT=5000
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
JWT_SECRET="gelişmiş_ve_güvenli_bir_anahtar"
NODE_ENV="development"
4. Veri Tabanını HazırlayınBash# Prisma kullanılıyorsa:
npx prisma migrate dev

# Diğer ORM'ler için ilgili migrasyon komutunu çalıştırın.
5. Uygulamayı BaşlatınBash# Geliştirme (Development) Modu:
npm run dev

# Prodüksiyon (Production) Modu:
npm start
Sunucu varsayılan olarak http://localhost:5000 adresinde yayına başlayacaktır.📌 Örnek API Uç NoktalarıYöntemRotaAçıklamaAuthGET/api/v1/healthSunucu durum kontrolü❌POST/api/v1/auth/registerYeni kullanıcı kaydı❌POST/api/v1/auth/loginGiriş yapma ve Token alımı❌GET/api/v1/user/profileOturum açmış kullanıcı profili✅ (Bearer Token)🧪 Testleri ÇalıştırmaTest senaryolarını koşturmak için:Bashnpm test
🤝 Katkıda BulunmaProjeyi Fork'layın (fork)Yeni bir Feature Branch oluşturun (git checkout -b feature/YeniÖzellik)Değişikliklerinizi Commit'leyin (git commit -m 'feat: Yeni özellik eklendi')Branch'inizi Push'layın (git push origin feature/YeniÖzellik)Bir Pull Request açın
