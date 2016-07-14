let createNode = function createNode() {
        return {
            value: undefined,
            keyArr: new Array(25) // a-z characters length
        };
    },
    keyFunction = function keyFunction(character) {
        return character.charCodeAt(0) - "a".charCodeAt(0);
    },
    reverseKeyFunction = function reverseKeyFunction(charCode) {
        return String.fromCharCode(charCode + "a".charCodeAt(0));;
    },
    findNode = function findNode(currentNode, keyIndex) {
        if (currentNode.keyArr[keyIndex] !== undefined)
            return currentNode.keyArr[keyIndex];

        return createNode();
    },
    removeFirstChar = function removeFirstChar(reqString) {
        let recurKey = reqString.split('');

        recurKey.splice(0, 1);

        return {
            firstChar: reqString[0],
            remainingString: recurKey.join('')
        };
    };

function serialize(keyValuePair) {
    let rootNode = createNode();
    Object.keys(keyValuePair).forEach((key) => {
        let currNode = rootNode;
        key.split('').map((keyChar, index) => {
            let newNode = findNode(currNode, keyFunction(keyChar));
            currNode.keyArr[keyFunction(keyChar)] = newNode;

            if (index === key.length - 1)
                newNode.value = keyValuePair[key];

            currNode = newNode;
        });
    });

    return rootNode;
}

// Failing with xyz and xy keys having value
/** 
## Index based recursion is solution here where in the index is sent at every level 
## Also At every level if the value is found we accumulate the value in accumulator and 
continue ahead
*/
function deSerialize(trieDS) {
    let finalKeyValue = {};

    function recursiveNodeValueSearch(currNode, key) {

        let nodeInfo = {};
        currNode.keyArr.forEach((node, index) => {
            if (node !== undefined) {
                nodeInfo["node"] = node;
                nodeInfo["index"] = index;
            }
        });

        if (nodeInfo.node !== undefined) {
            let node = nodeInfo.node,
                index = nodeInfo.index;
            if (node.value !== undefined) {
                finalKeyValue[key + reverseKeyFunction(index)] = node.value;
            }

            recursiveNodeValueSearch(node, key + reverseKeyFunction(index));
        }
    }

    trieDS.keyArr.forEach((node, index) => {
        if (node !== undefined) {
            recursiveNodeValueSearch(node, reverseKeyFunction(index));
        }
    });

    return finalKeyValue;
}

function find(rootNode, keyString) {
    let key = removeFirstChar(keyString);

    let node = rootNode.keyArr[keyFunction(key.firstChar)];

    if (node.value !== undefined)
        return node.value;

    return find(node, key.remainingString);
}

export { serialize, deSerialize, find };