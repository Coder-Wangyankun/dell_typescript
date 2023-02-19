// 1. 基础类型 number string boolean null undefined symbol void ...
const count: number = 123;

// 2. 对象类型 {} [] class function
const teacher: {
  name: string;
  age: 18;
} = {
  name: "Dell",
  age: 18,
};

const numbers: number[] = [1, 2, 3];

class Person {}
const dell: Person = new Person();

const getTotal: () => number = () => {
  return 123;
};

// 3. type annotation 类型注解，开发者告诉 TS 变量是什么类型
//    type inference 类型推断， TS 会自动的去尝试分析变量的类型
//    如果 TS 能够自动分析变量的类型，开发者什么也不需要做
//    如果 TS 无法分析变量类型的话，开发者需要手动做类型注解

let countNumber = 1; // 无需注解

const firstNumber = 1;
const secondNumber = 2;
const total = firstNumber + secondNumber; // 无需注解

function getTotals(firstNumber: number, secondNumber: number) {
  return firstNumber + secondNumber;
}
const total_1 = getTotals(1, 2); // 需要注解

// 4. 函数相关类型
// ① 函数的入参与返回值最好都定义上类型，如果有把握可以不写
function add(first: number, second: number): number {
  return first + second;
}
// ② 函数返回值类型：void，代表该函数没有返回值
function sayHello(): void {
  console.log("hello");
}

// ③ 函数返回值类型：never，代表该函数永远无法执行到终点，常见于 throw Error、while 循环
function errorEmmiter(): never {
  throw Error();
  console.log("error");
}

// ④ 函数参数是对象解构情况的注解写法
function add_1({ first, second }: { first: number; second: number }): number {
  return first + second;
}
const total_2 = add_1({ first: 1, second: 2 });

// ⑤ 函数常见的两种写法
const func = (str: string) => {
  return parseInt(str, 10);
};

const func_1: (str: string) => number = (str) => {
  return parseInt(str, 10);
};
// 怎么理解上面两种写法？
// = 后面跟的是函数的实现，: 后面跟的是函数的类型，这样就比较好理解了

// 5. 数组
// ① 简单用法
const arr: (number | string)[] = [1, "2"];

// ② 如何声明对象数组
const objectArr: { name: string; age: number }[] = [
  {
    name: "Dell",
    age: 18,
  },
];
// 如果对象属性过多，看起来会比较繁琐，可以讲类型注解抽离出来
// 可以使用 type 或 class
type User = {
  name: string;
  age: 18;
};
class User_1 {
  name: string;
  age: 18;
}
const objectArr_1: User[] = [
  {
    name: "Dell",
    age: 18,
  },
];
const objectArr_2: User_1[] = [
  new User_1(),
  {
    name: "Dell",
    age: 18,
  },
];

// 6. 元祖 tuple
// 理解为类型、长度固定的数组
const teacherInfo: [string, string, number] = ["Dell", "male", 18];
// 定义 csv 数据结构
const teacherList: [string, string, number][] = [
  ["dell", "make", 20],
  ["dell", "make", 20],
  ["dell", "make", 20],
];
