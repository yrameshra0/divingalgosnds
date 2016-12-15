export default function newTree() {

    let createTreeNode = function createTreeNode(data) {
            return {
                data: data,
                left: undefined,
                right: undefined,
                parent: undefined,
                size: 0
            };
        },
        root = undefined,
        insertInOrder = function insertInOrder(data) {
            if (root === undefined) {
                root = createTreeNode(data);
                ++root.size;
            } else {
                insertInOrderRecur(root, data);
            }
        },
        insertInOrderRecur = function insertInOrder(node, data) {
            if (data < node.data) {
                if (node.left === undefined) {
                    node.left = createTreeNode(data);
                    node.left.parent = node;
                } else {
                    insertInOrderRecur(node.left, data);
                }
            } else {
                if (node.right === undefined) {
                    node.right = createTreeNode(data);
                    node.right.parent = node;
                } else {
                    insertInOrderRecur(node.right, data);
                }
            }
            ++node.size;
        },
        find = function find(data) {
            return findRecur(root, data);
        },
        findRecur = function findRecur(node, data) {
            if (node === undefined)
                return;

            if (node.data === data)
                return node;

            if (data < node.data) {
                return findRecur(node.left, data);
            } else {
                return findRecur(node.right, data);
            }
        },
        decrementTreeSizes = function decrementTreeSizes(node) {
            while (node.parent !== undefined) {
                node.parent.size = node.parent.size - 1;
                node = node.parent;
            }
        },
        makeNodeUndefined = function(nodeToDelete) {
            if (nodeToDelete.parent.left === nodeToDelete) {
                nodeToDelete.parent.left = undefined;
            } else {
                nodeToDelete.parent.right = undefined;
            }
        },
        deleteNode = function deleteNode(data) {
            let nodeToDelete = find(data),
                nodeToReInsert = [],
                collectNodeData = function collectNodeData(node, array) {
                    if (node === undefined)
                        return;

                    array.push(node.data)
                    decrementTreeSizes(node);
                    collectNodeData(node.left, array);
                    collectNodeData(node.right, array);
                };


            collectNodeData(nodeToDelete.left, nodeToReInsert);
            collectNodeData(nodeToDelete.right, nodeToReInsert);
            decrementTreeSizes(nodeToDelete);
            makeNodeUndefined(nodeToDelete);

            nodeToReInsert.forEach((data) => insertInOrder(data));
        };

    return {
        insertInOrder: insertInOrder,
        find: find,
        deleteNode: deleteNode
    };
}