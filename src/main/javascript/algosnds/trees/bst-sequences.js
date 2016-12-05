let allSequences = function allSequences(node) {
        let result = [];
        if (node === undefined) {
            result.push([]);
            return result;
        }

        let prefix = [];
        prefix.push(node.data);

        let leftSequences = allSequences(node.left),
            rightSequences = allSequences(node.right);

        leftSequences.forEach((left) => {
            rightSequences.forEach((right) => {
                let weaved = [];
                weaveLists(left, right, prefix, weaved);
                result.push(...weaved);

            });
        });

        return result;
    },
    weaveLists = function weaveLists(first, second, prefix, results) {

        if (first.length === 0 || second.length === 0) {
            let result = Object.assign([], prefix);
            result.push(...first);
            result.push(...second);
            results.push(result);
            return;
        }

        let headFirst = first.shift();
        prefix.push(headFirst);
        weaveLists(first, second, prefix, results);
        prefix.pop();
        first.push(headFirst);

        let headSecond = second.shift();
        prefix.push(headSecond);
        weaveLists(first, second, prefix, results);
        prefix.pop();
        second.push(headSecond);
    };


export default allSequences;