// Функция для решения квадратного уравнения
function solveQuadraticEquation(a, b, c) {
    // Вычисление дискриминанта
    const discriminant = b**2 - 4*a*c;

    // Проверка значения дискриминанта
    if (discriminant > 0) {
        // Два действительных корня
        const x1 = (-b + Math.sqrt(discriminant)) / (2*a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2*a);
        return `У уравнения два корня: x1 = ${x1}, x2 = ${x2}`;
    } else if (discriminant === 0) {
        // Один действительный корень
        const x = -b / (2*a);
        return `У уравнения один корень: x = ${x}`;
    } else {
        // Нет действительных корней
        return "У уравнения нет действительных корней";
    }
}

// Получение ввода от пользователя
const a = parseFloat(prompt("Введите коэффициент a:"));
const b = parseFloat(prompt("Введите коэффициент b:"));
const c = parseFloat(prompt("Введите коэффициент c:"));

// Проверка на корректность ввода
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("Пожалуйста, введите числа для коэффициентов.");
} else {
    // Вызов функции и вывод результата
    const result = solveQuadraticEquation(a, b, c);
    console.log(result);
}