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
    /** массив подписчиков */
    this.subscriptions = [];
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

  /** метод добавляющий подписку к подписчикам */
  subscribe(fn) {
    // TODO
    this.subscriptions.push(fn);
  }

  /** метод отписки */
  unsubscribe(fn) {
    if (!fn) {
      this.subscriptions = [];
      return;
    }
    this.subscriptions.splice(this.subscriptions.indexOf(fn), 1);
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
