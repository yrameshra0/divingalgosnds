let stringBasedCheck = function stringBasedCheck(t1, t2) {
        let getOrderString = function getOrderString(node, treeDataHolder = []) {
                if (node === undefined) {
                    treeDataHolder.push('X');
                    return;
                }

                treeDataHolder.push(node.data);
                getOrderString(node.left, treeDataHolder);
                getOrderString(node.right, treeDataHolder);

                return treeDataHolder.join(' ');
            },
            t1Representation = getOrderString(t1),
            t2Representation = getOrderString(t2);

        return t1Representation.indexOf(t2Representation) !== -1;
    },
    treeContainsBasedCheck = function treeContainsBasedCheck(t1, t2) {
        let subTreeCheck = function subTreeCheck(node1, node2) {
                if (node1 === undefined) return false;

                if (node1.data === node2.data && matchTree(node1, node2))
                    return true;

                return subTreeCheck(node1.left, node2) || subTreeCheck(node1.right, node2);
            },
            matchTree = function matchTree(node1, node2) {
                if (node1 === undefined && node2 === undefined)
                    return true;
                if (node1 === undefined || node2 === undefined)
                    return false; // exactly tree is empty and hence they don't match
                if (node1.data !== node2.data)
                    return false;

                return matchTree(node1.left, node2.left) && matchTree(node1.right, node2.right);
            };

        if (t2 === undefined) return true

        return subTreeCheck(t1, t2);
    };


export { stringBasedCheck, treeContainsBasedCheck };