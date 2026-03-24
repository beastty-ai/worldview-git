class Board {
    constructor() {
        this.nodes = {};
        this.edges = {};
    }

    addNode(nodeId, data) {
        if (!this.validateNodeId(nodeId)) {
            throw new Error('Invalid node ID');
        }
        this.nodes[nodeId] = data;
    }

    updateNode(nodeId, data) {
        if (!this.validateNodeId(nodeId)) {
            throw new Error('Invalid node ID');
        }
        if (!this.nodes[nodeId]) {
            throw new Error('Node does not exist');
        }
        this.nodes[nodeId] = data;
    }

    deleteNode(nodeId) {
        if (!this.validateNodeId(nodeId)) {
            throw new Error('Invalid node ID');
        }
        delete this.nodes[nodeId];
        // Remove edges connected to this node
        for (let edge in this.edges) {
            if (this.edges[edge].includes(nodeId)) {
                delete this.edges[edge];
            }
        }
    }

    addEdge(edgeId, nodeA, nodeB) {
        if (!this.validateNodeId(nodeA) || !this.validateNodeId(nodeB)) {
            throw new Error('Invalid node IDs');
        }
        this.edges[edgeId] = [nodeA, nodeB];
    }

    deleteEdge(edgeId) {
        delete this.edges[edgeId];
    }

    validateNodeId(nodeId) {
        return typeof nodeId === 'string' && nodeId.length > 0;
    }
}