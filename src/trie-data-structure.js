let createNode = function createNode() {
        return {
            value: undefined,
            keyArr: new Array(25) // a-z characters length
        };
    },
    supportedCharsStart = "a".charCodeAt(0),
    keyFunction = function keyFunction(character) {
        return character.charCodeAt(0) - supportedCharsStart;
    },
    reverseKeyFunction = function reverseKeyFunction(charCode) {
        return String.fromCharCode(charCode + supportedCharsStart);
    },
    findNode = function findNode(currentNode, keyIndex) {
        if (currentNode.keyArr[keyIndex] !== undefined)
            return currentNode.keyArr[keyIndex];

        return createNode();
    },
    filterFirstChar = function filterFirstChar(key) {
        let splicedKey = key.split('');

        splicedKey.splice(0, 1);

        return {
            firstChar: key[0],
            splicedKey: splicedKey.join('')
        };
    };

function serialize(keyValuePair) {
    let rootNode = createNode();
    Object.keys(keyValuePair).forEach((key) => {
        let currNode = rootNode;
        key.split('').forEach((keyChar, index) => {
            let newNode = findNode(currNode, keyFunction(keyChar));
            currNode.keyArr[keyFunction(keyChar)] = newNode;

            if (index === key.length - 1)
                newNode.value = keyValuePair[key];

            currNode = newNode;
        });
    });

    return rootNode;
}

function deSerialize(trieDS) {
    let finalKeyValue = {};

    function findAndAppendValueToFinalKeyValue(node, key, index) {
        if (node.value !== undefined)
            finalKeyValue[key + reverseKeyFunction(index)] = node.value;
    }

    function recursiveNodeValueSearch(currNode, key) {
        currNode.keyArr.forEach((node, index) => {
            if (node !== undefined) {
                findAndAppendValueToFinalKeyValue(node, key, index);

                recursiveNodeValueSearch(node, key + reverseKeyFunction(index));
            }
        });
    }

    ( function searchRootNodeKeyArray(rootNode) {
        rootNode.keyArr.forEach((node, index) => {
            if (node !== undefined) {
                recursiveNodeValueSearch(node, reverseKeyFunction(index));
            }
        });
    } )(trieDS);


    return finalKeyValue;
}

function find(rootNode, keyString) {
    let key = filterFirstChar(keyString);

    let node = rootNode.keyArr[keyFunction(key.firstChar)];

    if (node.value !== undefined)
        return node.value;

    return find(node, key.splicedKey);
}

export { serialize, deSerialize, find };