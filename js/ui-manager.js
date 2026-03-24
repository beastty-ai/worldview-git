class UIManager {
    constructor() {
        this.panels = [];
        this.modals = [];
    }

    addPanel(panel) {
        this.panels.push(panel);
    }

    removePanel(panel) {
        this.panels = this.panels.filter(p => p !== panel);
    }

    showPanel(panel) {
        panel.style.display = 'block';
    }

    hidePanel(panel) {
        panel.style.display = 'none';
    }

    addModal(modal) {
        this.modals.push(modal);
    }

    showModal(modal) {
        modal.style.display = 'block';
    }

    hideModal(modal) {
        modal.style.display = 'none';
    }

    // Method for managing detail views
    showDetailView(view) {
        // Implementation to show detail view
        console.log('Displaying detail view:', view);
    }

    hideDetailView(view) {
        // Implementation to hide detail view
        console.log('Hiding detail view:', view);
    }
}

export default UIManager;