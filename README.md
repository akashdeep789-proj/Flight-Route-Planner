Problem Statement:The project aims to develop a Route Planning System that helps flight to find the shortest path between two cities using Dijkstra's Algorithm. The system allows users to select a source and destination from a predefined set of cities and then displays the shortest route with the minimum distance between two cities.

Objective:The main objective of this project is to implement a route planning system with an interactive graphical user interface (GUI) that provides a visual representation of the cities and their connections. The system will help users understand the shortest path between locations and the associated travel distance.

Introduction:Route planning is an essential problem in transportation and navigation. Finding the shortest and most cost-effective route between two locations is useful in various real-life applications like GPS navigation, logistics, and city planning. In this project, we use Dijkstra's Algorithm to determine the shortest path between cities, ensuring efficiency and accuracy in finding the optimal route.

Set of Input and Output Used:

Input:

Predefined list of cities with their connections and shortest path.

User-selected source and destination cities from dropdown menus.

Output:

The shortest path between the selected cities.

The shortest path for traveling from the source to the destination.

A graphical representation of the cities and their connections with the shortest path highlighted in a distinct color.

Algorithm Used:The project utilizes Dijkstra's Algorithm, which is a well-known graph traversal algorithm used to find the shortest path between nodes in a graph. The algorithm works as follows:

Assign an initial distance of infinity to all nodes except the source, which is set to zero.

Update the distances of neighboring nodes if a shorter path is found.

Repeat the process until the destination node is reached or all nodes are visited.

Trace back the shortest path and display it to the user.

Advantages and Disadvantages:

Advantages:

Guarantees the shortest path from the source to the destination.

Works efficiently for graphs with non-negative weights.

Provides a clear and visual representation of routes using a GUI.

Disadvantages:

Does not work well with graphs that have negative weight cycles.

Computationally expensive for large graphs.

Requires a predefined set of cities and connections, limiting flexibility.

Constraints:

The system works only with a predefined set of cities and road connections.

The algorithm does not support negative edge weights.

The graphical representation is limited to a fixed number of cities and predefined coordinates.

The efficiency of the algorithm depends on the number of cities and connections; larger networks may increase computation time.

This project provides an interactive and visual way to understand and apply route planning concepts using Dijkstra's Algorithm. It can be further enhanced by adding real-time map integration and dynamic city connections.
