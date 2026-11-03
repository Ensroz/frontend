import React from "react";
import type { CampusEvent } from "../../types/campus-events";
import { formatDate } from "../../utils/format-date";

export default function EventDetail({ event }: { event: CampusEvent }) {
  return (
    <article className="detay">
      <h2>{event.title}</h2>
      <dl>
        <dt>Tarih & Saat:</dt>
        <dd>{formatDate(event.date)} - {event.time}</dd>
        <dt>Yer:</dt>
        <dd>{event.location}</dd>
        <dt>Kategori:</dt>
        <dd>{event.category}</dd>
        <dt>Kontenjan:</dt>
        <dd>{event.capacity} kişi</dd>
      </dl>
      <p>{event.description}</p>
    </article>
  );
}