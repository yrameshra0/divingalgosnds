export default function convertToTree(inoderArray) {
    let createNode = function createNode(data) {
            return {
                root: data,
                left: undefined,
                right: undefined
            };
        },
        recurTreeBuild = function recurTreeBuild(start, end) {
            if (end <= start)
                return;

            let mid = parseInt((start + end) / 2),
                treeNode = createNode(inoderArray[mid]);

            treeNode.left = recurTreeBuild(start, mid);
            treeNode.right = recurTreeBuild(mid + 1, end);

            return treeNode;
        };

    return recurTreeBuild(0, inoderArray.length);;
}