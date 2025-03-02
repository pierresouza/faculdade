// listas de conjuntos de dados
void manipulateList() {
  List<String> fruits = ['apple', 'banana', 'orange'];

  // ignore: avoid_print
  print(fruits[0]);

  fruits.add('grape');

  // ignore: avoid_print
  print(fruits);
}

// maps
void manipulateMap() {
  Map<String, String> capitals = {
    'Usa': 'Washington',
    'France': 'Paris',
    'Japan': 'Tokyo',
  };
  // ignore: avoid_print
  print(capitals['Usa']);

  capitals['Germany'] = 'Berlin';

  // ignore: avoid_print
  print(capitals);
}

// operações comuns
void iterateList() {
  List<String> fruits = ['apple', 'banana', 'orange'];

  for (var fruit in fruits) {
    // ignore: avoid_print
    print(fruit);
  }
}

// Manipulação de elementos
void manipulateElements() {
  List<int> numbers = [1, 2, 3, 4, 5];

  numbers.removeAt(2);

  // ignore: avoid_print
  print(numbers);
}

void main() {
  manipulateList();
  manipulateMap();
  iterateList();
  manipulateElements();
}
