class Game {
    constructor() {
        this.players = [1, 2];
    }

    partSum() {
        for (let player of this.players) {
            let fields = document.querySelectorAll(".player" + player + ".part_sum");
            let sum = 0;

            for (let field of fields) {
                if (!isNaN(Number(field.valueAsNumber))) {
                    sum += Number(field.valueAsNumber);
                }
            }

            let partsum_field = document.querySelector(".sum1 .player" + player);
            partsum_field.innerHTML = sum;
        }
    }
}