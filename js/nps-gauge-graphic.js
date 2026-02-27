class NPSGauge {

    constructor(container) {
        this.container = container;
        this.needle = container.querySelector(".gauge-needle");
        this.value = parseFloat(container.dataset.value) || 0;

        this.centerX = 266;
        this.centerY = 270;

        this.update(this.value);
    }

    map(value) {
        return (value + 100) * (180 / 200) - 90;
    }

    update(value) {
        const angle = this.map(value);

        this.needle.setAttribute(
            "transform",
            `rotate(${angle} ${this.centerX} ${this.centerY})`
        );
    }
}

document.querySelectorAll(".nps-gauge")
    .forEach(el => new NPSGauge(el));