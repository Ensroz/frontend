import React from "react";
import { Link } from "react-router-dom";
import type { CampusEvent } from "../../types/campus-events";
import { formatDate } from "../../utils/format-date";

export default function EventCard({ event }: { event: CampusEvent }) {
  return (
    <article className="event-card">
      <h3>{event.title}</h3>
      <p><strong>Tarih:</strong> {formatDate(event.date)} - {event.time}</p>
      <p><strong>Kategori:</strong> {event.category}</p>
      <Link to={`/events/${event.id}`} className="buton">Detayları Gör</Link>
    </article>
  );
}