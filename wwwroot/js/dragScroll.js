(function () {
    let isDragging = false;

    window.dragAutoScroll = function (e) {
        e.preventDefault();

        const container = e.currentTarget;
        if (!container) return;

        const rect = container.getBoundingClientRect();

        const thresholdY = parseInt(container.dataset.autoscrollThreshold || "60", 10);
        const maxSpeed = parseInt(container.dataset.autoscrollSpeed || "40", 10);

        const mouseY = e.clientY; // fixed lowercase

        let dy = 0;

        if (mouseY < rect.top + thresholdY) {
            const intensity = (rect.top + thresholdY - mouseY) / thresholdY;
            dy = -Math.ceil(maxSpeed * intensity);
        } else if (mouseY > rect.bottom - thresholdY) {
            const intensity = (mouseY - (rect.bottom - thresholdY)) / thresholdY;
            dy = Math.ceil(maxSpeed * intensity);
        }

        if (dy !== 0) {
            container.scrollBy(0, dy);
        }
    };

 
})();
