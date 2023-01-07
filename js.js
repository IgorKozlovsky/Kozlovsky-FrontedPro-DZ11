// Створити масив, довжину та елементи якого задає користувач.
// Відсортувати масив за зростанням.
// Видалити елементи з масиву з 2 по 4 (включно!).
// У міру змін виводити вміст масиву на сторінку.

const count = +prompt("Введіть кількість елементів масиву");
if (isNaN(count) || count <= 0) {
  console.log("Помилка");
} else {
  let elements = prompt(`Введіть ${count} чисел через пробіл`);
  if (
    elements === null ||
    elements.trim().split(" ").length !== count ||
    elements
      .trim()
      .split(" ")
      .filter((e) => !isNaN(+e) && e.trim() !== "").length !== count
  ) {
    console.log("Помилка");
  } else {
    elements = elements.trim().split(" ");
    console.log(elements);
    elements.sort((a, b) => +a - +b);
    console.log(elements);
    elements.splice(1, 3);
    console.log(elements);
  }
}
