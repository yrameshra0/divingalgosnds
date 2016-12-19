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

    const countTotalPathsOptimized = function countTotalPathsOptimized(tree, targetSum) {
        const updatePathCount = function updatePathCount(pathCount, key, delta) {
            const newCount = (pathCount[key] ? pathCount[key] : 0) + delta;
            if (newCount === 0)
                pathCount[key] = undefined;
            else
                pathCount[key] = newCount;
        };

        return ( function totalPathsCount(node, targetSum, runningSum, pathCount) {
            if (!node) return 0;

            runningSum += node.data;
            const sum = runningSum - targetSum;
            let totalPaths = (pathCount[sum] ? pathCount[sum] : 0);

            if (runningSum === targetSum)
                totalPaths++;

            updatePathCount(pathCount, runningSum, 1);
            totalPaths += totalPathsCount(node.left, targetSum, runningSum, pathCount);
            totalPaths += totalPathsCount(node.right, targetSum, runningSum, pathCount);
            updatePathCount(pathCount, runningSum, -1);

            return totalPaths;

        } )(tree, targetSum, 0, {});
    }


    return {
        countTotalPathsNotOptimized: countTotalPathsNotOptimized,
        countTotalPathsOptimized: countTotalPathsOptimized
    };
}