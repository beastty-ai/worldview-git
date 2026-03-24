// js/storage.js

// Function to save a project to localStorage
function saveProject(projectName, projectData) {
    localStorage.setItem(projectName, JSON.stringify(projectData));
}

// Function to load a project from localStorage
function loadProject(projectName) {
    const projectData = localStorage.getItem(projectName);
    return projectData ? JSON.parse(projectData) : null;
}

// Function to export a project as a JSON file
function exportProject(projectName) {
    const projectData = loadProject(projectName);
    if (projectData) {
        const dataStr = JSON.stringify(projectData);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = `${projectName}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
}

// Function to import a project from a JSON file
function importProject(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const projectData = JSON.parse(e.target.result);
            saveProject(file.name.replace('.json', ''), projectData);
        };
        reader.readAsText(file);
    }
}