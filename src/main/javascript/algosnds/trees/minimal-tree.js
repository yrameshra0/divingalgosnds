import { createTreeNode } from '../../../../main/javascript/algosnds/trees/tree-node';

export default function convertToTree(inoderArray) {
    return ( function recurTreeBuild(start, end) {
        if (end <= start)
            return;

        let mid = parseInt((start + end) / 2),
            treeNode = createTreeNode(inoderArray[mid]);

        treeNode.left = recurTreeBuild(start, mid);
        treeNode.right = recurTreeBuild(mid + 1, end);

        return treeNode;
    } )(0, inoderArray.length);
}