# Kampüs Etkinlikleri - Backend (Express REST API)

Bu proje, "Kampüs Etkinlikleri" frontend uygulamasının yanında çalışan, etkinlikleri JSON formatında sunan Node.js ve Express tabanlı bir REST API sunucusudur.

## Çalıştırma Komutları

Backend klasörüne gidip bağımlılıkları yükledikten sonra geliştirme modunu başlatmak için şu komutları kullanabilirsiniz:

cd backend
npm install
npm run dev

## Ortam Değişkenleri (.env)

Sunucunun çalışacağı port bilgisi .env dosyasından okunur:
- PORT: 3000 (Örn: PORT=3000)

## REST Sözleşmesi

| Method | Endpoint | Amaç | Başarılı Yanıt | Hata Yanıtı | Durum |
| :--- | :--- | :--- | :--- | :--- | :--- |
| GET | /health | Sunucu sağlık kontrolü | 200 OK | - | Bu sprint |
| GET | /events | Etkinlik listesini getirir | 200 OK | - | Bu sprint |
| GET | /events/:id | Tek bir etkinlik getirir | 200 OK | 404 Not Found | Bu sprint |
| POST | /events | Yeni etkinlik ekler | 201 Created | 400 Bad Request | Bu sprint |
| PATCH | /events/:id | Etkinliği günceller | 200 OK | 400, 404 | Sprint 9 |
| DELETE | /events/:id | Etkinliği siler | 204 No Content | 404 Not Found | Sprint 9 |

> Hata mesajı formatı: {"error": {"message": "Açıklama"}}
