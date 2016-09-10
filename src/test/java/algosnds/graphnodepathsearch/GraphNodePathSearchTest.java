package algosnds.graphnodepathsearch;

import org.junit.Test;

import static java.util.Arrays.asList;
import static java.util.Collections.emptyList;
import static java.util.Collections.singletonList;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

public class GraphNodePathSearchTest {
    private Node sixth = new Node("6", emptyList());
    private Node fifth = new Node("5", emptyList());
    private Node fourth = new Node("4", singletonList(fifth));
    private Node third = new Node("3", emptyList());
    private Node second = new Node("2", singletonList(fourth));
    private Node first = new Node("1", asList(second, third));
    private GraphNodePathSearch graphNodePathSearch = new GraphNodePathSearch();

    @Test
    public void returns_true_when_graph_nodes_are_connected() throws Exception {
        assertThat(graphNodePathSearch.search(first, third), is(true));
    }

    @Test
    public void returns_false_when_gaph_nodes_are_not_connected() throws Exception {
        assertThat(graphNodePathSearch.search(first, sixth), is(false));
        assertThat(graphNodePathSearch.search(second, third), is(false));
    }
}
