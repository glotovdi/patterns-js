/** Используется для создания объектов со сложными состояниями. Создание объекта "по-кирпичикам"  */

class Pc {
  constructor(build) {

    this.ram = build.ram;
    this.cpu = build.cpu;
    this.ssd = build.ssd;
    this.hdd = build.hdd;
  }
  static get Builder() {
    class Builder {
      constructor() {}
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
      build() {
        return new Pc(this);
      }
    }
    return Builder
  }
}

var pc = new Pc.Builder()
  .setHDD(200)
  .build();

console.log(pc);