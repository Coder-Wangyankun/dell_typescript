// 1. Getter 和 Setter
//    常用于使用 Getter 在外部访问私有变量，Setter 在外部设置私有变量
class Person_3 {
  // 开发中，私有属性前常常加一个下划线_
  constructor(private _name: string) {}
  // 而给外部访问提供的 Getter Setter 不加下划线_
  get name() {
    // 外部使用 Setter 设置的值有可能不是真正的值，Setter 中往往对数据进行处理
    return this._name + "lee";
  }
  set name(name: string) {
    const realName = name.split(" ")[0];
    this._name = realName;
  }
}
const person_2 = new Person_3("dell");
console.log(person_2.name);
person_2.name = "dell lee";
console.log(person_2.name);

// 2. 设计模式 --- 单例模式
// 只允许通过一个类生成一个类的实例
// static：把方法挂到 class 上，而不是实例上
class Demo {
  private static instance: Demo;
  private constructor(public name: string) {}
  static getInstance() {
    if (!this.instance) {
      this.instance = new Demo("dell lee");
    }
    return this.instance;
  }
}
// 调用两次 实际上只生成一次实例
const demo1 = Demo.getInstance();
const demo2 = Demo.getInstance();
console.log(demo1);
console.log(demo2);
