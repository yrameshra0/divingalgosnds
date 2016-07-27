export default function fetchClusters(matrix) {
    let maxRowIdx = matrix.length - 1,
        maxColIdx = matrix[0].length - 1,
        visitedMatrix = [],
        clusterCount = 0;

    ( function initializeVisitedMatrix() {

        matrix.forEach((row, rowIdx) => {
            let rowArr = [];
            row.forEach((column, colIdx) => {
                rowArr.push(false);
            });
            visitedMatrix.push(rowArr);
        });
    } )();



    matrix.forEach((row, rowIdx) => {
        row.forEach((column, colIdx) => {
            if (column === 1 && visitedMatrix[rowIdx][colIdx] === false) {
                clusterCount += 1;
                depthFirstSearch(rowIdx, colIdx);
            }
        });
    });

    function depthFirstSearch(rowIdx, colIdx) {
        // Going beyond bounds
        if (rowIdx < 0 || rowIdx > maxRowIdx || colIdx < 0 || colIdx > maxColIdx) {
            return;
        }
        // Encountered 0
        if (matrix[rowIdx][colIdx] === 0)
            return;

        // Encountered already visited node
        if (visitedMatrix[rowIdx][colIdx] === true)
            return;

        // Fresh node for marking
        if (matrix[rowIdx][colIdx] === 1)
            visitedMatrix[rowIdx][colIdx] = true;


        depthFirstSearch(rowIdx - 1, colIdx - 1);
        depthFirstSearch(rowIdx, colIdx - 1);
        depthFirstSearch(rowIdx + 1, colIdx - 1);

        depthFirstSearch(rowIdx - 1, colIdx);
        depthFirstSearch(rowIdx + 1, colIdx);

        depthFirstSearch(rowIdx - 1, colIdx + 1);
        depthFirstSearch(rowIdx, colIdx + 1);
        depthFirstSearch(rowIdx + 1, colIdx + 1);
    }

    return clusterCount;
}