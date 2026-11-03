import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="page-container">
      <h2>Sayfa Bulunamadı</h2>
      <p>Aradığınız sayfa ya da etkinlik yok.</p>
      <Link to="/" className="buton">Ana Sayfaya Dön</Link>
    </div>
  );
}