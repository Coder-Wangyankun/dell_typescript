// interface 和 type 类似，但并不完全一致
interface Person {
  name: string;
}
type Person_1 = {
  name: string;
};
// 1. ts 中有一个约定俗成的规矩，能用 interface 就不用 type
const getPersonName = (person: Person_5) => {
  console.log(person.name);
};
const setPersonName = (person: Person, name: string) => {
  person.name = name;
};

// 2. interface 的参数是可选的，该怎么写？ 使用 ?
interface Person_2 {
  name: string;
  age?: number;
}

// 3. interface 支持把属性设置为只读的，使用 readonly
interface Person_3 {
  readonly name: string;
  age?: number;
}

// 4. interface 中没有定义的属性，使用变量的方式传入目标函数，对象中相比 interface 定义多了一个参数，不会报错
//                             而使用字面量的方式传入目标函数，对象中相比 interface 定义多了一个参数，会报错
//                             原因是字面量形式的参数会被强校验，需要完全符合接口要求
const person = {
  name: "dell",
  sex: "male",
  say() {
    return "";
  },
};
getPersonName(person);
// getPersonName({
//   name: "dell",
//   sex: "male",
// }); // 报错，对象字面量只能指定已知属性

// 5. 如果想让 interface 变得更灵活，让 “4” 中的字面量传参形式不报错，可以这样写：
interface Person_4 {
  name: string;
  age?: number;
  [propName: string]: any;
}

// 6. interface 中同样可以定义函数
interface Person_5 {
  name: string;
  age?: number;
  [propName: string]: any;
  say(): string;
}
getPersonName({
  name: "dell",
  sex: "male",
  say() {
    return "hello";
  },
});

// 7. 类 class 可以拥有 interface
class User_2 implements Person_5 {
  name = "dell";
  say() {
    return "";
  }
}

// 8. 接口之间互相可以继承 extend
// Teacher 除了拥有 Person_5 定义的所有属性方法，还有自己的方法 teach
interface Teacher extends Person_5 {
  teach(): string;
}

// 9. 接口除了定义对象，还可以定义一个函数
interface SayHi {
  (word: string): string;
}
const say: SayHi = (word) => {
  return word;
};
