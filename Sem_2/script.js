// class BankAccount{
//     #balance = 0; // приватное свойство для хранения баланса
    
//     //конструктор если меньше 0 то выкидвает ошибку (нужен для иницилизации баланса)
//     constructor(balance){
//         if (balance < 0) {
//             throw new Error("Отрицательный баланс для инициализации счета");
//         }
//         this.#balance = balance;// присваевам баланс балансу (в приватное свойство записываем в баланс )
//     }

//     // гетер получает баланс (функция возвращает баланс)
//     get balance() {
//         return this.#balance;
//     }

//     // сетер выставляет наш баланс 

//     set balance(balance) {
//         this.#balance = balance;
//     }

//     // депозит cash это наличные. Если деньги меньше или = 0 выходит ошибка. Если все ок мы должны увеличть значение cash.
//     deposit(cash) {
//         if (cash <= 0) {
//             throw new Error('Сумма для депозита должна быть больше 0');
//         }
//         this.#balance += cash;
//         return this.#balance; // возвращаем баланс
//     }

//     withdraw(cash) {
//         if (cash <= 0) {
//             throw new Error("Сумма для снятия должна быть больше 0");
//         }
//         if(this.#balance - cash < 0) {
//             throw new Error("Сумма для снятия больше суммы счета");
//         }
//         this.#balance -= cash;
//         return this.#balance;
//     }

// }


// let account = new BankAccount(500);
// console.log(account.BankAccount);

// account.deposit(200);
// console.log(account.balance);

// account.withdraw(100);
// console.log(account.balance);

// Задание 2
