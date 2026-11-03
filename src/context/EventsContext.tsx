import React, { createContext, useContext, useState } from "react";
import type { CampusEvent, EventFormData } from "../types/campus-events"; 

interface EventsContextValue {
  events: CampusEvent[];
  addEvent: (data: EventFormData) => void;
  updateEvent: (id: string, data: EventFormData) => void;
  deleteEvent: (id: string) => void;
}

// Başlangıç etkinlikleri doğrudan burada tanımlandı
const defaultEvents: CampusEvent[] = [
  {
    id: "event-1",
    title: "Kariyer Günleri 2026",
    category: "Seminer",
    capacity: 100,
    date: "2026-10-12",
    time: "14:00",
    location: "A Blok Konferans Salonu",
    description: "Mezunlarla kariyer söyleşileri ve şirket standları.",
    image: "/afis.svg"
  },
  {
    id: "event-2",
    title: "Robotik Atölyesi",
    category: "Atölye",
    capacity: 20,
    date: "2026-10-20",
    time: "10:00",
    location: "Bilgisayar Laboratuvarı 2",
    description: "Arduino ile çizgi izleyen robot yapımı, başlangıç seviyesi.",
  },
  {
    id: "event-3",
    title: "Yapay Zeka Söyleşisi",
    category: "Söyleşi",
    capacity: 75,
    date: "2026-10-25",
    time: "15:30",
    location: "B Blok Konferans Salonu",
    description: "Yapay zeka teknolojilerindeki son gelişmeler ve etik tartışmalar.",
  },
  {
    id: "event-4",
    title: "Web Tasarım Atölyesi",
    category: "Atölye",
    capacity: 30,
    date: "2026-11-03",
    time: "15:00",
    location: "Bilgisayar Laboratuvarı 1",
    description: "HTML ve CSS ile şık kişisel sayfanı yap.",
  },
  {
    id: "event-5",
    title: "Algoritma Yarışması",
    category: "Yarışma",
    capacity: 50,
    date: "2026-11-10",
    time: "13:00",
    location: "Merkez Lab",
    description: "En hızlı kodu yaz, ödülü kazan!",
  },
  {
    id: "event-6",
    title: "Siber Güvenlik Semineri",
    category: "Seminer",
    capacity: 120,
    date: "2026-11-18",
    time: "11:00",
    location: "A Blok Konferans Salonu",
    description: "Temel siber güvenlik önlemleri ve kariyer fırsatları.",
  }
];

const EventsContext = createContext<EventsContextValue | null>(null);

export function EventsProvider({ children }: { children: React.ReactNode }) {
  const [events, setEvents] = useState<CampusEvent[]>(defaultEvents);

  const toEvent = (id: string, data: EventFormData): CampusEvent => ({
    id,
    title: data.title.trim(),
    category: data.category,
    date: data.date,
    time: data.time,
    location: data.location,
    description: data.description,
    capacity: Number(data.capacity),
  });

  const addEvent = (data: EventFormData) => {
    const newId = `event-${Date.now()}`;
    setEvents((prev) => [...prev, toEvent(newId, data)]);
  };

  const updateEvent = (id: string, data: EventFormData) => {
    setEvents((prev) =>
      prev.map((e) => (e.id === id ? toEvent(id, data) : e))
    );
  };

  const deleteEvent = (id: string) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <EventsContext.Provider value={{ events, addEvent, updateEvent, deleteEvent }}>
      {children}
    </EventsContext.Provider>
  );
}

export function useEvents() {
  const context = useContext(EventsContext);
  if (!context) {
    throw new Error("useEvents must be used within an EventsProvider");
  }
  return context;
}