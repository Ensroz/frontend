import React from "react";
import { useNavigate } from "react-router-dom";
import { useEvents } from "../context/EventsContext";
import type { EventFormData } from "../types/campus-events.ts";
import EventForm from "../components/forms/EventForm";

const emptyForm: EventFormData = {
  title: "",
  category: "",
  date: "",
  time: "",
  location: "",
  description: "",
  capacity: "",
};

export default function AddEventPage() {
  const { addEvent } = useEvents();
  const navigate = useNavigate();

  const handleSubmit = (data: EventFormData) => {
    addEvent(data);
    navigate("/admin");
  };

  return (
    <div className="page-container">
      <h2>Etkinlik Ekle</h2>
      <EventForm initialData={emptyForm} submitText="Kaydet" onSubmit={handleSubmit} />
    </div>
  );
}