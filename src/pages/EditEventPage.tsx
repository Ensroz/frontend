import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEvents } from "../context/EventsContext";
import type { EventFormData } from "../types/campus-events.ts";
import EventForm from "../components/forms/EventForm";
import NotFoundPage from "./NotFoundPage.tsx";

export default function EditEventPage() {
  const { id } = useParams();
  const { events, updateEvent } = useEvents();
  const navigate = useNavigate();

  const event = events.find((e) => e.id === (id ?? ""));

  if (!event) {
    return <NotFoundPage />;
  }

  const initialData: EventFormData = {
    title: event.title,
    category: event.category,
    date: event.date,
    time: event.time,
    location: event.location,
    description: event.description,
    capacity: String(event.capacity),
  };

  const handleSubmit = (data: EventFormData) => {
    updateEvent(event.id, data);
    navigate("/admin");
  };

  return (
    <div className="page-container">
      <h2>Etkinliği Düzenle</h2>
      <EventForm initialData={initialData} submitText="Güncelle" onSubmit={handleSubmit} />
    </div>
  );
}