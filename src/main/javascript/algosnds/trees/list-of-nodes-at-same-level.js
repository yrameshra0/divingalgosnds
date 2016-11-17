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
        let current = [],
            accumulator = [],
            fillLevelArray = function fillLevelArray() {
                let levelArray = [];
                current.forEach((element) => {
                    levelArray.push(element.data);
                });

                accumulator.push(levelArray);
            };

        current.push(tree);

        while (current.length > 0) {
            fillLevelArray(); // Adding Previous Level
            let parents = current; // Moving with next levels

            current = [];

            parents.forEach((parent) => {
                if (parent !== undefined) {
                    if (parent.left !== undefined)
                        current.push(parent.left);
                    if (parent.right !== undefined)
                        current.push(parent.right);
                }
            });
        }

        return accumulator;
    };

export { recursiveLevelOrderList, bfsLevelOrderList };