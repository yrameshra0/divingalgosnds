package algosnds.lists;

import org.junit.Test;

import static algosnds.lists.Node.newNode;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsNull.nullValue;

public class NodeTest {

    @Test
    public void creates_new_node() {
        Node<Integer> node = newNode(3);
        assertThat(node.data, is(3));
        assertThat(node.next, nullValue());
    }
}