import React, { useState } from "react";

interface EventFormProps {
  onSubmit: () => void;
  initialData?: {
    title?: string;
    category?: string;
    date?: string;
    time?: string;
    location?: string;
    capacity?: number | string;
    description?: string;
  };
}

function EventForm({ onSubmit, initialData }: EventFormProps) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    category: initialData?.category || "",
    date: initialData?.date || "",
    time: initialData?.time || "",
    location: initialData?.location || "",
    capacity: initialData?.capacity || "",
    description: initialData?.description || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // İşlem tamamlandığında yönlendirme/kayıt
    onSubmit();
  };

  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <p className="form-aciklama">
        Bu sprintte form sadece gösterim amaçlıdır, kayıt yapılmaz.
      </p>

      <div className="form-group">
        <label htmlFor="title">Etkinlik Adı</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Örn: Kariyer Günleri 2026"
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="category">Kategori</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Seçiniz</option>
          <option value="Seminer">Seminer</option>
          <option value="Atölye">Atölye</option>
          <option value="Konferans">Konferans</option>
          <option value="Söyleşi">Söyleşi</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="date">Tarih</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="time">Saat</label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="location">Yer</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Örn: A Blok Konferans Salonu"
          value={formData.location}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="capacity">Kontenjan</label>
        <input
          type="number"
          id="capacity"
          name="capacity"
          value={formData.capacity}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Açıklama</label>
        <textarea
          id="description"
          name="description"
          rows={3}
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="submit-btn">
        Kaydet / Gönder
      </button>
    </form>
  );
}

export default EventForm;