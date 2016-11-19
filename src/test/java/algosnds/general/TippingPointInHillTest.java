package algosnds.general;

import org.junit.Test;

import static algosnds.general.TippingPointInHill.Occurrence;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

public class TippingPointInHillTest {

    private TippingPointInHill tippingPoint = new TippingPointInHill();

    @Test
    public void tipping_point_exactly_at_mid() {
        Occurrence occurrence = tippingPoint.search(new int[]{10, 12, 14, 18, 16, 10, 9});

        assertThat(occurrence, is(new Occurrence(18, 3)));
    }

    @Test
    public void tipping_point_when_not_at_mid() {
        assertThat(tippingPoint.search(new int[]{10, 12, 14, 16, 18, 10, 9}), is(new Occurrence(18, 4)));
        assertThat(tippingPoint.search(new int[]{10, 12, 18, 16, 14, 10, 9}), is(new Occurrence(18, 2)));
    }

    @Test
    public void tipping_point_at_ever_increasing_hill() throws Exception {
        assertThat(tippingPoint.search(new int[]{10, 12, 14, 16, 18}), is(new Occurrence(18, 4)));
    }

    @Test
    public void tipping_point_at_ever_decreasing_hill() throws Exception {
        assertThat(tippingPoint.search(new int[]{18, 16, 14, 12, 10}), is(new Occurrence(18, 0)));
    }
}