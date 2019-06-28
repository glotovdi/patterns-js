/** Используется для создания объектов со сложными состояниями. Создание объекта "по-кирпичикам"  */

class pcBuilder {
  constructor(params) {
    this.name = params;
  }
  setRam(size) {
    this.ram = `${size}GB`;
    return this;
  }
  setCPU(name) {
    this.cpu = name;
    return this;
  }
  setSSD(size) {
    this.ssd = `${size}GB`;
    return this;
  }
  setHDD(size) {
    this.hdd = `${size}GB`;
    return this;
  }
}

var myPc = new pcBuilder('smthngPc');
console.log(myPc);
myPc
  .setCPU(2)
  .setSSD(2)
  .setHDD(2);
console.log(myPc);
