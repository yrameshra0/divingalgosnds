package algosnds.lists;

public class CircularLinkedList {
	public <T> Node<T> circularAt(Node<T> list){
		Node<T> head = list;
		Node<T> slow = head;
		Node<T> fast = head;

		while(fast!=null && fast.next !=null){
			slow = slow.next;
			fast = fast.next.next;

			if(slow==fast)
				break;
		}

		if(fast==null || fast.next ==null)
			return null;

		slow = head;

		while (slow!=fast) {
			slow = slow.next;
			fast = fast.next;
		}

		return fast;
	} 
}