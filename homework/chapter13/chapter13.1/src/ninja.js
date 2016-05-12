class Ninja {
    constructor(name) {
        this.name = name;
    }

    announce() {
        return `Ninja ${this.name} is here!`;
        // equivalent to:
        // return 'Ninja turtle ' + this.name + ' is here!';
    }
}

alert(new Ninja('Leonardo').announce());
