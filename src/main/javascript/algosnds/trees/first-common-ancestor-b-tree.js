function usingNonParentTraversal(curr, nodeA, nodeB) {
    let newResult = function newResult(node, ancestor) {
            return {
                node: node,
                isAncestor: ancestor
            };
        },
        result = ( function commonAncestorHelper(curr, nodeA, nodeB) {
            if (curr === undefined)
                return newResult(undefined, false);

            if (curr === nodeA && curr === nodeB)
                return newResult(curr, true);

            let left = commonAncestorHelper(curr.left, nodeA, nodeB);
            if (left.isAncestor)
                return left;

            let right = commonAncestorHelper(curr.right, nodeA, nodeB);
            if (right.isAncestor)
                return right;

            if (left.node !== undefined && right.node !== undefined) {
                return newResult(curr, true);
            } else if (curr === nodeA || curr === nodeB) {
                return newResult(curr, left.node !== undefined || right.node !== undefined);
            }
            else
                return newResult(left.node !== undefined ? left.node : right.node, false);

        } )(curr, nodeA, nodeB);

    if (!result.isAncestor)
        return undefined;

    return result.node;
}

function usingOptimizedParentTraversal(tree, nodeA, nodeB) {
    let covers = function covers(nodeA, nodeB) {
            if (nodeA === undefined) return false;

            if (nodeA === nodeB) return true;

            return covers(nodeA.left, nodeB) || covers(nodeA.right, nodeB);
        },
        getSibling = function getSibling(node) {
            if (node === undefined || node.parent === undefined) return undefined;

            let parent = node.parent;

            return parent.left === node ? parent.right : parent.left;
        };

    if (!covers(tree, nodeA) || !covers(tree, nodeB))
        return undefined;

    if (covers(nodeA, nodeB)) return nodeA;

    if (covers(nodeB, nodeA)) return nodeB;

    // Traversing upwards until we find the node that covers nodeB
    let parent = nodeA.parent,
        sibling = getSibling(nodeA);

    while (!covers(sibling, nodeB)) {
        sibling = getSibling(parent);
        parent = parent.parent;
    }

    return parent;
}

function usingParentTraversal(nodeA, nodeB) {
    let depth = function depth(node) {
            let height = 0;
            while (node !== undefined) {
                height++;
                node = node.parent;
            }

            return height;
        },
        goUpBy = function goUpBy(node, delta) {
            while (delta > 0 && node !== undefined) {
                node = node.parent;
                delta--;
            }

            return node;
        },
        delta = depth(nodeA) - depth(nodeB),
        shalower = delta > 0 ? nodeB : nodeA,
        deeper = delta > 0 ? nodeA : nodeB;

    deeper = goUpBy(deeper, Math.abs(delta));

    while (shalower !== deeper && shalower !== undefined && deeper !== undefined) {
        shalower = shalower.parent;
        deeper = deeper.parent;
    }

    return shalower === undefined || deeper === undefined ? undefined : shalower;
}

export { usingNonParentTraversal, usingOptimizedParentTraversal, usingParentTraversal };
