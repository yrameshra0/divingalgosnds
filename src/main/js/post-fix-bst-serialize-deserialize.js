
function createTreeNode(rootData) {
    return {
        data: rootData,
        left: undefined,
        right: undefined
    };
}

function findLargesElemIndex(rootData, array, start, end) {
    let i = 0;
    for (i = start; i <= end; i++)
        if (rootData < array[i])
            break;

    return i;
}

function postFixBSTDeserializer(array, start, end) {
    if (start > end)
        return undefined;

    let node = createTreeNode(array[start]);

    let maxElemIdx = findLargesElemIndex(node.data, array, start + 1, end);
    node.left = postFixBSTDeserializer(array, start + 1, maxElemIdx - 1);
    node.right = postFixBSTDeserializer(array, maxElemIdx, end);

    return node;
}

function postFixBSTSerializer(array, node) {
    if (node === undefined || node.data === undefined)
        return;

    array.push(node.data);
    postFixBSTSerializer(array, node.left);
    postFixBSTSerializer(array, node.right);

    return array;
}

function serializeToArray(tree) {
    return postFixBSTSerializer([], tree);
}

function deSerializeToTree(data) {
    return postFixBSTDeserializer(data, 0, data.length - 1);
}

export { serializeToArray, deSerializeToTree };