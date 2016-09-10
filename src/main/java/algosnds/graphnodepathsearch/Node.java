package algosnds.graphnodepathsearch;

import java.util.List;

public class Node {
    public final String data;
    public final List<Node> adjacent;
    public boolean visited = false;

    public Node(String data, List<Node> adjacent) {
        this.data = data;
        this.adjacent = adjacent;
    }
}