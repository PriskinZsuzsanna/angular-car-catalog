export class Car {
    type: string = "";
    year: number = 2023;
    price: number = 0;
    note: string = "";
    availability: string = "";
    id: number = Math.random()

    constructor (type: string, year: number, price:number, note: string, availability:string, id:number){
        type = this.type;
        year = this.year;
        price = this.price;
        note = this.note;
        availability = this.availability;
        id= this.id;
    }

    getCopy(): Car {
        let c = new Car ("", 2023, 0, "", "", Math.random())
        c.type = this.type;
        c.year = this.year;
        c.price = this.price;
        c.note = this.note;
        c.availability = this.availability;
        c.id= this.id;
        return c
    }
}


