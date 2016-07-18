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
        if (exitNode === undefined && entryNode === undefined) {
            exitNode = newNode;
            entryNode = newNode;
        } else {
            newNode.next = entryNode;
            entryNode = newNode;
        }
    },
    dequeue = function dequeue() {
        let returnData = exitNode === undefined ? undefined : exitNode.data;

        ( function reinstateExitNode(node) {
            if (node !== undefined) {
                let lastNodeCheck = node.next === undefined && node === exitNode,
                    nonLastNodeCheck = node.next === exitNode;
                if (lastNodeCheck) {
                    exitNode = undefined;
                    entryNode = undefined;
                }
                if (nonLastNodeCheck) {
                    exitNode = node;
                    node.next = undefined;
                }
                else
                    reinstateExitNode(node.next);
            }
        } )(entryNode);

        return returnData;
    };

export { enqueue, dequeue };