function formatDate(dateString) {
  const date = new Date(dateString);
  return date
    .toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, "-"); //DD-MM-YYYY format
}

export { formatDate };
