import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found: { email?: string; password?: string } = {};

    if (!email.includes("@")) {
      found.email = "Geçerli bir e-posta girin.";
    }
    // Şifre uzunluk kontrolü (En az 6 karakter)
    if (password.length < 6) {
      found.password = "Şifre en az 6 karakter olmalı.";
    }

    setErrors(found);
    if (Object.keys(found).length === 0) {
      setSent(true);
    }
  };

  return (
    <div className="page-container auth-form">
      {sent ? (
        <p className="mesaj mesaj-basari">Form geçerli. Gerçek giriş Sprint 10'da eklenecek.</p>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label>E-posta</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <span className="hata-metni">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label>Şifre</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {errors.password && <span className="hata-metni">{errors.password}</span>}
            <div style={{ marginTop: "0.5rem" }}>
              <Link to="/forgot-password" className="auth-link" style={{ fontSize: "0.85rem" }}>Şifremi unuttum</Link>
            </div>
          </div>
          <button type="submit" className="buton">Giriş Yap</button>
        </form>
      )}
      <div style={{ marginTop: "1.25rem" }}>
        <Link to="/register" className="auth-link">Hesabın yok mu? Kayıt ol</Link>
      </div>
    </div>
  );
}