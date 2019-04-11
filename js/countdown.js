class Countdown extends Clock {

    constructor(elementId, time) {
        super(elementId);
        this.time = time;
    }

    update() {
        if(this.time <= 0) {
            this.stop();
        }
        this.timeElement.innerHTML = this.time-- + " seconds";
    }
}