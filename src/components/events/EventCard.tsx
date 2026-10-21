import type { CampusEvent } from "../../types/campus-events";
import { formatDate } from "../../utils/format-date";

interface EventCardProps {
  event: CampusEvent;
  onShowDetail: (id: string) => void;
}

function EventCard({ event, onShowDetail }: EventCardProps) {
  return (
    <div className="event-card">
      <h2>{event.title}</h2>
      {event.category && <p className="kategori">{event.category}</p>}
      <p><strong>Tarih:</strong> {formatDate(event.date)}</p>
      <p><strong>Yer:</strong> {event.location}</p>
      {event.capacity && <p><strong>Kontenjan:</strong> {event.capacity} kişi</p>}
      {event.description && <p className="ozet">{event.description}</p>}
      
      <button 
        type="button"
        className="btn-link"
        onClick={() => onShowDetail(event.id)}
      >
        Detayları gör
      </button>
    </div>
  );
}

export default EventCard;