import React, { useState } from "react";
import { useEvents } from "../context/EventsContext";
import EventList from "../components/events/EventList";
import EventFilter from "../components/events/EventFilter";
import { filterEvents } from "../utils/filter-events";

export default function EventsPage() {
  const { events } = useEvents();
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");

  const categories = Array.from(new Set(events.map((e) => e.category))).filter(Boolean);
  const filtered = filterEvents(events, searchQuery, category);

  return (
    <div className="page-container">
      <h2>Etkinlikler</h2>
      <EventFilter
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        category={category}
        onCategoryChange={setCategory}
        categories={categories}
      />
      <EventList events={filtered} />
    </div>
  );
}