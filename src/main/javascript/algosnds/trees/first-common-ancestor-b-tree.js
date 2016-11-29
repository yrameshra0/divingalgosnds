export default function firstCommonAncestor(curr, nodeA, nodeB) {
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