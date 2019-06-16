/**
 * Сделать возможность подписываться на изменение значения калькулятора
 * Для этого реализовать метод subscribe используя патерн наблюдатель
 *
 * Для запуска из папки с файлом в консоли прописать
 * node observer.js
 */
class Calc {
  constructor() {
    this.result = 0;
    this.subscriptions = [];
    s;
  }

  eventTrigger() {
    for (let subscription of this.subscriptions) {
      subscription(this.result);
    }
  }

  increment() {
    this.result += 1;
    this.eventTrigger();
  }

  decrement() {
    this.result -= 1;
    this.eventTrigger();
  }

  subscribe(fn) {
    // TODO
    this.subscriptions.push(fn);
  }
}

const calc = new Calc();

calc.subscribe(res => console.log(res));
calc.subscribe(res => console.log(res));
calc.increment();
calc.increment();
calc.increment();
calc.decrement();
calc.increment();
calc.decrement();
calc.decrement();
calc.decrement();
