export default function lowestCommonAncestor(curr, nodeA, nodeB) {

    if (curr === undefined)
        return undefined;

    if (curr.data === nodeA || curr.data === nodeB)
        return curr;

    let left = lowestCommonAncestor(curr.left, nodeA, nodeB);
    let right = lowestCommonAncestor(curr.right, nodeA, nodeB);

    if (left !== undefined && right !== undefined)
        return curr;

    if (left === undefined)
        return right;
    else
        return left;
}