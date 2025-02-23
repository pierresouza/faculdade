// void greet(String name) {
//   print('Olá, $name!');
// }

// void main() {
//   greet("pierre");
// }

//

// int add(int a, int b) {
//   return a + b;
// }

// void main() {
//   int result = add(1, 2);
//   print(result);
// }

// void main() {
//   var list = ['apple', 'banana', 'orange'];

//   list.forEach((item) {
//     print('Item: $item');
//   });
// }

// int multiply(int a, int b) => a * b;

// void main() {
//   print('Multiply: ${multiply(2, 3)}');
// }

class Person {
  String name;
  int age;

  Person(this.name, this.age);

  void introduce() {
    print('Olá, meu nome é $name e tenho $age anos.');
  }
}

void main() {
  var person = Person('Pierre', 25);
  person.introduce();
}
