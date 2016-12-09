const treeNode = function treeNode(newData) {
    const data = newData;
    let size = 0;
    let left = undefined;
    let right = undefined;
    const insertInOrder = function insertInOrder(newData) {
        if (newData <= data) {
            if (left === undefined) {
                left = treeNode(newData);
            } else {
                left.insertInOrder(newData);
            }
        } else {
            if (right === undefined) {
                right = treeNode(newData);
            } else {
                right.insertInOrder(newData);
            }
        }
        this.size++;
    };

    const find = function find(data) {
        if (data === this.data)
            return this;

        if (data < this.data) {
            return left !== undefined ? left.find(data) : undefined;
        } else {
            return right !== undefined ? right.find(data) : undefined;
        }
    };

    return {
        data: data,
        left: left,
        right: right,
        size: size,
        insertInOrder: insertInOrder,
        find: find
    };
}
let root = undefined;
const insertInOrder = function insertInOrder(newData) {
    if (root === undefined) {
        root = treeNode(newData);
    } else {
        root.insertInOrder(newData);
    }
};
const find = function find(data) {
    return root.find(data);
};

export { insertInOrder, find };