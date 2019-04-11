class Main {
    constructor() {
        window.addEventListener("load", () => {
            this.main();
        });
    }

    main() {
        let clock = new Clock("clock");
        clock.start();

        let countdown = new Countdown("countdown", 10);
        countdown.start();
    }
}

new Main();
