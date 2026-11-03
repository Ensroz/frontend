import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEvents } from "../context/EventsContext";
import EventDetail from "../components/events/EventDetail";
import NotFoundPage from "./NotFoundPage.tsx";

export default function EventDetailPage() {
  const { id } = useParams();
  const { events } = useEvents();
  
  const event = events.find((e) => e.id === (id ?? ""));

  if (!event) {
    return <NotFoundPage />;
  }

  return (
    <div className="page-container">
      <EventDetail event={event} />
      <div style={{ marginTop: "1rem" }}>
        <Link to="/events" className="buton">Listeye Dön</Link>
        {" "}
        <Link to={`/admin/${event.id}/edit`} className="buton">Güncelle</Link>
      </div>
    </div>
  );
}