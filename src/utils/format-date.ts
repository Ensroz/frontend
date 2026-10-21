export function formatDate(dateStr: string): string {
  if (!dateStr) return "Tarih belirtilmedi";
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}