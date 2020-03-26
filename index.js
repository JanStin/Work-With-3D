// Подключение класса
import {Drawer} from'./js/Drawer.js'

// Получаем доступ к элементу (окну), в котором будем рисовать.
const ctx = document.getElementById('surface').getContext('2d');


// Получаем доступ к массиву пикселей, который будем менять, и указываем размеры окна, в котором будем рисовать.
const imageData = ctx.createData(800, 600);

// console.log(Drawer);
