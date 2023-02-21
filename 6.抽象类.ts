abstract class Geom {
  width: number;
  getType() {
    return "Gemo";
  }
  // 抽象方法
  abstract getArea(): number;
}

class Circle extends Geom {
  getArea(): number {
    return 123;
  }
}
