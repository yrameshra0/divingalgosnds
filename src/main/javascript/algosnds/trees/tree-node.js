function createTreeNode(data) {
    return {
        data: data,
        left: undefined,
        right: undefined,
        parent: undefined
    };
}

export { createTreeNode };
