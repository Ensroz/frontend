import React from "react";
import { Link } from "react-router-dom";
import { useEvents } from "../context/EventsContext";
import { formatDate } from "../utils/format-date";

export default function AdminPage() {
  const { events, deleteEvent } = useEvents();

  const handleDelete = (id: string, title: string) => {
    if (window.confirm(`"${title}" silinsin mi?`)) {
      deleteEvent(id);
    }
  };

  return (
    <div className="page-container">
      <h2>Etkinlik Yönetimi</h2>
      <Link to="/admin/new" className="buton">+ Yeni Etkinlik</Link>
      
      {events.length === 0 ? (
        <p style={{ marginTop: "1rem" }}>Henüz etkinlik yok.</p>
      ) : (
        <table className="tablo" style={{ marginTop: "1rem" }}>
          <thead>
            <tr>
              <th>Etkinlik</th>
              <th>Tarih</th>
              <th>Kategori</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td data-baslik="Etkinlik">{event.title}</td>
                <td data-baslik="Tarih">{formatDate(event.date)}</td>
                <td data-baslik="Kategori">{event.category}</td>
                <td data-baslik="İşlemler" className="islemler">
                  <Link to={`/admin/${event.id}/edit`} className="buton">Düzenle</Link>
                  <button onClick={() => handleDelete(event.id, event.title)} className="buton-sil">Sil</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}