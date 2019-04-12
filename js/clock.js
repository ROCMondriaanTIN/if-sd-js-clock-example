class Clock extends BaseTimer {

    constructor(elementId) {
        super();
        this.timeElement = document.getElementById(elementId);
    }

    update() {
        this.timeElement.innerHTML = new Date();
    }
}