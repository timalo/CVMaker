// date taken in is just string in format yyyy-mm.
// Change that to mm/yyyy
export default function dateFormatter(date) {
  const [year, month] = date.split("-");
  return `${month}/${year}`;
}
