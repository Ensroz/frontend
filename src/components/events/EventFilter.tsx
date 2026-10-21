interface EventFilterProps {
  searchText: string;
  onSearchChange: (value: string) => void;
}

function EventFilter({ searchText, onSearchChange }: EventFilterProps) {
  return (
    <div className="event-filter">
      <input 
        type="text"
        value={searchText} 
        onChange={(e) => onSearchChange(e.target.value)} 
        placeholder="Atölye ara..."
      />
    </div>
  );
}

export default EventFilter;