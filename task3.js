/* Задача 3 – Функция проверки скобок
Проверить корректность расстановки скобок в арифметическом выражении. 
Выражение задается как строковый входной параметр функции 
и может содержать произвольное количество круглых скобок.
Функция должна возвращать одну строчку: "правильно" или "неправильно"
*/
const checkBrackets = (str) =>
{
    const stack = [], open = "([{", close = ")]}";
    for (const ch of str)
    {
        const i = open.indexOf(ch);
        if (i > -1) stack.push(close[i]);
        if (close.includes(ch) && ch != stack.pop()) return 'Не правильно';
    }
    if (stack.length == 0) {
        return 'Правильно';
    }
}
console.log(checkBrackets('[()]()[]()[]()[]')); // Правильно
console.log(checkBrackets('[()]()[]()[]()[])')); // Не правильно