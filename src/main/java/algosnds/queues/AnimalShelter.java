package algosnds.queues;


import java.util.LinkedList;

public class AnimalShelter {
    private final LinkedList<Dog> dogList;
    private final LinkedList<Cat> catList;

    public AnimalShelter() {
        this.dogList = new LinkedList<>();
        this.catList = new LinkedList<>();
    }

    public void enqueue(Animal animal) {
        enqueueCat(animal);
        enqueueDog(animal);
    }

    private void enqueueCat(Animal animal) {
        if (animal instanceof Cat)
            catList.addLast((Cat) animal);
    }

    private void enqueueDog(Animal animal) {
        if (animal instanceof Dog)
            dogList.addLast((Dog) animal);
    }

    public Animal dequeueCat() {
        return catList.removeFirst();
    }

    public Animal dequeueDog() {
        return dogList.removeFirst();
    }

    public Animal dequeueAny() {
        if (dogList.isEmpty())
            return dequeueCat();

        if (catList.isEmpty())
            return dequeueDog();

        if (dogList.peekFirst().tick > catList.peekFirst().tick)
            return dequeueCat();
        else
            return dequeueDog();
    }

    public static class Animal {
        public final String name;
        public final long tick = System.currentTimeMillis();

        public Animal(String name) {
            this.name = name;
        }
    }

    public static class Dog extends Animal {
        public Dog(String name) {
            super(name);
        }
    }

    public static class Cat extends Animal {

        public Cat(String name) {
            super(name);
        }
    }
}
