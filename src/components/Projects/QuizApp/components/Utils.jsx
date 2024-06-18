export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const categories = [
  { type: "Entertainment: Books", id: 10 },
  { type: "Entertainment: Film", id: 11 },
  { type: "Entertainment: Music", id: 12 },
  { type: "Entertainment: Musicals & Theatres", id: 13 },
  { type: "Entertainment: Television", id: 14 },
  { type: "Entertainment: Video Games", id: 15 },
  { type: "Entertainment: Board Games", id: 16 },
  { type: "Science & Nature", id: 17 },
  { type: "Science: Computers", id: 18 },
  { type: "Science: Mathematics", id: 19 },
  { type: "Mythology", id: 20 },
  { type: "Sports", id: 21 },
  { type: "Geography", id: 22 },
  { type: "History", id: 23 },
  { type: "Politics", id: 24 },
  { type: "Arts", id: 25 },
  { type: "Celebrities", id: 26 },
  { type: "Animals", id: 27 },
  { type: "Vehicles", id: 28 },
  { type: "Entertainment: Comics", id: 29 },
  { type: "Science: Gadgets", id: 30 },
  { type: "Entertainment: Japanese Anime & Manga", id: 31 },
  { type: "Entertainment: Cartoon & Animations", id: 32 },
];

export const levels = ["easy", "medium", "hard"];

export const options = { 0: "A", 1: "B", 2: "C", 3: "D" };

export function capitalize(string) {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export function decodeHtmlEntities(text) {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = text;
  return textArea.value;
}
