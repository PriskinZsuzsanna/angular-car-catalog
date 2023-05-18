import { Component } from '@angular/core';
import { Car } from './car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-car-catalog';
  error: boolean = false;
  edit: boolean = false
  carEdit:any
  type = ""
  year = 2023
  price = 0
  note = ""
  availability = true
  id = Math.random()
  

  
  
  cars: Array<Car>
  constructor() {
    this.cars = new Array<Car>()
  }
  
  actual: Car = new Car("", 0, 0, "", "", Math.random());
 
  ngOnInit(): void {
    const localData = localStorage.getItem("angular-cars")
    if (localData != null) {
      this.cars = JSON.parse(localData)
    }
  }


  addCar() {
    console.log(this.actual.getCopy())
    if (this.actual.type != "" && this.actual.year != 0 && this.actual.price != 0) {
      this.cars.push(this.actual.getCopy())
      localStorage.setItem("angular-cars", JSON.stringify(this.cars))
      this.actual = new Car("", 2023, 0, "", "", Math.random())
      console.log(this.cars)
    } else {
      this.error = true
      setTimeout(() => {
        this.error = false
      }, 3000)
    }
  }

  editCar(id:number){
    this.carEdit = this.cars.filter(car => car.id == id);
    this.edit = true

  }

  addEditedCar() {
    console.log(this.cars)
    localStorage.setItem("angular-cars", JSON.stringify(this.cars))
    this.edit = false
  }

  deleteCar(id:number){
    this.cars = this.cars.filter(car => car.id != id)
    localStorage.setItem("angular-cars", JSON.stringify(this.cars))
  }
}
