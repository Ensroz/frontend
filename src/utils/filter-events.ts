import  type{ CampusEvent } from "../types/campus-events";

export function filterEvents(
  events: CampusEvent[],
  searchQuery: string,
  category: string
): CampusEvent[] {
  return events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category ? event.category === category : true;
    return matchesSearch && matchesCategory;
  });
}