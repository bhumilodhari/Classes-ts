class Player {
    static description = " Player oF THe MATCH"
    #score = 0;
    #numLives = 10;
    constructor(first, last) {
        this.first = first;
        this.last = last;
        this.#secret();
    }
    static randomPlayer() {
        return new Player("bhumi", "lodhari")
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    set fullName(newName) {
        const [first, last] = newName.split(' ');
        this.first = first;
        this.last = last;
    }
    get score() {
        return this.#score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score must be greater than 0")
        }
        this.#score = newScore;
    }
    // getScore() {
    //     return this.#score;
    // }
    updateScore(newScore) {
        this.#score = newScore;
    }
    taunt() {
        console.log("Yeahhhh");
    }
    loseLife() {
        this.#numLives -= 1;
    }
    #secret() {
        console.log("Yeah secret");
    }
}

class AdminPlayer extends Player {
    constructor(powers) {
        super(first, last);
        this.powers = powers;
    }
    isAdmin = true;
}
const admin = new AdminPlayer("admin", "macAdmin", ["yes", "no"]);


// const player1 = new Player("Bhumi", "Lodhari");
// player1.taunt();
// console.log(player1.first);
// console.log(player1.last);
// console.log(player1);
// console.log(player1.numLives);
// player1.loseLife();
// console.log(player1.numLives);
// console.log(player1.getScore());
// console.log(player1.updateScore(22));
// console.log(player1.getScore());

// console.log(player1.score);
// player1.score = 22;
// console.log(player1.score);
// player1.#secret();




// const player2 = new Player("BHUMIIIII", "Lodhari");
// player2.taunt();


// player1.score;
// player1.score = 233;
// player1.fullName;


console.log(player1.fullName)
player1.fullName = "BHUMIIIII Lodhari";
console.log(player1);