let recursiveLevelOrderList = function recursiveLevelOrderList(tree) {
        function fetchLevelArray(accumulator, level) {
            if (accumulator[level] === undefined)
                accumulator[level] = [];

            return accumulator[level];
        }

        return ( function recurTreeToList(traverseTree, level, accumulator) {
            if (traverseTree === undefined)
                return;

            let levelArray = fetchLevelArray(accumulator, level);

            levelArray.push(traverseTree.data);
            recurTreeToList(traverseTree.left, level + 1, accumulator);
            recurTreeToList(traverseTree.right, level + 1, accumulator);

            return accumulator;

        } )(tree, 0, []);
    },
    bfsLevelOrderList = function bfsLevelOrderList(tree) {
        let queue = [],
            accumulator = [],
            fillLevelArray = function fillLevelArray() {
                let levelArray = [];
                queue.forEach((element) => {
                    levelArray.push(element.data);
                });

                accumulator.push(levelArray);
            };

        queue.push(tree);

        while (queue.length > 0) {
            fillLevelArray(); // Adding Previous Level
            let parents = queue; // Moving with next levels

            queue = [];

            parents.forEach((parent) => {
                if (parent !== undefined) {
                    if (parent.left !== undefined)
                        queue.push(parent.left);
                    if (parent.right !== undefined)
                        queue.push(parent.right);
                }
            });
        }

        return accumulator;
    };

export { recursiveLevelOrderList, bfsLevelOrderList };