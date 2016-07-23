export default function createQueue() {
    let createNode = function createNode(data) {
            return {
                data: data,
                next: undefined
            };
        },
        entryNode = undefined,
        exitNode = undefined,
        enqueue = function enqueue(data) {
            let newNode = createNode(data);
            if (exitNode === undefined)
                exitNode = newNode;

            newNode.next = entryNode;
            entryNode = newNode;
        },
        dequeue = function dequeue() {
            let returnData = exitNode === undefined ? undefined : exitNode.data;

            ( function reinstateExitNode(node) {
                if (node === undefined)
                    return;

                let isLastNode = node.next === undefined && node === exitNode,
                    isNonLastNode = node.next === exitNode;

                if (isLastNode)
                    entryNode = exitNode = undefined;

                if (isNonLastNode) {
                    exitNode = node;
                    exitNode.next = undefined;
                }

                reinstateExitNode(node.next);
            } )(entryNode);
            return returnData;
        },
        peek = function peek() {
            return entryNode !== undefined ? entryNode.data : undefined;
        };

    return {
        enqueue: enqueue,
        dequeue: dequeue,
        peek: peek
    };
}