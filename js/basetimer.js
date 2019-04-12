class BaseTimer {

    constructor() {
        this.timerId = -1;
    }

    start() {
        if(this.timerId == -1) {
            this.timerId = window.setInterval(() => {
                this.update();
            },
            1000);
        }
    }

    stop() {
        if(this.timerId != -1) {
            window.clearInterval(this.timerId);
            this.timerId = -1;
        } 
    }

    update() {
        // Implement this methode in a child class
    }
}