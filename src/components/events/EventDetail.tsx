import type { CampusEvent } from "../../types/campus-events";
import { formatDate } from "../../utils/format-date";

interface EventDetailProps {
  event: CampusEvent;
  onBack: () => void;
  onEdit: (id: string) => void;
}

function EventDetail({ event, onBack, onEdit }: EventDetailProps) {
  return (
    <div className="event-detail">
      <h2>{event.title}</h2>
      <p><strong>Tarih:</strong> {formatDate(event.date)}</p>
      <p><strong>Yer:</strong> {event.location}</p>
      <p><strong>Kategori:</strong> {event.category}</p>
      <p><strong>Kontenjan:</strong> {event.capacity} kişi</p>
      
      <h3>Açıklama</h3>
      <p>{event.description}</p>

      <div className="detail-actions">
        <button type="button" onClick={onBack}>Listeye Dön</button>
        <button type="button" onClick={() => onEdit(event.id)}>Güncelle</button>
      </div>
    </div>
  );
}

export default EventDetail;