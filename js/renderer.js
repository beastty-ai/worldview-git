class Renderer {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.dirty = true; // Flag to check if canvas needs to be updated
    }

    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    draw() {
        if (this.dirty) {
            this.clear();
            // Your drawing logic goes here

            this.dirty = false; // Reset the dirty flag after drawing
        }
    }

    markDirty() {
        this.dirty = true; // Set the dirty flag when the canvas needs to be updated
    }
}