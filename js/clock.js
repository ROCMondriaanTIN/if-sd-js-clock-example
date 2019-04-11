class Clock {

    constructor(elementId) {
        this.timeElement = document.getElementById(elementId);
        this.timerId = -1;
    }

    start() {
        this.timerId = window.setInterval(() => {
            this.update();
        },
        1000);
    }

    stop() {
        if(this.timerId != -1) {
            window.clearInterval(this.timerId);
            this.timerId = -1;
        } 
    }

    update() {
        this.timeElement.innerHTML = new Date();
    }
}