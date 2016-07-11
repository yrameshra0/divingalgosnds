let createNode = function createNode() {
        return {
            value: undefined,
            keyArr: new Array(25) // a-z characters length
        };
    },
    keyFunction = function keyFunction(character) {
        return character.charCodeAt(0) - "a".charCodeAt(0);
    },
    findNode = function findNode(currentNode, keyIndex) {
        if (currentNode.keyArr[keyIndex] !== undefined)
            return currentNode.keyArr[keyIndex];

        return createNode();
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

function deSerialize(trieDS) {

}

export { serialize, deSerialize };