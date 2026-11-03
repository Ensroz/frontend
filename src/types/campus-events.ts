export type Category = "Atölye" | "Seminer" | "Sosyal" | "Kariyer" | "Söyleşi" | "Yarışma" | "";

export interface CampusEvent {
  id: string;
  title: string;
  category: Category;
  date: string;
  time: string;
  location: string;
  description: string;
  capacity: number;
  image?: string; 
}
export type EventFormData = {
  title: string;
  category: Category;
  date: string;
  time: string;
  location: string;
  description: string;
  capacity: string;
}