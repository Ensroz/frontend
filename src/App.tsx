import { useState, useEffect } from "react";
import "./App.css";
import { events } from "./data/events";
import type { CampusEvent, Category } from "./types/campus-events";
import {
  searchEvents,
  filterByCategory,
  findEventById,
} from "./utils/filter-events";


type PageName = "home" | "events" | "detail" | "add" | "update";

export default function App() {
  const [page, setPage] = useState<PageName>("home");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState<Category | "">("");

  const selected = selectedId ? findEventById(events, selectedId) : undefined;
  
  const currentTitle =
    page === "detail" && selected
      ? selected.title
      : page === "events"
      ? "Tüm Etkinlikler"
      : page === "add"
      ? "Etkinlik Ekle"
      : page === "update"
      ? "Etkinlik Güncelle"
      : "Ana Sayfa";

  useEffect(() => {
    document.title = `Kampüs Etkinlikleri - ${currentTitle}`;
  }, [currentTitle]);

  function go(next: PageName, id: string | null = null) {
    setPage(next);
    setSelectedId(id);
    window.scrollTo(0, 0);
  }

  // Kart Oluşturucu (CSS'teki .event-card yapısına uygun)
  function renderCard(event: CampusEvent) {
    return (
      <article className="event-card" key={event.id}>
        <div>
          <h2>{event.title}</h2>
          <p><strong>Kategori:</strong> {event.category}</p>
          <p><strong>Tarih:</strong> {event.date}, {event.time}</p>
          <p><strong>Yer:</strong> {event.location}</p>
          <p><strong>Kontenjan:</strong> {event.capacity} kişi</p>
          <p>{event.description}</p>
        </div>
        <button
          className="detail-link"
          onClick={() => go("detail", event.id)}
        >
          Detayları gör &rarr;
        </button>
      </article>
    );
  }

  const filteredEvents = filterByCategory(
    searchEvents(events, searchText),
    category
  );

  const categories: Category[] = ["Seminer", "Atölye", "Söyleşi", "Yarışma"];

  return (
    <>
      <header>
        <div className="header-container">
          <div>
            <h1>Kampüs Etkinlikleri</h1>
            <p style={{ fontSize: "0.85rem", opacity: 0.9 }}>
              Fakültedeki seminer, atölye ve söyleşileri tek yerden takip edin.
            </p>
          </div>
          <nav>
            <button
              onClick={() => go("home")}
              className={page === "home" ? "active" : ""}
            >
              Ana Sayfa
            </button>
            <button
              onClick={() => go("events")}
              className={page === "events" ? "active" : ""}
            >
              Etkinlikler
            </button>
            <button
              onClick={() => go("add")}
              className={page === "add" ? "active" : ""}
            >
              Ekle
            </button>
          </nav>
        </div>
      </header>

      <main>
        {/* 1. ANA SAYFA */}
        {page === "home" && (
          <section>
            <div className="section-head">
              <h2>Yaklaşan 2 Etkinlik</h2>
              <button className="link-all" onClick={() => go("events")}>
                Tüm etkinlikleri gör &rarr;
              </button>
            </div>
            <div className="cards-grid grid-2">
              {[...events]
                .sort((a, b) => a.date.localeCompare(b.date))
                .slice(0, 2)
                .map(renderCard)}
            </div>
          </section>
        )}

        {/* 2. ETKİNLİKLER SAYFASI */}
        {page === "events" && (
          <section>
            <div className="section-head">
              <h2>Tüm Etkinlikler</h2>
            </div>
            <p className="lead-text">Ekim ayında kampüste düzenlenen etkinlikler.</p>

            <div className="form-card" style={{ marginBottom: "1.5rem", padding: "1rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div className="form-group" style={{ margin: 0 }}>
                  <label htmlFor="search">Etkinlik ara</label>
                  <input
                    id="search"
                    type="search"
                    placeholder="Örn. atölye, kariyer..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                </div>
                <div className="form-group" style={{ margin: 0 }}>
                  <label htmlFor="cat-filter">Kategori</label>
                  <select
                    id="cat-filter"
                    value={category}
                    onChange={(e) => setCategory(e.target.value as Category | "")}
                  >
                    <option value="">Tümü</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <p className="lead-text" style={{ fontSize: "0.9rem" }}>
              {filteredEvents.length === 0
                ? "Hiç etkinlik bulunamadı."
                : `${filteredEvents.length} etkinlik listeleniyor.`}
            </p>

            <div className="cards-grid grid-3">{filteredEvents.map(renderCard)}</div>
          </section>
        )}

        {/* 3. DETAY SAYFASI */}
        {page === "detail" && selected && (
          <div>
            <h2 style={{ marginBottom: "1rem", color: "var(--renk-ana)" }}>
              {selected.title}
            </h2>
            <div className="detail-layout">
              <div className="poster-box">
                {selected.image ? (
                  <img src={selected.image} alt={`${selected.title} afişi`} />
                ) : (
                  <span>{selected.title} afişi</span>
                )}
              </div>
              <div>
                <h3 style={{ marginBottom: "0.75rem", color: "var(--renk-ana)" }}>
                  Etkinlik Künyesi
                </h3>
                <dl className="event-info">
                  <div>
                    <dt>Tarih</dt>
                    <dd>{selected.date}, {selected.time}</dd>
                  </div>
                  <div>
                    <dt>Yer</dt>
                    <dd>{selected.location}</dd>
                  </div>
                  <div>
                    <dt>Kategori</dt>
                    <dd>{selected.category}</dd>
                  </div>
                  <div>
                    <dt>Kontenjan</dt>
                    <dd>{selected.capacity} kişi</dd>
                  </div>
                </dl>
                <div className="event-desc">
                  <dt style={{ fontWeight: 700, color: "var(--renk-ana)", marginBottom: "0.25rem", textTransform: "uppercase", fontSize: "0.85rem" }}>Açıklama</dt>
                  <dd style={{ fontSize: "0.95rem" }}>{selected.description}</dd>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
              <button className="back-link" onClick={() => go("events")}>
                &larr; Listeye dön
              </button>
              <button
                className="back-link"
                style={{ color: "var(--renk-ana)" }}
                onClick={() => go("update", selected.id)}
              >
                Bu etkinliği güncelle &rarr;
              </button>
            </div>
          </div>
        )}

        {/* 4. EKLE VE GÜNCELLE FORMLARI */}
        {(page === "add" || page === "update") && (
          <div className="form-card">
            <h2 style={{ marginBottom: "0.5rem", color: "var(--renk-ana)" }}>
              {page === "add" ? "Etkinlik Ekle" : "Etkinlik Güncelle"}
            </h2>
            <p className="lead-text" style={{ fontSize: "0.85rem", color: "var(--renk-gri)" }}>
              Bu sprintte form sadece görünüm; kayıt yapılmaz.
            </p>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="title">Etkinlik Adı</label>
                <input
                  id="title"
                  type="text"
                  maxLength={80}
                  placeholder="Örn. Kariyer Günleri 2026"
                />
              </div>

              <div className="form-group">
                <label htmlFor="form-category">Kategori</label>
                <select id="form-category" defaultValue="">
                  <option value="" disabled>
                    Seçiniz
                  </option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="date">Tarih</label>
                <input id="date" type="date" />
              </div>

              <div className="form-group">
                <label htmlFor="time">Saat</label>
                <input id="time" type="time" />
              </div>

              <div className="form-group">
                <label htmlFor="location">Yer</label>
                <input id="location" type="text" placeholder="Örn. A Blok Konferans Salonu" />
              </div>

              <div className="form-group">
                <label htmlFor="capacity">Kontenjan</label>
                <input id="capacity" type="number" placeholder="Örn. 50" />
              </div>

              <div className="form-group">
                <label htmlFor="description">Açıklama</label>
                <textarea id="description" rows={4} placeholder="Etkinlik açıklaması..." />
              </div>

              <button type="submit" className="btn-submit">
                Kaydet
              </button>
            </form>
          </div>
        )}
      </main>
    </>
  );
}