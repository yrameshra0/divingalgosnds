export default function isBalanced(tree) {

    function checkBalanced(tree) {
        if (tree === undefined)
            return -1;

        let leftHeight = checkBalanced(tree.left);
        if (leftHeight === Number.MIN_VALUE) return Number.MIN_VALUE; // Pass error up before exhaustively moving ahead

        let rightHeight = checkBalanced(tree.right);
        if (rightHeight === Number.MIN_VALUE) return Number.MIN_VALUE; // Pass error up before exhaustively moving ahead

        if (Math.abs(leftHeight - rightHeight) > 1)
            return Number.MIN_VALUE;

        return Math.max(leftHeight, rightHeight) + 1;
    }


    return checkBalanced(tree) !== Number.MIN_VALUE;
}