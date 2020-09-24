class Die {
    constructor(id) {
        this.value = this.getNewValue();
        this.id = id;
    }

    throw() {
        this.value = this.getNewValue();

        document.getElementById(this.id).value = this.value;
    }

    getNewValue() {
        return Math.floor(Math.random() * 6) + 1;
    }
}

