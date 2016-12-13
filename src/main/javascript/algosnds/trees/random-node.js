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
        deleteNode = function deleteNode(data) {
            let nodeToDelete = find(data);
            if (nodeToDelete.left === undefined && nodeToDelete.right === undefined) {
                ( function deleteRootNode(nodeToDelete) {
                    if (nodeToDelete.parent.left === nodeToDelete) {
                        nodeToDelete.parent.left = undefined;
                    } else {
                        nodeToDelete.parent.right = undefined;
                    }
                } )(nodeToDelete);
            }

            ( function updateTreeSizes(nodeToDelete) {
                while (nodeToDelete.parent !== undefined) {
                    nodeToDelete.parent.size = nodeToDelete.parent.size - 1;
                    nodeToDelete = nodeToDelete.parent;

                }
            } )(nodeToDelete);

            console.log(root);
        };

    return {
        insertInOrder: insertInOrder,
        find: find,
        deleteNode: deleteNode
    };
}