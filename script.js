const flightGraph = [
    [0, 300, 0, 600, 1500, 0, 0, 0, 0, 0],
    [300, 0, 500, 0, 0, 900, 0, 0, 0, 0],
    [0, 500, 0, 250, 200, 0, 400, 0, 0, 0],
    [600, 0, 250, 0, 800, 0, 0, 700, 0, 0],
    [1500, 0, 200, 800, 0, 0, 0, 0, 1000, 0],
    [0, 900, 0, 0, 0, 0, 300, 0, 0, 0],
    [0, 0, 400, 0, 0, 300, 0, 500, 0, 0],
    [0, 0, 0, 700, 0, 0, 500, 0, 600, 0],
    [0, 0, 0, 0, 1000, 0, 0, 600, 0, 750],
    [0, 0, 0, 0, 0, 0, 0, 0, 750, 0]
];

const cityNames = [
    "City 0", "City 1", "City 2", "City 3", "City 4",
    "City 5", "City 6", "City 7", "City 8", "City 9"
];

// Function to populate dropdowns
function populateDropdowns() {
    let sourceDropdown = document.getElementById("source");
    let destinationDropdown = document.getElementById("destination");

    cityNames.forEach((city, index) => {
        let option1 = new Option(city, index);
        let option2 = new Option(city, index);
        sourceDropdown.add(option1);
        destinationDropdown.add(option2);
    });
}

// Function to find the shortest path using Dijkstra
function findRoute() {
    let source = parseInt(document.getElementById("source").value);
    let destination = parseInt(document.getElementById("destination").value);

    let shortestDistance = dijkstra(flightGraph, source, destination);

    document.getElementById("result").innerHTML =
        `Shortest path from ${cityNames[source]} to ${cityNames[destination]} is: ${shortestDistance} km`;
}

// Dijkstra's Algorithm
function dijkstra(graph, src, dest) {
    let V = graph.length;
    let dist = Array(V).fill(Infinity);
    let visited = Array(V).fill(false);
    dist[src] = 0;

    for (let i = 0; i < V - 1; i++) {
        let u = minDistance(dist, visited);
        visited[u] = true;

        for (let v = 0; v < V; v++) {
            if (!visited[v] && graph[u][v] !== 0 && dist[u] !== Infinity && dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }

    return dist[dest];
}

// Helper function to find the vertex with minimum distance
function minDistance(dist, visited) {
    let min = Infinity, minIndex = -1;

    for (let v = 0; v < dist.length; v++) {
        if (!visited[v] && dist[v] <= min) {
            min = dist[v];
            minIndex = v;
        }
    }

    return minIndex;
}

// Populate dropdowns when the page loads
window.onload = populateDropdowns;