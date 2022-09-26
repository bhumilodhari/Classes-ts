// class Player {
//   public readonly first: string;
//   public readonly last: string;
//   private score: number = 0;

//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//   }

//   private secretMethod(): void {
//     console.log("Yeahhhh");
//   }
// }

// const bhumi = new Player("Bhumi", "Lodhari");
// bhumi.secretMethod();

class Player {
  //   private score: number = 0;
  constructor(
    public first: string,
    public last: string,
    protected _score: number
  ) {}

  private secretMethod(): void {
    console.log("Yeahhhh");
  }
  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score must be Positive");
    }
    this._score = newScore;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 22222222;
  }
}

const bhumi = new Player("Bhumi", "Lodhari", 22);
bhumi.fullName;
bhumi.score = 2222;

interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

class Bike implements Colorful {
  constructor(public color: string) {}
  // color = "black";
}

class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}

  print() {
    console.log(`${this.color} ${this.brand} jacket`);
  }
}

const bike1 = new Bike("black");

const jacket1 = new Jacket("prada", "black");

interface Payable {
  getPay(): number;
}
abstract class Employee {
  constructor(public first: string, public last: string) {}
  abstract getPay(): number;
  greet() {
    console.log("Heyyyyy!11");
  }
}

class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last);
  }
  getPay(): number {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    first: string,
    last: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

const Bhumi = new FullTimeEmployee("bhumi", "Lodhari", 95000);
console.log(Bhumi.getPay());

const bill = new PartTimeEmployee("bhumi", "Lodhari", 24, 1100);

console.log(bill.getPay());
