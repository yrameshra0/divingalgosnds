package algosnds.leastrecentlyusedcache;

import java.util.*;

public class LRUCache<K, V> {
    private final int size;
    private final Map<K, Node<K, V>> nodeMap = new Hashtable<>();
    private Node lruList;

    public LRUCache(int size) {
        this.size = size;
    }

    private void placeNodeAtFrontOfLRUList(Node<K, V> node) {
        node.next = null;
        node.previous = lruList;
        lruList.next = node;
        lruList = lruList.next;
    }

    public void put(K key, V value) {
        if (nodeMap.size() == size)
            removeLeastUsedNode();

        Node<K, V> newNode = new Node<>(key, value);

        if (lruList == null)
            lruList = newNode;
        else
            placeNodeAtFrontOfLRUList(newNode);
        nodeMap.put(key, newNode);
    }

    private void removeLeastUsedNode() {
        Node lruClone = lruList.createClone();

        while (lruClone.previous != null)
            lruClone = lruClone.previous;

        nodeMap.remove(lruClone.key);
        Node next = lruClone.next;
        next.previous = null;
        lruClone.next = null;
        lruClone = null;
    }

    public V get(K key) {
        Node<K, V> node = nodeMap.get(key);
        updateLRUListForBubblingUpLatestFetch(node);

        return node.value;
    }

    private void updateLRUListForBubblingUpLatestFetch(Node<K, V> node) {
        Node next = node.next;
        Node previous = node.previous;

        if (previous != null)
            previous.next = next;

        if (next != null)
            next.previous = previous;

        placeNodeAtFrontOfLRUList(node);
    }

    public List<K> currentStatus() {
        List<K> list = new ArrayList<>(size);

        Node<K, V> lruClone = lruList.createClone();

        while (lruClone != null) {
            list.add(lruClone.key);
            lruClone = lruClone.previous;
        }

        return list;
    }

    private class Node<K, V> implements Cloneable {
        private final K key;
        private final V value;
        private Node previous = null;
        private Node next = null;

        public Node(K key, V value) {
            this.key = key;
            this.value = value;
        }

        @SuppressWarnings("unchecked")
        private Node<K, V> createClone() {
            try {
                return (Node<K, V>) clone();
            } catch (CloneNotSupportedException e) {
                e.printStackTrace();
            }
            return null;
        }
    }
}