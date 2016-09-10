package algosnds.graphnodepathsearch;

import java.util.LinkedList;

public class GraphNodePathSearch {

    public boolean search(Node start, Node end) {
        LinkedList<Node> queue = new LinkedList<>();
        queue.add(start);

        while (!queue.isEmpty()) {
            Node root = queue.removeFirst();
            root.visited = true;

            if (root.data.equalsIgnoreCase(end.data))
                return true;

            root.adjacent.forEach(adjacent -> {
                if (!adjacent.visited) {
                    queue.add(adjacent);
                }
            });
        }

        return false;
    }
}
