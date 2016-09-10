package algosnds.leastrecentlyusedcache;

import org.junit.Test;

import static java.util.Arrays.asList;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

public class LRUCacheTest {

    private static final int SIZE = 4;
    private LRUCache<String, Integer> lruCache = new LRUCache<>(SIZE);

    @Test
    public void put_new_key_value_pair() throws Exception {
        lruCache.put("key1", 1);
        Integer value = lruCache.get("key1");

        assertThat(value, is(1));
    }

    @Test
    public void get_status_of_lru_cache() throws Exception {
        lruCache.put("key1", 1);
        lruCache.put("key2", 2);
        lruCache.put("key3", 3);
        lruCache.put("key4", 4);

        // Updating the cache
        lruCache.get("key3");
        lruCache.get("key4");
        lruCache.get("key1");

        // Maxing out the cache
        lruCache.put("key5", 5);

        assertThat(lruCache.currentStatus(), is(asList("key5", "key1", "key4", "key3")));
    }
}
