// app-state.js

class AppState {
    constructor() {
        this.camera = {};
        this.ui = {};
        this.data = {};
        this.input = {};
    }

    // Camera State Getters/Setters
    getCameraState() {
        return this.camera;
    }

    setCameraState(cameraState) {
        this.camera = cameraState;
    }

    // UI State Getters/Setters
    getUIState() {
        return this.ui;
    }

    setUIState(uiState) {
        this.ui = uiState;
    }

    // Data State Getters/Setters
    getDataState() {
        return this.data;
    }

    setDataState(dataState) {
        this.data = dataState;
    }

    // Input State Getters/Setters
    getInputState() {
        return this.input;
    }

    setInputState(inputState) {
        this.input = inputState;
    }
}

const appState = new AppState();

export default appState;
