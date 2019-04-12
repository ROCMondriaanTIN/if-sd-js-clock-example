class Countdown extends BaseTimer {

    constructor(elementId, time) {
        super(elementId);
        this.time = time;
        this.timeElement = document.getElementById(elementId);
    }

    update() {
        if(this.time <= 0) {
            this.stop();
        }
        this.timeElement.innerHTML = this.time-- + " seconds";
    }
}