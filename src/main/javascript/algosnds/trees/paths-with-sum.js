export default function pathsSum() {
    const countTotalPathsNotOptimized = function countTotalPathsNotOptimized(tree, targetSum) {
        const totalPathsCount = function totalPathsCount(node, targetSum, currentSum) {
            if (!node) return 0;

            currentSum += node.data;
            let totalPaths = 0;
            if (currentSum === targetSum) {
                totalPaths++;
            }

            totalPaths += totalPathsCount(node.left, targetSum, currentSum);
            totalPaths += totalPathsCount(node.right, targetSum, currentSum);

            return totalPaths;
        };

        const rootPaths = totalPathsCount(tree, targetSum, 0);
        const leftSubTreePaths = totalPathsCount(tree.left, targetSum, 0);
        const rightSubTreePaths = totalPathsCount(tree.right, targetSum, 0);

        return rootPaths + leftSubTreePaths + rightSubTreePaths;
    }


    return {
        countTotalPathsNotOptimized: countTotalPathsNotOptimized
    };
}