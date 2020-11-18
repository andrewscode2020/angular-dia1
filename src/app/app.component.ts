import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // name = "Angular " + VERSION.major;
  title = "Mi propio título";
  nombreAnimal = '';
  animales = [];

  agregarAnimal() {
    this.animales.push(this.nombreAnimal)
  }
}
