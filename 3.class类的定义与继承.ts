class Person_6 {
  name = "dell";
  getName() {
    return this.name;
  }
}

// 1. class 使用 extends 关键字实现继承
//    子类不但拥有父类所有的属性、方法，还可以定义自己的属性、方法
//    子类还可对父类的属性、方法进行覆写
class Teacher extends Person_6 {
  // name = "teacher";
  getTeacherName() {
    return "Teacher";
  }
}
const teacher_1 = new Teacher();
console.log(teacher_1.getName()); // dell
console.log(teacher_1.getTeacherName()); // Teacher

// 2. super 关键字
//    super 指向的父类，可以将 super 理解成父类
//    super 的用法常见于，覆写了父类的方法之后，利用 super 可以再次使用父类的方法
class Teacher_1 extends Person_6 {
  name = "teacher";
  getTeacherName() {
    return "Not Teacher";
  }
  getName(): string {
    return super.getName() + "lee";
  }
}
const teacher_2 = new Teacher_1();
console.log(teacher_2.getName()); // teacherlee
