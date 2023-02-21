// 1. class 的访问类型：public private protected
//    public：允许在类的内外被调用
//    private：允许在类内被使用
//    protected：允许在类内及继承的子类中使用
class Person {
  age: string; // 没有定义访问类型，默认带有 public 访问类型
  protected name: string;
  sayHi() {
    console.log(this.name);
    console.log("Hi");
  }
  constructor() {
    this.name = "";
    this.age = "";
  }
}
class Teacher_3 extends Person {
  sayBye() {
    console.log(this.name);
  }
}
const person = new Person();
// person.name = "dell";
person.sayHi();

// 2. class constructor 初体验
//    constructor 会在 new 一个实例的时候自动调用
class Person_1 {
  // 传统写法
  // private name: string;
  // constructor(name: string) {
  //   this.name = name;
  // }
  // 简化写法
  constructor(public name: string) {}
  // 两种写法等价，推荐使用简化写法
}
const person_1 = new Person_1("dell");

// 3. super 关键字
//    使用 class 关键字继承父类时，如果子类用到了 constructor ，需要在 constructor 中调用一下 super(),
//    并把需要的参数传过去，就算没有参数要传，也要写一个空的 super()
class Person_2 {
  constructor(public name: string) {}
}
class Teacher_4 extends Person_2 {
  constructor(public age: number) {
    super("dell");
  }
}
const teacher_3 = new Teacher_4(28);
console.log(teacher.name);
console.log(teacher.age);
