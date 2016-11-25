function createTreeNode(data) {
    return {
        data: data,
        left: undefined,
        right: undefined
    };
}

function createTreeNodeWithParent(data, parent) {
    return {
        data: data,
        left: undefined,
        right: undefined,
        parent: parent
    };
}

export { createTreeNode, createTreeNodeWithParent };
