// Створити масив, довжину та елементи якого задає користувач.
// Відсортувати масив за зростанням.
// Видалити елементи з масиву з 2 по 4 (включно!).
// У міру змін виводити вміст масиву на сторінку.

const count = +prompt("Введіть кількість елементів масиву");
if (isNaN(count) || count <= 0) {
  console.log("Помилка");
} else {
  const array = new Array(count);
  let elements = prompt(`Введіть ${count} чисел через пробіл`);
  if (
    elements === null ||
    elements.split(" ").length !== count ||
    elements.split(" ").filter((e) => !isNaN(+e) && e.trim() !== "").length !== count
  ) {
    console.log("Помилка");
  } else {
    elements = elements.split(" ");
    for (let i = 0; i < elements.length; i++) {
      array[i] = elements[i];
    }
    console.log(array);
    array.sort((a, b) => a - b);
    console.log(array);
    array.splice(1, 4);
    console.log(array);
  }
}
