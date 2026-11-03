import React from "react";
import type { CampusEvent } from "../../types/campus-events";
import EventCard from "./EventCard";

export default function EventList({ events }: { events: CampusEvent[] }) {
  if (events.length === 0) {
    return <p>Henüz gösterilecek etkinlik bulunmamaktadır.</p>;
  }

  return (
    <div className="event-list">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}