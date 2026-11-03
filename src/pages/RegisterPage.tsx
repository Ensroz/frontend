import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string; password2?: string }>({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found: { name?: string; email?: string; password?: string; password2?: string } = {};

    if (name.trim().length < 3) {
      found.name = "Ad Soyad en az 3 karakter olmalı.";
    }
    if (!email.includes("@")) {
      found.email = "Geçerli bir e-posta girin.";
    }
    // Şifre uzunluk kontrolü (En az 6 karakter)
    if (password.length < 6) {
      found.password = "Şifre en az 6 karakter olmalı.";
    }
    if (password2 !== password) {
      found.password2 = "Şifreler aynı değil.";
    }

    setErrors(found);
    if (Object.keys(found).length === 0) {
      setSent(true);
    }
  };

  return (
    <div className="page-container auth-form">
      <h2>Kayıt Ol</h2>
      {sent ? (
        <p className="mesaj mesaj-basari">Form geçerli. Gerçek kayıt işlemi Sprint 10'da eklenecek.</p>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label>Ad Soyad</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            {errors.name && <span className="hata-metni">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label>E-posta</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <span className="hata-metni">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label>Şifre</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {errors.password && <span className="hata-metni">{errors.password}</span>}
          </div>
          <div className="form-group">
            <label>Şifre (Tekrar)</label>
            <input type="password" value={password2} onChange={(e) => setPassword2(e.target.value)} />
            {errors.password2 && <span className="hata-metni">{errors.password2}</span>}
          </div>
          <button type="submit" className="buton">Kayıt Ol</button>
        </form>
      )}
      <div style={{ marginTop: "1.25rem" }}>
        <Link to="/login" className="auth-link">Zaten hesabın var mı? Giriş yap</Link>
      </div>
    </div>
  );
}