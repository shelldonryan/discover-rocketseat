class Athlete {
    weight;
    category;

    constructor(weight) {
        this.weight = weight;
    }

    defineCategory() {
        if (this.weight <= 50) {
            this.category = 'childish'
        }
        else if (this.weight <= 65) {
            this.category = 'juvenile'
        }
        else {
            this.category = 'major'
        }
    }
}

class Fighter extends Athlete {
    constructor(weight) {
        super(weight);
    }

    defineCategory() {
        if (this.weight <= 54) {
            this.category = 'featherweight'
        }
        else if (this.weight <= 60) {
            this.category = 'lightweight'
        }
        else if (this.weight <= 75) {
            this.category = 'Light Welterweight'
        }
        else {
            this.category = 'heavyweight'
        }
    }
}