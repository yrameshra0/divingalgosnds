export default function newLinkedList(elems) {
    let entryNode = undefined,
        kThElem = undefined;

    function createNode(elem) {
        return {
            data: elem,
            next: undefined
        };
    }

    ( function generateLinkedList() {
        elems.forEach((elem) => {
            let newNode = createNode(elem);
            newNode.next = entryNode;

            entryNode = newNode;
        });
    } )();

    function recurKElem(k) {
        ( function kThFromLast(k, traverseNode) {
            if (traverseNode === undefined)
                return 0;

            let currVal = kThFromLast(k, traverseNode.next) + 1;

            if (currVal === k)
                kThElem = createNode(traverseNode.data);

            return currVal;
        } )(k, entryNode);
    }

    function iterKElem(k) {
        let pointer1 = entryNode,
            pointer2 = entryNode;

        for (let i = 0; i < k; i++)
            pointer1 = pointer1.next;

        while (pointer1 != undefined) {
            pointer1 = pointer1.next;
            pointer2 = pointer2.next;
        }

        kThElem = createNode(pointer2.data);
    }

    function getKThElem() {
        return kThElem;
    }

    return {
        recurKElem: recurKElem,
        iterKElem: iterKElem,
        getKThElem: getKThElem
    }
}