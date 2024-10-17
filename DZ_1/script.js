// Задание 2
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.

// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)



const musicCollection = {
    collection: [
    {
        title: "Альбом 1",
        artist: "Исполнитель 1",
        year: "2010"
    },
    {
        title: "Альбом 2",
        artist: "Исполнитель 2",
        year: "1985"
    },
    {
        title: "Альбом 3",
        artist: "Исполнитель 3",
        year: "1970"
    },
    ],
    [Symbol.iterator]() {
        let i = 0;
        return {
        next: () => {
            if (i < this.collection.length) {
                return {
                    value: this.collection[i++],
                    done: false
                };
            } else {
            return {
                done: true
                };
            }
        }
        };
    }
};

    for (const album of musicCollection) {
        console.log(`${album.title} - ${album.artist} (${album.year})`);
}



// Задание 2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.


let order = new Map();
order.set('Виктор', 'Пицца')
    .set('Ольга', 'Суши')
    .set('Дмитрий', 'Десерты');

console.log(`Виктор - специализация: ${order.get('Виктор')}`);
console.log(`Ольга - специализация: ${order.get('Ольга')}`);
console.log(`Дмитрий - специализация: ${order.get('Дмитрий')}`);  

let menu = new Map();
        menu.set('Пицца "Маргарита"', 'Виктор')
            .set('Пицца "Пепперони"', 'Виктор')
            .set('Суши "Филадельфия"', 'Ольга')
            .set('Суши "Калифорния"', 'Ольга')
            .set('Тирамису', 'Дмитрий')
            .set('Чизкейк', 'Дмитрий')

console.log(`Пицца "Маргарита" - повар: ${menu.get('Пицца "Маргарита"')}`);        
console.log(`Пицца "Пепперони" - повар: ${menu.get('Пицца "Пепперони"')}`);
console.log(`Суши "Филадельфия" - повар: ${menu.get('Суши "Филадельфия"')}`);
console.log(`Суши "Калифорния" - повар: ${menu.get('Суши "Калифорния"')}`);
console.log(`"Тирамису" - повар: ${menu.get('Тирамису')}`);
console.log(`"Чизкейк" - повар: ${menu.get('Чизкейк')}`);

let persons = new Map();

let personOne = { name : 'Алексей'}
let clientsOrderone = new Set();
clientsOrderone.add('Пицца "Пепперони"')
                .add('"Тирамису"')

let personTwo = { name : 'Мария'}
let clientsOrdertwo = new Set();
clientsOrdertwo.add('Cуши "Калифорния"')
                .add('Пицца "Маргарита"')

let personThree = { name : 'Ирина'}
let clientsOrderthree = new Set();
clientsOrderthree.add('"Чизкейк"')

persons.set(personOne, clientsOrderone)
        .set(personTwo, clientsOrdertwo)
        .set(personThree, clientsOrderthree)
                
console.log(`Клиент ${personOne.name} заказал ${[...persons.get(personOne)]}`);
console.log(`Клиент ${personTwo.name} заказал ${[...persons.get(personTwo)]}`);
console.log(`Клиент ${personThree.name} заказал ${[...persons.get(personThree)]}`);

 