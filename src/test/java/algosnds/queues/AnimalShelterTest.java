package algosnds.queues;

import algosnds.queues.AnimalShelter.Cat;
import algosnds.queues.AnimalShelter.Dog;
import org.junit.Test;

import java.util.NoSuchElementException;

import static org.hamcrest.CoreMatchers.instanceOf;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.Assert.fail;

public class AnimalShelterTest {
    private AnimalShelter shelter = new AnimalShelter();

    private void assertThrowsNotSuchElementException(Runnable runnable) {
        try {
            runnable.run();
            fail();
        } catch (Exception e) {
            assertThat(e, instanceOf(NoSuchElementException.class));
        }
    }

    @Test
    public void dequeue_empty_shelter() {
        assertThrowsNotSuchElementException(() -> shelter.dequeueDog());
        assertThrowsNotSuchElementException(() -> shelter.dequeueCat());
        assertThrowsNotSuchElementException(() -> shelter.dequeueAny());
    }

    @Test
    public void enqueue_dequeue_animals() {
        shelter.enqueue(new Dog("pluto"));
        shelter.enqueue(new Dog("jupiter"));
        shelter.enqueue(new Dog("mars"));
        shelter.enqueue(new Dog("saturn"));

        shelter.enqueue(new Cat("bruno"));
        shelter.enqueue(new Cat("coco"));
        shelter.enqueue(new Cat("shiro"));
        shelter.enqueue(new Cat("niro"));

        assertThat(shelter.dequeueCat().name, is("bruno"));
        assertThat(shelter.dequeueCat().name, is("coco"));

        assertThat(shelter.dequeueDog().name, is("pluto"));
        assertThat(shelter.dequeueDog().name, is("jupiter"));

        assertThat(shelter.dequeueAny().name, is("mars"));
        assertThat(shelter.dequeueAny().name, is("saturn"));
        assertThat(shelter.dequeueAny().name, is("shiro"));
        assertThat(shelter.dequeueAny().name, is("niro"));
    }
}
