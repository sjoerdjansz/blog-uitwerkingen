export function calcReadTime(content) {
  return Math.ceil(content.split(" ").length / 200);
}
