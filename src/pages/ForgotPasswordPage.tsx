import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Geçerli bir e-posta girin.");
      setSent(false);
    } else {
      setError("");
      setSent(true);
    }
  };

  return (
    <div className="page-container auth-form">
      <h2>Şifremi Unuttum</h2>
      <p>Kayıtlı e-posta adresinizi girin, şifre sıfırlama bağlantısı gönderelim.</p>
      {sent ? (
        <p className="mesaj mesaj-basari">Bağlantı <strong>{email}</strong> adresine gönderildi (demo).</p>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label>E-posta</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {error && <span className="hata-metni">{error}</span>}
          </div>
          <button type="submit" className="buton">Bağlantı Gönder</button>
        </form>
      )}
      <div style={{ marginTop: "1rem" }}>
        <Link to="/login">← Girişe dön</Link>
      </div>
    </div>
  );
}