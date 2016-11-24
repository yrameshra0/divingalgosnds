import _ from 'lodash';

function validateUsingInOrderArray(tree) {
    let inorderArray = ( function generateInOrderArray(node, array) {
        if (node === undefined) return;

        generateInOrderArray(node.left, array);
        array.push(node.data);
        generateInOrderArray(node.right, array);

        return array;
    } )(tree, []);

    return _.isEqual(inorderArray, _.sortBy(inorderArray));
}

function validateUsingLastSeen(tree) {
    let lastSeen = undefined;

    return ( function checkBST(node) {
        if (node === undefined) return true;

        if (!(checkBST(node.left))) return false;

        if (lastSeen !== undefined && node.data <= lastSeen) return false;

        lastSeen = node.data;

        if (!(checkBST(node.right))) return false;

        return true;
    }(tree));
}

function validateUsingMinAndMax(tree) {
    return ( function checkBST(node, min, max) {
        if (node === undefined) return true;

        if ((min !== undefined && node.data <= min) || (max !== undefined && node.data > max))
            return false;

        if (!checkBST(node.left, min, node.data) || !(checkBST(node.right, node.data, max)))
            return false;

        return true;

    }(tree, undefined, undefined));
}

export { validateUsingInOrderArray, validateUsingLastSeen, validateUsingMinAndMax };