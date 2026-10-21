import { useState } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import EventList from "./components/events/EventList";
import EventFilter from "./components/events/EventFilter";
import EventDetail from "./components/events/EventDetail";
import EventForm from "./components/forms/EventForm";
import type { PageName } from "./types/page";
import { events as initialEvents } from "./data/events";

function App() {
  const [page, setPage] = useState<PageName>("home");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");
  const [events] = useState(initialEvents);

  const go = (newPage: PageName, id: string | null = null) => {
    setPage(newPage);
    if (id) setSelectedId(id);
    window.scrollTo(0, 0);
  };

  const selectedEvent = events.find((e) => e.id === selectedId);

  const filteredEvents = events.filter((e) =>
    e.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="app-container">
      <Header 
        title="Kampüs Etkinlikleri" 
        text="Fakültemizde seminer, atölye ve söyleşileri tek yerden takip edin." 
      />
      <Navigation current={page} onNavigate={(p) => go(p)} />

      <main>
        {page === "home" && (
          <section>
            <h2>Yaklaşan 2 Etkinlik</h2>
            <EventList 
              events={events.slice(0, 2)} 
              onShowDetail={(id) => go("detail", id)} 
            />
          </section>
        )}

        {page === "events" && (
          <section>
            <h2>Tüm Etkinlikler</h2>
            <EventFilter 
              searchText={searchText} 
              onSearchChange={setSearchText} 
            />
            <EventList 
              events={filteredEvents} 
              onShowDetail={(id) => go("detail", id)} 
              emptyText="Filtreye uygun etkinlik bulunamadı."
            />
          </section>
        )}

        {page === "detail" && selectedEvent && (
          <EventDetail 
            event={selectedEvent} 
            onBack={() => go("events")} 
            onEdit={(id) => go("update", id)} 
          />
        )}

      {(page === "add" || page === "update") && (
  <section>
    <h2>{page === "add" ? "Etkinlik Ekle" : "Etkinlik Güncelle"}</h2>
    <EventForm 
      onSubmit={() => {
   
        alert("Etkinlik bilgileri kaydedildi!");
      }} 
    />
  </section>
)}
      </main>

      
    </div>
  );
}
export default App;
