// /** Пример простейшей функции - фабрики для создания объекта мира игры в зависимости от уровня сложности */

function gameStructureFactory(level = 1) {
  var object = {
    enemies: 50,
    amunition: 100
  };

  if (level != 1) {
    upgradeLvl(object, level);
  }

  return object;
}

function upgradeLvl(object, coefficient) {
  Object.keys(object).forEach(key => {
    object[key] = object[key] * coefficient;
  });
}

// /** порождает одинакове по структуре, но разные по значению объекты / экземпляры класса в зависимости от условий */

console.log(gameStructureFactory(1));
console.log(gameStructureFactory(5));
console.log(gameStructureFactory(10));

/** пример на классах  */

class gameStructureFactory {
  constructor(params) {
    this.enemies = 50;
    this.amunition = 100;
    this.genre = params.genre;
    if (params.difficult != 1) {
      this.enemies *= params.difficult;
      this.amunition *= params.difficult;
    }
  }
}

var world = new gameStructureFactory({
  genre: 'horror',
  difficult: 1
});
console.log(world);
var newWorld = new gameStructureFactory({
  genre: 'adventure',
  difficult: 5
});
console.log(newWorld);
