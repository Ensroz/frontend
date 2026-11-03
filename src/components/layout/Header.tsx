import React from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const getBaslik = () => {
    switch (location.pathname) {
      case "/":
        return { baslik: "Kampüs Etkinlikleri", alt: "Fakültedeki seminer, atölye ve söyleşileri tek yerden takip edin." };
      case "/events":
        return { baslik: "Tüm Etkinlikler", alt: "Ekim ayında kampüste düzenlenen etkinlikler." };
      case "/admin":
        return { baslik: "Etkinlik Yönetimi", alt: "Etkinlikleri düzenleyin, silin veya yenisini ekleyin." };
      case "/admin/new":
        return { baslik: "Yeni Etkinlik Ekle", alt: "Sisteme yeni bir kampüs etkinliği tanımlayın." };
      case "/login":
        return { baslik: "Giriş Yap", alt: "Yönetici paneline erişmek için oturum açın." };
      default:
        if (location.pathname.includes("/edit")) {
          return { baslik: "Etkinlik Düzenle", alt: "Mevcut etkinlik bilgilerini güncelleyin." };
        }
        return { baslik: "Kampüs Etkinlikleri", alt: "Fakültedeki seminer, atölye ve söyleşileri tek yerden takip edin." };
    }
  };

  const { baslik, alt } = getBaslik();

  return (
    <header className="site-baslik">
      <div className="sol-baslik">
        <h1>{baslik}</h1>
        <p>{alt}</p>
      </div>
    </header>
  );
}