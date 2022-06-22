hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];



// Используя циклы, if/else, switch/case и методы .push(), .pop(), .unshift(), .shift(), .concat(), .splice(), .reverse() .join():

// 1. Объединить массивы destination, native, hero в общий массив rainbow.

// 2. Сделать реверс элементов полученного массива rainbow.

// 3. Изменить/добавить элементы массива rainbow так, что бы в итоге получился массив вида ['Richard','Of','York','Gave','Battle','In','Vain'];

// 4. Вывести элементы полученного массива в html в виде, который представлен в прикрепленном рисунке rainbow.png.

rainbow = []

rainbo = hero.concat(native);

console.log(rainbo);

rainbow = rainbo.concat(destination);

console.log(rainbow);

rainbowReversed = rainbow.reverse();

console.log(rainbow);

rainbow.shift();


console.log(rainbow);

rainbow.shift();


console.log(rainbow);

rainbow.unshift(`Richard`)

console.log(rainbow);


rainbow.pop()

console.log(rainbow);

rainbow.push('Gave','Battle','In','Vain')

console.log(rainbow);


colors = [`Red`, `Orange`, `Yellow`, `Green`, `Blue`, `DarkBlue`, `Purple`];





for (i = 0; i < colors.length; i++ ) {


document.write(`<div class="circle" style="background-color:${colors[i]}"><div class="info"><p>${rainbow[i]}</p></div></div>`);

}







































