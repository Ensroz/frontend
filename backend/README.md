Markdown
# Kampüs Etkinlikleri - Backend (Express REST API)

Bu proje, "Kampüs Etkinlikleri" frontend uygulamasının yanında çalışan, etkinlikleri JSON formatında sunan Node.js ve Express tabanlı bir REST API sunucusudur[cite: 1].

## ⚙️ Çalıştırma Komutları

Backend klasörüne gidip bağımlılıkları yükledikten sonra geliştirme modunu başlatabilirsiniz[cite: 2]:

```bash
cd backend
npm install
npm run dev
📌 Ortam Değişkenleri (.env)
Sunucunun çalışacağı port bilgisi .env dosyasından okunur:   
IMG_5074_1153bd.jpg
+ 1
PORT: 3000 (Örn: PORT=3000)
🔌 REST Sözleşmesi
Method	Endpoint	Amaç	Başarılı Yanıt	Hata Yanıtı	Durum
GET	/health	Sunucu sağlık kontrolü	200 OK	-	Bu sprint
GET	/events	Etkinlik listesini getirir	200 OK	-	Bu sprint
GET	/events/:id	Tek bir etkinlik getirir	200 OK	404 Not Found	Bu sprint
POST	/events	Yeni etkinlik ekler	201 Created	400 Bad Request	Bu sprint
PATCH	/events/:id	Etkinliği günceller	200 OK	400, 404	Sprint 9
DELETE	/events/:id	Etkinliği siler	204 No Content	404 Not Found	Sprint 9
Hata mesajı formatı: {"error": {"message": "Açıklama"}}   
IMG_5075_1153bd.jpg
+ 1


---

### 2. Teslim Öncesi Kontrol Listesi (Checklist)

Fotoğraflardaki kurallara göre yükleme yapmadan önce şu adımlardan emin olmalısın:

1. **Repo Yapısı:** 
   - `frontend/` ve `backend/` klasörleri aynı kök dizinde yer almalı[cite: 1, 8].
   - `backend/` altında `src/` (app.js, server.js, routes/, controllers/, data/), `.env.example`, `.gitignore`, `package.json` ve `backend/README.md` bulunmalı[cite: 2, 3, 8].
   - `backend/requests/kampus-api.json` dosyası eklenmiş olmalı[cite: 8].
2. **GitHub'da Olmaması Gerekenler:** 
   - `.env` dosyası ve `node_modules` klasörü kesinlikle GitHub'a gönderilmemeli (`.gitignore` içinde olmalı)[cite: 8, 9].
3. **Özgünlük Kuralları:**
   - `GET /health` yanıtındaki `student` alanında **öğrencin numaran** yazmalı[cite: 5, 8].
   - `src/data/events.js` içerisindeki 6 etkinliğin başlık, yer ve açıklamalarını kendin uyarlamalısın (`event-1` ... `event-6` ID'leri kalmalı)[cite: 6, 8].
4. **Git Geçmişi:**
   - En az 5 commit olmalı ve adım adım atılmalı (tek seferde tek commit kabul edilmez)[cite: 8].

---

### 3. GitHub'a Gönderim Komutları

Tüm kontrolleri tamamladıktan sonra repo kök dizininde sırasıyla şu komutları çalıştırabilirsin:

```bash
git add .
git commit -m "Complete sprint 7 Express REST API"
git tag sprint-07
git push
git push --tags

