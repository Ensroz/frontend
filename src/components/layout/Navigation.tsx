import type { PageName } from "../../types/page";

interface NavigationProps {
  current: PageName;
  onNavigate: (page: PageName) => void;
}

function Navigation({ current, onNavigate }: NavigationProps) {
  return (
    <nav className="nav-container">
      <button 
        type="button"
        className={`nav-btn ${current === "home" ? "active" : ""}`}
        onClick={() => onNavigate("home")}
      >
        Ana Sayfa
      </button>
      <button 
        type="button"
        className={`nav-btn ${current === "events" ? "active" : ""}`}
        onClick={() => onNavigate("events")}
      >
        Etkinlikler
      </button>
      <button 
        type="button"
        className={`nav-btn ${current === "add" ? "active" : ""}`}
        onClick={() => onNavigate("add")}
      >
        Ekle
      </button>
    </nav>
  );
}

export default Navigation;