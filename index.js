const s = +prompt('Введіть значення s'); // Запрошуємо ввід значення вхідного параметру s
const t = +prompt('Введіть значення t'); // Запрошуємо ввід значення вхідного параметру t

function f (a, b, c) {
  return a * Math.sin(b) + b * Math.sin(a) + c * c;
}

let result = (f(1, t + s, s) + f(t, s * t, 1)) / (1 + Math.pow(f(s, 1, t), 2));

console.log(result);
