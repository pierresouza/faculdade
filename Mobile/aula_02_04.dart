class Car {
  String model;
  int year;

  Car(this.model, this.year);

  void displayInfo() {
    print("Model: $model, Year: $year");
  }
}

void main() {
  Car myCar = Car("Fusca", 1970);
  myCar.displayInfo();
}
